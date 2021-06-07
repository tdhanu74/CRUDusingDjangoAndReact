from rest_framework import serializers
from .models import list1

#Converts Objects to JSON format
class list1Serializer(serializers.ModelSerializer):
    class Meta:
        model = list1
        fields = ('auto_increment_id','timestamp', 'data')