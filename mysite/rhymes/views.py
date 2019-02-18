from django.shortcuts import render
from django.http import HttpResponse

def comprehension(request):
    return render(request, 'rhymes/mine.html')

def home(request):
    return render(request, 'rhymes/home.html')

def math(request):
    return render(request, 'rhymes/math.html')

def parent(request):
    return render(request, 'rhymes/parent.html')

def colourgames(request):
	return render(request,'rhymes/game.html')

def index(request):
	return render(request,'rhymes/index.html')