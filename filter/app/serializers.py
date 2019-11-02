

from rest_framework import serializers
from .models import dataa,episode
      
class DataSerializer(serializers.ModelSerializer):
  class Meta:
    model = dataa
    fields = ('id','Season',	'No_in_series',	'Company',	'Deal',	'Industry',	'Entrepreneur_Gender',	'Amount',	'Equity',	'Valuation',	'Corcoran',	'Cuban',	'Greiner',	'Herjavec',	'John',	'Oleary',	'Harrington',	'Guest',	'Sharks',	'pershark',	'DetailsNotes',)
    
class DetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = episode
    fields = ('Season',	'Episode',	'product',	'location',	'social001',	'social002',	'social003',	'social004',	'status',	'investors'	,'kitna',	'companytitle',	'companylink',)
    