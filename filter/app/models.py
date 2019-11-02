from django.db import models

# Create your models here.
class dataa(models.Model):
    

    id = models.AutoField(primary_key=True)


    Season = models.CharField(max_length=200, blank=True)
    No_in_series = models.CharField(max_length=200, blank=True)
    Company = models.CharField(max_length=200, blank=True)
    Deal = models.CharField(max_length=200, blank=True)
    Industry = models.CharField(max_length=200, blank=True) 
    Entrepreneur_Gender = models.CharField(max_length=200, blank=True)
    Amount = models.CharField(max_length=200, blank=True)
    Equity = models.CharField(max_length=200, blank=True)
    Valuation = models.CharField(max_length=200, blank=True)
    Corcoran = models.CharField(max_length=200, blank=True)
    Cuban = models.CharField(max_length=200, blank=True)
    Greiner	= models.CharField(max_length=200, blank=True)
    Herjavec = models.CharField(max_length=200, blank=True)
    John = models.CharField(max_length=200, blank=True)
    Oleary   = models.CharField(max_length=200, blank=True)
    Harrington = models.CharField(max_length=200, blank=True)
    Guest = models.CharField(max_length=200, blank=True)
    Sharks = models.CharField(max_length=200, blank=True)
    pershark = models.CharField(max_length=200, blank=True)
    DetailsNotes    = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return self.Company


        

class episode(models.Model):
    #id = models.AutoField(primary_key=True)
    Season	= models.CharField(max_length=200, blank=True)
    Episode	= models.CharField(max_length=200, blank=True)
    product	= models.CharField(max_length=200, blank=True)
    location	= models.CharField(max_length=200, blank=True)
    social001	= models.CharField(max_length=200, blank=True)
    social002	= models.CharField(max_length=200, blank=True)
    social003	= models.CharField(max_length=200, blank=True)
    social004	= models.CharField(max_length=200, blank=True)
    status	= models.CharField(max_length=200, blank=True)
    investors	= models.CharField(max_length=200, blank=True)
    kitna	= models.CharField(max_length=200, blank=True)
    companytitle	= models.CharField(max_length=200, blank=True)
    companylink= models.CharField(max_length=200, blank=True)
