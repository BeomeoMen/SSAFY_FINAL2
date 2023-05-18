from django.urls import path
from movies import views_tmdb, views

# movies/ => enculde
urlpatterns = [
    # API 데이터 DB 저장
    path('tmdb/', views_tmdb.tmdb_data),
    # 전체 영화 조회(GET)
    path('', views.movie_list),
    # movie_Detail 조회(GET)
    path('<int:movie_pk>/', views.movie_detail),
    # 장르로 영화 목록 조회
    path('genre/', views.movie_list_by_genre),
    # 현재 상영중인 영화 조회(GET)
    path('now/', views.now_movie_list),
]
