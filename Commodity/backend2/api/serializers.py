# this file is important for translating between a JSON format and a HTTP request

from rest_framework import serializers

from .models import Commodity


class CommoditySerializer(serializers.ModelSerializer):
    class Meta:
        model = Commodity
        fields = '__all__'
