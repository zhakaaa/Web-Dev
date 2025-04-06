from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer  # use serializers to convert model data into a format (usually JSON) 


# views handle incoming API requests.
class ProductListView(generics.ListAPIView):

    # Fetch all products from the database
    queryset = Product.objects.all()

    # Serialize the data into JSON format
    serializer_class = ProductSerializer

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetailView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)

