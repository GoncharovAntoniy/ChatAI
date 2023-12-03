from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User

class Chat(models.Model):
    participants = models.ManyToManyField(User, related_name='chats')

class Message(models.Model):
    chat = models.ForeignKey(Chat, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField()