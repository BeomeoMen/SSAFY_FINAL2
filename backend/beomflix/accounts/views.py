from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from accounts.serializers import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# 유저 아이디로 접근
# 유저 정보 조회, 수정
@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def profile_user_id(request, user_id):
    user = get_object_or_404(get_user_model(), id=user_id)
    if request.method == 'GET':
        serializer = UserSerializer(user)

        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data)

        
# 유저 이름으로 접근
# 유저 정보 조회, 수정
@api_view(['GET', 'PUT'])
def profile_username(request, username):
    user = get_object_or_404(get_user_model(), username=username)
    if request.method == 'GET':
        serializer = UserSerializer(user)

        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()

            return Response(serializer.data)