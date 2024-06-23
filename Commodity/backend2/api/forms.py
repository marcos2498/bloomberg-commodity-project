# api/forms.py

from django import forms
from .models import Commodity


class CommodityForm(forms.ModelForm):
    class Meta:
        model = Commodity  # This tells Django to use the Commodity model
        fields = '__all__'  # This includes all fields from the Commodity model

        # Alternatively, you can specify only certain fields:
        # fields = ['name', 'unit', 'price']  # Example of including specific fields

        # You can also exclude certain fields:
        # exclude = ['created_at', 'updated_at']  # Example of excluding fields
