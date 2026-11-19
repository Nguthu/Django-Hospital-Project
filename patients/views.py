from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.forms import UserCreationForm
from patients.forms import PatientForm
from patients.models import Patient
from patients.serializers import PatientSerializer
from rest_framework import viewsets
from rest_framework.permissions import AllowAny


# Create your views here.
def index(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('dashboard')
    else:
        form = UserCreationForm()
    return render(request, 'index.html', {'form': form})

def userlogin(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard')
        else:
            return render(request, 'login.html', {'errror': 'Invalid username or password'})
    return render(request, 'login.html')

def dashboard(request):
    patients = Patient.objects.all()
    return render(request, 'dashboard.html', {'patients' : patients})

def profile(request):
    return render(request, 'profile.html')

def booking(request):
    return render(request, 'booking.html')

def add_patient(request):
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('dashboard')
    else:
        form = PatientForm()
    return render(request, 'add_patient.html', {'form' : form})

def delete_patient(request):
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.delete()
            return redirect('dashboard')
    else:
        form = PatientForm()
    return render(request, 'delete_patient.html', {'form' : form})

def edit_patient(request):
    if request.method == 'POST':
        form = PatientForm(request.POST)
        if form.is_valid():
            form.edit()
            return redirect('dashboard')
    else:
        form = PatientForm()
    return render(request, 'edit_patient.html', {'form' : form})

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]