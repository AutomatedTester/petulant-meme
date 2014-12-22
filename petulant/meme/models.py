from django.db import models

class Keywords(models.Model):
    keywords = models.CharField(max_length=100)

class Urls(models.Model):
    urls = models.TextField()

class Lookup(models.Model):
    keywords = models.ForeignKey(Keywords)
    urls = models.ForeignKey(Urls)
