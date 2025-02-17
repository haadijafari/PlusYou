from .base import *


ALLOWED_HOSTS = [
    'plus-you.ir',
]

INTERNAL_IPS = [
    'plus-you.ir',
]

MIDDLEWARE += [
    'csp.middleware.CSPMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.environ['SQL_NAME'],
        'USER': os.environ['SQL_USER'],
        'PASSWORD': os.environ['SQL_PASS'],
        'HOST': 'localhost',
        'PORT': '3306',
        'OPTIONS': {
            'sql_mode': 'traditional',
            'charset': 'utf8mb4',  # Add this line to support Persian and Arabic characters
            'init_command': "SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci'",  # Ensure connection uses utf8mb4
        }
    }
}
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

STATIC_ROOT = '/home/plusyoui/public_html/static'
MEDIA_ROOT = '/home/plusyoui/public_html/media'
# STATIC_ROOT = BASE_DIR / "static_cdn"
# MEDIA_ROOT = BASE_DIR / "media_cdn"
STATIC_URL = '/static/'
MEDIA_URL = '/media/'

STATICFILES_DIRS = [
    BASE_DIR / "frontend/vite-react/dist",
]

# Security
CSRF_COOKIE_SECURE = True  # to avoid transmitting the CSRF cookie over HTTP accidentally.
SESSION_COOKIE_SECURE = True  # to avoid transmitting the session cookie over HTTP accidentally.

SECURE_HSTS_SECONDS = 15780000  # 6 Months as Recommended
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

SECURE_SSL_REDIRECT = True

SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True

# CSP Policies
CSP_DEFAULT_SRC = ("'self'",)
CSP_STYLE_SRC = ("'self'", "https://fonts.googleapis.com")
CSP_FONT_SRC = ("'self'", "https://fonts.gstatic.com")
CSP_IMG_SRC = (
    "'self'",
    "https://a.tile.openstreetmap.org",
    "https://b.tile.openstreetmap.org",
    "https://c.tile.openstreetmap.org",
    "https://cdnjs.cloudflare.com",
)
