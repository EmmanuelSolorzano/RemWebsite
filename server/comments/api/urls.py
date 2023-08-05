from .views import  CommentViewSet
from rest_framework import routers
from django.urls import path, include

app_name = 'api-comments'

router = routers.DefaultRouter()
router.register('comments', CommentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
