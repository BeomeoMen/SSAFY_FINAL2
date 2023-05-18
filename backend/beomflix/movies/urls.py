from django.urls import path
from movies import views_tmdb, views

# movies/ => enculde
urlpatterns = [
    # API 데이터 DB 저장
    path('tmdb/', views_tmdb.tmdb_data),
]
