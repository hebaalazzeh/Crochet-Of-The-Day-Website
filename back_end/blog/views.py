from django.shortcuts import render
from .models import Post


def post_list(request):
    # look into this
    posts = Post.objects.filter(published=True).order_by('-publish_date')
    return render(request, 'post_list.html', {'posts': posts})


def post_detail(request, slug):
    post = get_object_or_404(Post, slug=slug)
    return render(request, 'post_detail.html', {'post': post})
