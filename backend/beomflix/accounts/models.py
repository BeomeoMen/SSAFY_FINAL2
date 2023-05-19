from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class User(AbstractUser):
    nickname = models.CharField(max_length=20, blank=True)
    profile_path = models.CharField(max_length=10000, blank=True)
    followings = models.ManyToManyField('self', related_name='followers', symmetrical=False)
