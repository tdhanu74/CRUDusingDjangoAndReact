from django.shortcuts import render
from rest_framework import viewsets
from .serializers import list1Serializer
from .models import list1

# Create your views here.

class list1View(viewsets.ModelViewSet):
    serializer_class = list1Serializer
    queryset = list1.objects.all()