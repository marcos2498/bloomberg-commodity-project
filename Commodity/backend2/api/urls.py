# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('securities/', views.securities_view, name='securities'),
    path('add_commodity/', views.create_commodity, name='add_commodity')
]

#securities and add_commodity are functions defined in my views file 

