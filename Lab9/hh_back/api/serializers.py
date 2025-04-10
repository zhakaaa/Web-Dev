from rest_framework import serializers
from .models import Company, Vacancy

#convert models to json and vice versa

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
#oliukyt
class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'
