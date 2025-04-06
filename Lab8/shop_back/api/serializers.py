from rest_framework import serializers
from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer): # converts the Product objects into JSON format, which is easy to send over HTTP. 
    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):# converts the Product objects into JSON format, which is easy to send over HTTP. 
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'
