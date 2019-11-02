"""from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.index , name='index'),
]
"""

from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                   
from . import views    


router = routers.DefaultRouter()                     
router.register(r'DataView', views.DataView, 'DataView')     
router.register(r'DetailView',views.DetailView , 'DetailView')
urlpatterns = [
    path('',views.index , name='index'),
    path('api/', include(router.urls)),             
]
