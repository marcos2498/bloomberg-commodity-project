from django.urls import path
from . import views

urlpatterns = [
    path('add_commodity/', views.add_commodity, name='add_commodity'),
]
