from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status

from django.shortcuts import get_list_or_404, get_object_or_404
from comments.serializers import ProfileSerializer, CommentSerializer, ProfileListSerializer
from comments.models import Comment, Profile
from django.contrib.auth import get_user_model


# 회원가입 한 유저id 조회(GET), 생성(POST)
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def profileuser_list(request):
    print(request)
    if request.method == 'GET':
        profiles = get_list_or_404(Profile.objects.order_by('-pk'))
        serializer = ProfileListSerializer(profiles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
@api_view(['POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def comment_create(request, profile_pk):
# 프로필 유저 댓글 생성(POST)
    profile = get_object_or_404(Profile, pk=profile_pk)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user, profile = profile)

        return Response(serializer.data, status=status.HTTP_201_CREATED)