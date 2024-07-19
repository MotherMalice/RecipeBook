from django.core.management.base import BaseCommand
from faker import Faker
from recipesite.models import Recipe
class Command(BaseCommand):
    help = 'Generate fake data for testing'

    def handle(self, *args, **kwargs):
        fake = Faker()

        # Generate fake recipes
        for _ in range(10):  # Generate 10 fake recipes
            Recipe.objects.create(
                title=fake.sentence(nb_words=4),
                description=fake.paragraph(),
                image=fake.image_url(),
                summary=fake.sentence(),
                ingredients=fake.text(),
            )

        self.stdout.write(self.style.SUCCESS('Fake data generated successfully'))