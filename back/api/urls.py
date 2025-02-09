from django.urls import path
from .views import ProfessorListCreate, ProfessorDetail

urlpatterns = [
    path('professores/', ProfessorListCreate.as_view(), name='professor-list-create'),
    path('professores/<int:pk>/', ProfessorDetail.as_view(), name='professor-detail'),
]
