from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'description', 'image', 'summary', 'ingredients']
        read_only_fields = ['id']
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.image = validated_data.get('image', instance.image)
        instance.summary = validated_data.get('summary', instance.summary)
        instance.ingredients = validated_data.get('ingredients', instance.ingredients)
        instance.save()
        return instance

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title', 'image', 'summary']
        read_only_fields = ['id']