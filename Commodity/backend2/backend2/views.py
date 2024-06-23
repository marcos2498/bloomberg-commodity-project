from django.http import JsonResponse
from django import forms
from .models import Commodity
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt


class CommodityForm(forms.ModelForm):
    class Meta:
        model = Commodity
        fields = ['name', 'description', 'price', 'time', 'unit']
