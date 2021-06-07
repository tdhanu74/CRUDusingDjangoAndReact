from django.db import models

# Create your models here.

class list1(models.Model):
    auto_increment_id = models.AutoField(primary_key=True)
    timestamp = models.DateField()
    data = models.CharField(max_length=120)

    def _str_(self):
        return self.data