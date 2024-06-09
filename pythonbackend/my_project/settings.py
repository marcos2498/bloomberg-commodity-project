SECRET_KEY = 'wow'
DEBUG = True
ALLOWED_HOSTS = ['localhost', '127.0.0.1']
DATABASES = {
    'default': {
        # or other supported database engines
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'FX-CMTY',
        'USER': 'your-database-user',
        'PASSWORD': 'your-database-password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'my_app',
]

ROOT_URLCONF = 'my_project.urls'
STATIC_URL = '/static/'
STATICFILES_DIRS = ['C:\Users\User\Desktop\project 1\Commodity',]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        # Path to your templates directory
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
]
CSRF_COOKIE_SECURE = not DEBUG
SESSION_COOKIE_SECURE = not DEBUG

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
