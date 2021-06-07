from django.contrib import admin
from .models import list1

class List1Admin(admin.ModelAdmin):
    list1_display = ('auto_increment_id','timestamp','data')

# Register your models here.

admin.site.register(list1,List1Admin)