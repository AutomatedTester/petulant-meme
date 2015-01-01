import json

from django import forms
from django.http import HttpResponse
from django.shortcuts import render

from models import Urls, Keywords, Lookup


def index(request):
    if not request.POST:
        all_urls = Urls.objects.all()
        form = GifForm()
        return render(request, 'index.html', {"urls": all_urls, "form": form})
    else:
        form = GifForm(request.POST)
        if form.is_valid():
            formurl = form.cleaned_data['url']
            url = Urls(urls=formurl)
            url.save()
            formkeys = form.cleaned_data['keywords']
            keywords = formkeys.split(',')
            for keyz in keywords:
                key = Keywords(keywords=keyz)
                key.save()
                lookup = Lookup(keywords=key, urls=url)
            return HttpResponse(json.dumps({"success": True, "url": formurl}))
        else:
            return HttpResponse(json.dumps({"error": "Invalid form post"}))

class GifForm(forms.Form):
    url = forms.CharField()
    keywords = forms.CharField()
