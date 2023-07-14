# Generated by Django 4.2.3 on 2023-07-13 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Callback',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('phone_number', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=40)),
                ('message', models.TextField(default='.ללא הודעה', max_length=350, null=True)),
            ],
        ),
    ]
