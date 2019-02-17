from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'rhymes/help.html')

def home(request):
    return render(request, 'rhymes/home.html')