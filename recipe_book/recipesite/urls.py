from django.urls import path
from . import views

urlpatterns = [
    path('search', views.search, name='search'),
    path('recipe/<int:recipe_id>', views.getRecipe, name='get_recipe'),
    path('recipe/<int:recipe_id>/update/', views.updateRecipe, name='update_recipe'),
    path('recipe/new', views.newRecipe, name='new_recipe'),
]