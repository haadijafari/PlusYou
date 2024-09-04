from django.shortcuts import render
from apps.api import models


def index_view(request, *args, **kwargs):
    context = {
        'site_settings': models.SiteSettings.objects.filter(is_active=True).first()
    }
    return render(request, 'index_render.html', context)
