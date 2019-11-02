from django.shortcuts import render,HttpResponse
from django.http import JsonResponse
from rest_framework import viewsets ,filters        
from .serializers import DataSerializer,DetailSerializer
from .models import dataa,episode

# Create your views here.
def index(request):
    return HttpResponse("in")

class DataView(viewsets.ModelViewSet):       
  serializer_class = DataSerializer        
  queryset = dataa.objects.order_by('Season')
  
  
class DetailView(viewsets.ModelViewSet):    
  search_fields = ['companytitle']
  filter_backends = (filters.SearchFilter,)
  serializer_class = DetailSerializer        
  queryset = episode.objects.order_by('Season')
  
  