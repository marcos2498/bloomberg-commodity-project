from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField' #to prevent overflow
    name = 'api' #will be refrenced later in the settings collumn under installed apps
    
