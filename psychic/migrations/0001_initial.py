# Generated by Django 3.2 on 2022-01-06 09:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Psychic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('credibility', models.IntegerField(default=0)),
                ('attempt', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='UserNumber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number_user', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PsychicNumber',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number_psychic', models.IntegerField()),
                ('psychic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='psychic.psychic')),
                ('user_number', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='psychic.usernumber')),
            ],
        ),
    ]
