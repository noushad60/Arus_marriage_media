from django.shortcuts import render
from django.http import HttpResponse
from .models import user
from .models import registration
from .models import register_user


# Create your views here.
def index(request):
       
    return render(request, 'index.html')


def registration(request):


    return render(request, 'registration.html')
    reg_info = register_user(full_name=name)
    reg_info.save()
    return redirect('index')

def signup(request):
    return render(request, 'signup.html')


def login(request):
    return render(request, 'login.html')
