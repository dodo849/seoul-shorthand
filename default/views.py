from django.shortcuts import render

# Create your views here.

def goMain(request):
    return render(request, 'main.html')