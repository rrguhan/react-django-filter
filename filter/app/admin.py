from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import *
from import_export import resources



@admin.register(dataa)
class ViewAdmin(ImportExportModelAdmin):
    fields = ('Season',	'No_in_series',	'Company',	'Deal',	'Industry',	'Entrepreneur_Gender',	'Amount',	'Equity',	'Valuation',	'Corcoran',	'Cuban',	'Greiner',	'Herjavec',	'John',	'Oleary',	'Harrington',	'Guest',	'Sharks',	'pershark',	'DetailsNotes',)
    exclude = ('id',)
    search_fields = ('Season',	'No_in_series',	'Company',	'Deal',	'Industry',	'Entrepreneur_Gender',	'Amount',	'Equity',	'Valuation',	'Corcoran',	'Cuban',	'Greiner',	'Herjavec',	'John',	'Oleary',	'Harrington',	'Guest',	'Sharks',	'pershark',	'DetailsNotes',)
    list_display = ('Season',	'No_in_series',	'Company',	'Deal',	'Industry',	'Entrepreneur_Gender',	'Amount',	'Equity',	'Valuation',	'Corcoran',	'Cuban',	'Greiner',	'Herjavec',	'John',	'Oleary',	'Harrington',	'Guest',	'Sharks',	'pershark',	'DetailsNotes',)
    
@admin.register(episode)
class ViewAdmin(ImportExportModelAdmin):
    fields = (	'Season',	'Episode',	'product',	'location',	'social001',	'social002',	'social003',	'social004',	'status',	'investors'	,'kitna',	'companytitle',	'companylink',)
    exclude = ()
    search_fields = (	'Season',	'Episode',	'product',	'location',	'social001',	'social002',	'social003',	'social004',	'status',	'investors'	,'kitna',	'companytitle',	'companylink',)
    list_display = (	'Season',	'Episode',	'product',	'location',	'social001',	'social002',	'social003',	'social004',	'status',	'investors'	,'kitna',	'companytitle',	'companylink',)
    


