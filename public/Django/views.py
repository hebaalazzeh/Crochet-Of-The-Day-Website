# views.py

from django.shortcuts import render, redirect
from .forms import PatternForm


def add_pattern(request):
    if request.method == 'POST':
        form = PatternForm(request.POST)
        if form.is_valid():
            form.save()
            # Redirect to a success page or another URL
            return redirect('success')
    else:
        form = PatternForm()
    return render(request, 'add_pattern.html', {'form': form})
