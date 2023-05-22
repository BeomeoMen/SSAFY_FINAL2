from django.urls import path
from accounts import views

# accounts/ => enculde
urlpatterns = [
    path('profile/<int:user_id>/', views.profile_user_id, name='profile_user_id'),
    path('profile/<str:username>/', views.profile_username, name='profile_username'),
    path('profile/<str:username>/follow/', views.follow, name='follow'), 
]
