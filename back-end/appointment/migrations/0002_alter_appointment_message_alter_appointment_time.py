# Generated by Django 4.2.3 on 2023-07-16 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='message',
            field=models.CharField(blank=True, default='.ללא הודעה', max_length=350, null=True),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='time',
            field=models.CharField(max_length=20),
        ),
    ]
