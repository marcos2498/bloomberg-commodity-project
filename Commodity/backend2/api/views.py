from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Commodity
from .forms import CommodityForm


@csrf_exempt
def securities_view(request):
    if request.method == 'GET':
        # Handle search operation (just a placeholder)
        query = request.GET.get('query')
        # Perform search in your database and return results (example)
        data = {'results': ['security1', 'security2']}
        return JsonResponse(data)

    elif request.method == 'POST':
        # Handle add or remove operation (just a placeholder)
        action = request.POST.get('action')
        security_name = request.POST.get('security_name')
        # Process the action in your database (example)
        return JsonResponse({'message': f'{action} operation successful for {security_name}'})

    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


@csrf_exempt
def add_commodity(request):
    if request.method == 'POST':
        form = CommodityForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'message': 'Commodity added successfully'})
        else:
            return JsonResponse({'errors': form.errors}, status=400)

    return JsonResponse({'error': 'Only POST requests are allowed'}, status=405)
