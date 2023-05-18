from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from django.shortcuts import get_list_or_404, get_object_or_404
from movies.serializers import MovieListSerializer, MovieSerializer
from movies.models import Movie


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
