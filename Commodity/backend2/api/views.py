import json  # needed for communication between frontend and backend
from django.http import JsonResponse
# for views that do not require protection
from django.views.decorators.csrf import csrf_exempt
from .models import Commodity
from .forms import CommodityForm
# needed for reponse rendering from post and get requests
from rest_framework.decorators import api_view
from rest_framework.response import Response  # returns data to database


@csrf_exempt
def securities_view(request):
    if request.method == 'GET':
        query = request.GET.get('query', '')
        commodities = Commodity.objects.filter(name__icontains=query)
        results = [{'id': commodity.id, 'name': commodity.name,
                    'description': commodity.description} for commodity in commodities]
        data = {'results': results}
        return JsonResponse(data)

    elif request.method == 'POST':
        # Handle add or remove operation (just a placeholder)
        action = request.POST.get('action')
        security_name = request.POST.get('security_name')
        # Process the action in your database (example)
        return JsonResponse({'message': f'{action} operation successful for {security_name}'})

    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


@api_view(['POST'])
def create_commodity(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = CommodityForm(data)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Commodity created successfully'})
        else:
            return JsonResponse({'errors': form.errors}, status=400)

    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
