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
    # 특정 movie 에 있는 전체 리뷰 조회(GET), 생성(POST)
    path('<int:movie_pk>/review/', views.review_list_create, name='review_list_create'),
    # 특정 movie 에 있는 전체 리뷰 조회(GET), 수정(PUT), 삭제(DELETE)   
    path('review/<int:review_pk>/', views.review_detail, name='review_detail'),
    # 리뷰 좋아요
    path('review/<int:review_pk>/like/', views.like, name='like'),
]
