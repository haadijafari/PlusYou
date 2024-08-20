from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('get-site-settings', views.SiteSettingsApiView.as_view(), name='settings-api'),
    path('get-items', views.ItemListApiView.as_view(), name='items-api'),
    path('get-categories', views.CategoryListApiView.as_view(), name='categories-api'),
    path('get-categories/<int:pk>', views.CategoryDetailApiView.as_view(), name='categories-detail-api'),
]
