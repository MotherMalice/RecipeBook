from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from .models import Recipe
from .serializers import RecipeSerializer, CardSerializer


# Create your views here.

@api_view(['GET'])
def search(request):
    recipes = Recipe.objects.all()
    serializer = CardSerializer(recipes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRecipe(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    serializer = RecipeSerializer(recipe)
    return Response(serializer.data)

@api_view(['POST'])
def newRecipe(request):
    return Response({'message': 'New Response until Integrate'})

@api_view(['PUT'])
def updateRecipe(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    serializer = RecipeSerializer(recipe, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)