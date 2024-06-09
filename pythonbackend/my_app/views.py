from django.http import JsonResponse
from django import forms
from .models import Commodity


class CommodityForm(forms.ModelForm):
    class Meta:
        model = Commodity
        fields = ['name', 'description', 'price', 'time', 'unit']

    def add_commodity(request):
        if request.method == 'POST':
            form = CommodityForm(request.POST)
            if form.is_valid():
                form.save()
                return JsonResponse({'message': 'Commodity added successfully'})
            else:
                return JsonResponse({'errors': form.errors}, status=400)

        return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
