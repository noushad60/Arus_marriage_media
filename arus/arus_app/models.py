from django.db import models


# Create your models here.
class user(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=100)


class registration(models.Model):
    choice = (
        ('pending', 'pending'),
        ('accept', 'Accept')
    )

    username = models.CharField(max_length=200)
    password = models.CharField(max_length=100)
    full_name = models.CharField(max_length=200)
    age = models.CharField(max_length=50)
    profession = models.CharField(max_length=200)
    date_of_birth = models.DateField()
    height = models.CharField(max_length=50)
    designation= models.CharField(max_length=200)
    status = models.CharField(max_length=10, choices=choice)
    gender = models.CharField(max_length=10)


class register_user(models.Model):

    full_name = models.CharField(max_length=200)
