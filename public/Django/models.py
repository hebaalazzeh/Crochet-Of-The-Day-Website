from django.db import models


class AddPattern(models.Model):
    author = models.CharField(max_length=200, null=False, blank=False)
    title = models.CharField(max_length=200, null=False, blank=False)
    description = models.TextField()

    def __str__(self):
        return self.title
