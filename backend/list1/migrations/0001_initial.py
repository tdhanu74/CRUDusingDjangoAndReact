# Generated by Django 3.2.4 on 2021-06-06 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='list1',
            fields=[
                ('auto_increment_id', models.AutoField(primary_key=True, serialize=False)),
                ('timestamp', models.DateField()),
                ('data', models.CharField(max_length=120)),
            ],
        ),
    ]