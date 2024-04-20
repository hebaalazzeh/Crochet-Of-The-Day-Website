# urls.py

from django.urls import path
from .views import addPattern

urlpatterns = [
    path('add_pattern/', addPattern, name='addPattern'),
    # Add other URL patterns as needed
]
