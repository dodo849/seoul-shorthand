from django.shortcuts import render

# Create your views here.

def goMain(request):
    return render(request, 'main.html')

def goIntro(request):
    return render(request, 'intro.html')

def goAbout(request):
    return render(request, 'about.html')

def goCareer(request):
    return render(request, 'career.html')

def goRoad(request):
    return render(request, 'road.html')