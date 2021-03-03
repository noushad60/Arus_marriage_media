from django.contrib import admin
from .models import user
from .models import registration
# Register your models here.
class usermodeladmin(admin.ModelAdmin):
    list_display = ["username"]


    # class Meta:
    #     model = user



admin.site.register(user,usermodeladmin)


class registermodeladmin(admin.ModelAdmin):
    list_display = ['full_name','profession','status']
    list_editable = ['status']


admin.site.register(registration, registermodeladmin)