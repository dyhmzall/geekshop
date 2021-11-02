import datetime
import json

from django.shortcuts import render


def main(request):
    title = "главная"

    #  получить данные из json-файла, пока не знаю, где лучше разместить этот функционал согласно философии django
    with open('storage/products.json', 'r', encoding='utf-8') as f:
        products = json.load(f)

    content = {"title": title, "products": products}
    return render(request, "mainapp/index.html", content)


def products(request):
    title = "продукты"

    #  получить данные из json-файла, пока не знаю, где лучше разместить этот функционал согласно философии django
    with open('storage/links_menu.json', 'r', encoding='utf-8') as f:
        links_menu = json.load(f)

    #  получить данные из json-файла, пока не знаю, где лучше разместить этот функционал согласно философии django
    with open('storage/same_products.json', 'r', encoding='utf-8') as f:
        same_products = json.load(f)

    content = {"title": title, "links_menu": links_menu, "same_products": same_products}
    return render(request, "mainapp/products.html", content)


def contact(request):
    title = "о нас"
    visit_date = datetime.datetime.now()

    #  получить данные из json-файла, пока не знаю, где лучше разместить этот функционал согласно философии django
    with open('storage/location.json', 'r', encoding='utf-8') as f:
        locations = json.load(f)

    content = {"title": title, "visit_date": visit_date, "locations": locations}
    return render(request, "mainapp/contact.html", content)
