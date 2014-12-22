from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from models import Urls

# Create your views here.
def index(request):
    all_urls = Urls.objects.all()
    return render(request, 'index.html', {"urls": all_urls})