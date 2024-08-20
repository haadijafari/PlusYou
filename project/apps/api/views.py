from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics, status
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

from .models import MenuItem, Category, SiteSettings
from .serializers import MenuItemSerializer, CategorySerializer, CategoryDetailSerializer, SiteSettingsSerializer


# region Menu Item API
class ItemListApiPagination(PageNumberPagination):
    page_size = 10


class ItemListApiView(generics.ListAPIView):
    queryset = MenuItem.objects.filter(is_active=True)
    serializer_class = MenuItemSerializer
    pagination_class = ItemListApiPagination


class CategoryListApiView(generics.ListAPIView):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer


class CategoryDetailApiView(generics.RetrieveAPIView):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategoryDetailSerializer
    pagination_class = ItemListApiPagination

    def get(self, request, *args, **kwargs):
        category = self.get_object()
        serializer = self.get_serializer(category)

        # Get menu items for the category
        menu_items = category.category_set.filter(is_active=True)

        # Apply pagination
        paginator = self.pagination_class()
        page = paginator.paginate_queryset(menu_items, request)
        menu_items_serializer = MenuItemSerializer(page, many=True)

        # Build the final response
        data = serializer.data
        data['menu_items'] = menu_items_serializer.data

        return paginator.get_paginated_response(data)


# endregion


# region Site Settings
class SiteSettingsApiView(generics.GenericAPIView):
    queryset = SiteSettings.objects.filter(is_active=True)
    serializer_class = SiteSettingsSerializer

    def get(self, request, *args, **kwargs):
        # Get the first object or return 404
        item = self.get_queryset().first()
        if not item:
            return Response(None, status=status.HTTP_404_NOT_FOUND)

        # Serialize and return the data
        serializer = self.get_serializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)

# endregion
