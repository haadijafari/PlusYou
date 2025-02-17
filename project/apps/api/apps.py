from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class IndexConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.api'
    verbose_name = _('Site Configuration')
