# Generated by Django 4.2.3 on 2023-07-16 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('time', models.IntegerField()),
                ('date', models.CharField(max_length=20)),
                ('message', models.CharField(blank=True, default='.ללא הודעה', max_length=200, null=True)),
            ],
        ),
    ]
