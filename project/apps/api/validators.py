from django.core.exceptions import ValidationError


def icon_validator(value):
    valid_extensions = ['.svg', '.png', '.ico']
    if not value.name.endswith(tuple(valid_extensions)):
        raise ValidationError(f'Unsupported file extension. Allowed extensions are: {", ".join(valid_extensions)}')
