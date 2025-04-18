# Generated by Django 5.2 on 2025-04-16 14:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_job'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='company',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='core.company'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='job',
            name='location',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='job',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]
