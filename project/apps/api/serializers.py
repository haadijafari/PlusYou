from rest_framework import serializers

from . import models


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MenuItem
        # fields = '__all__'
        exclude = ['is_active']


class CategorySerializer(serializers.ModelSerializer):
    # category_set = MenuItemSerializer(read_only=True, many=True)

    class Meta:
        model = models.Category
        # fields = '__all__'
        exclude = ['is_active']


class CategoryDetailSerializer(serializers.ModelSerializer):
    menu_items = MenuItemSerializer(source='category_set', many=True, read_only=True)

    class Meta:
        model = models.Category
        # fields = ('id', 'title', 'en_title', 'menu_items')
        exclude = ['is_active']


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SiteSettings
        # fields = ['title', 'logo', 'email', 'phone', 'address', 'about']
        exclude = ['is_active']
