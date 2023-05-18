from rest_framework import serializers
from movies.models import Movie, Nowplaying, Review

class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ('__all__')
        # exceptions = ('actors, like_users, genres')


# 상세 영화 전체 리뷰 조회(GET)
class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ('__all__')
        read_only_fields = ('user', 'movie',)
        # 작성 불요 (read_only_fields)


class MovieSerializer(serializers.ModelSerializer):
    
    review_set = ReviewListSerializer(many=True, read_only=True)
    class Meta:
        model = Movie
        fields = '__all__'
        # read_only_fields = ('FK',)




