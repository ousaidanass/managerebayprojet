from django.shortcuts import render, get_object_or_404
from .models import Service


def home(request):
    services = Service.objects
    return render(request, 'home.html', {'services': services})

def service(request, service_id):
    service_selectionner = get_object_or_404(Service, pk=service_id)
    return render(request, 'services/' + str(service_selectionner.html_name), {'service_selectionner': service_selectionner})
