from ckeditor.fields import RichTextField
from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _


class SiteSettings(models.Model):
    title = models.CharField(_('Title'), max_length=128, default=_('Plus You'))
    logo = models.ImageField(_('Logo'), upload_to='images/site_profile/logo',
                             default='images/site_profile/logo.png', null=True, blank=True)
    email = models.EmailField(_('Email'), max_length=128)
    phone = models.CharField(_('Phone'), max_length=32, help_text=_('Example: +98913xxxxxxx'))
    telegram = models.CharField(_('Telegram ID'), max_length=256, help_text=_('Please enter the ID without @'),
                                null=True, blank=True)
    instagram = models.CharField(_('Instagram ID'), max_length=256, help_text=_('Please enter the ID without @'),
                                 null=True, blank=True)
    address = models.CharField(_('Address'), max_length=1024)
    latitude = models.FloatField(_('Latitude'), default=32.7024361)
    longitude = models.FloatField(_('Longitude'), default=51.6777003)
    about = RichTextField(_('About Us'))
    opening_closing = models.TextField(_('Opening and Closing Time'))
    is_active = models.BooleanField(_('Active / Disable'), help_text=_(
        'Warning: You can only have one site setting active. ' +
        'Only check this if you want the previous setting disabled.'), default=False)

    class Meta:
        verbose_name = _('Site Setting')
        verbose_name_plural = _('Site Settings')

    def save(self, *args, **kwargs):
        if self.is_active:
            # Set is_active to False for other objects
            SiteSettings.objects.filter(is_active=True).update(is_active=False)
        super(SiteSettings, self).save(*args, **kwargs)

    def __str__(self):
        return f'{self.title} | {self.email}'


class Category(models.Model):
    title = models.CharField(_('Title'), max_length=64, null=False, blank=False,
                             help_text=_('Enter menu category title in Persian here'))
    en_title = models.CharField(_('English Title'), max_length=64, null=True, blank=True,
                                help_text=_('Enter menu category title in English here (Optional)'))
    icon = models.ImageField(_('Icon'), upload_to='images/category', default='images/category/default.jpg', null=True,
                             blank=True)
    is_active = models.BooleanField(_('Active / Disable'), default=True)

    class Meta:
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')

    def __str__(self):
        return f'{self.title}'


class MenuItem(models.Model):
    category = models.ForeignKey(Category, verbose_name=_('Category'), on_delete=models.CASCADE,
                                 related_name='category_set')
    title = models.CharField(_('Title'), max_length=64, null=False, blank=False,
                             help_text=_('Enter menu category title in Persian here'))
    en_title = models.CharField(_('English Title'), max_length=64, null=True, blank=True,
                                help_text=_('Enter menu category title in English here (Optional)'))
    price = models.IntegerField(_('Price'), validators=[MinValueValidator(0)])
    img = models.ImageField(_('Image'), upload_to='images/menu-items', default='images/menu-items/default.jpg',
                            null=True, blank=False)
    short_description = models.CharField(_('Description'), max_length=64, null=False, blank=False,
                                         help_text=_('Type a short description in Persian (The Ingredients)'))
    en_short_description = models.CharField(_('Description'), max_length=64, null=True, blank=True,
                                            help_text=_('Type a short description in English (Optional)'))
    is_active = models.BooleanField(_('Active / Disable'), default=True)

    class Meta:
        verbose_name = _('Menu Item')
        verbose_name_plural = _('Menu Items')
        ordering = ['title', 'category']

    def __str__(self):
        return f'{self.title} | {self.category.__str__()}'
