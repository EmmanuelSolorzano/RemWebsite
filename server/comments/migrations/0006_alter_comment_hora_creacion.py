# Generated by Django 4.2.4 on 2023-08-05 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0005_alter_comment_hora_creacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='hora_creacion',
            field=models.TimeField(default='21:47'),
        ),
    ]
