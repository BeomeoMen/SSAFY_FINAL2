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
]
