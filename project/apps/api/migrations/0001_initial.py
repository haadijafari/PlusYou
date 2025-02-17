# Generated by Django 4.2.13 on 2024-08-11 07:54

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Enter menu category title in Persian here', max_length=64, verbose_name='Title')),
                ('en_title', models.CharField(blank=True, help_text='Enter menu category title in English here (Optional)', max_length=64, null=True, verbose_name='English Title')),
                ('is_active', models.BooleanField(default=True, verbose_name='Active / Disable')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='SiteSettings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Plus You', max_length=128, verbose_name='Title')),
                ('logo', models.ImageField(blank=True, default='images/site_profile/logo.png', null=True, upload_to='images/site_profile/logo', verbose_name='Logo')),
                ('email', models.EmailField(max_length=128, verbose_name='Email')),
                ('phone', models.CharField(max_length=32, verbose_name='Phone')),
                ('address', models.CharField(max_length=1024, verbose_name='Address')),
                ('about', ckeditor.fields.RichTextField(verbose_name='About Us')),
                ('is_active', models.BooleanField(default=False, help_text='Warning: You can only have one site setting active. Only check this if you want the previous setting disabled.', verbose_name='Active / Disable')),
            ],
            options={
                'verbose_name': 'Site Setting',
                'verbose_name_plural': 'Site Settings',
            },
        ),
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Enter menu category title in Persian here', max_length=64, verbose_name='Title')),
                ('en_title', models.CharField(blank=True, help_text='Enter menu category title in English here (Optional)', max_length=64, null=True, verbose_name='English Title')),
                ('img', models.ImageField(default='images/menu-items/default.jpg', null=True, upload_to='images/menu-items', verbose_name='Image')),
                ('short_description', models.CharField(help_text='Type a short description in Persian (The Ingredients)', max_length=64, verbose_name='Description')),
                ('en_short_description', models.CharField(blank=True, help_text='Type a short description in English (Optional)', max_length=64, null=True, verbose_name='Description')),
                ('is_active', models.BooleanField(default=True, verbose_name='Active / Disable')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category_set', to='api.category', verbose_name='Category')),
            ],
            options={
                'verbose_name': 'Menu Item',
                'verbose_name_plural': 'Menu Items',
                'ordering': ['title', 'category'],
            },
        ),
    ]
