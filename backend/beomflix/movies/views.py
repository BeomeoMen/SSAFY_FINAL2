from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly

import json

from django.shortcuts import get_list_or_404, get_object_or_404
from movies.serializers import MovieListSerializer, MovieSerializer
from movies.models import Movie, Genre


@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_list(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie.objects.order_by())
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)
    
# 영화 디테일 조회(GET)
@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    # 조회(GET)일 경우
    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

@api_view(['GET',])
@permission_classes([IsAuthenticatedOrReadOnly])
def movie_list_by_genre(request):
    # 클라이언트로부터 받은 genre 정보를 파싱합니다.
    genre_info = json.loads(request.body)
    genre_name = genre_info['genre_name']

    # Genre 모델에서 검색할 genre를 가져옵니다.
    genre = Genre.objects.get(name=genre_name)

    # 가져온 genre를 사용하여 해당 genre에 속하는 영화를 검색합니다.
    movies = genre.movie_set.all()

    # 검색된 영화 정보를 JSON 형식으로 반환합니다.
    movie_list = []
    for movie in movies:
        movie_dict = {
            'title': movie.title,
            'release_date': movie.release_date,
            'popularity': movie.popularity,
            'vote_count': movie.vote_count,
            'vote_average': movie.vote_average,
            'overview': movie.overview,
            'poster_path': movie.poster_path,
            'youtube_key': movie.youtube_key,
            'user_click': movie.user_click
        }
        movie_list.append(movie_dict)

    return Response({'movies': movie_list})