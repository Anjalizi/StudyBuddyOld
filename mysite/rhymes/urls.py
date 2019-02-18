from django.urls import path
from . import views
from django.conf.urls import url

urlpatterns = [
    url(r'comprehension', views.comprehension, name='comprehension'), 
    url(r'math', views.math, name='math'), 
    url(r'parent', views.parent, name='parent'), 
    url(r'colourgames', views.colourgames, name='colourgames'),
    url(r'index', views.index, name='index'),
]