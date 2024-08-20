from django.contrib import admin

from . import models


@admin.register(models.SiteSettings)
class SiteSettingsAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(models.MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    pass
