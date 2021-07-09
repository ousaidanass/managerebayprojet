from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('<int:service_id>/', views.service, name='service'),
]