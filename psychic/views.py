from django.shortcuts import render


def index(request):
    return render(request, 'index.html')
    

def detail(request, id):
    return render(request, 'index.html')