from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list), # list all companies 
    path('companies/<int:id>/', views.company_detail), # get one company by id
    path('companies/<int:id>/vacancies/', views.company_vacancies), # list vacancies of company
    path('vacancies/', views.vacancy_list), # list all vacancies
    path('vacancies/<int:id>/', views.vacancy_detail), # get on vacancy
    path('vacancies/top_ten/', views.top_ten_vacancies), # get top 10 vacancies by salary
]
