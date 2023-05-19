from django.urls import path
from comments import views

# movies/ => enculde
urlpatterns = [
    # 프로필 유저 생성
    path('profileuser/', views.profileuser_list, name='profileuser_list'),
    # 프로필 유저 댓글 생성(POST)
    path('profileuser/<int:profile_pk>/comment/', views.comment_create, name='comment_create'),
]
