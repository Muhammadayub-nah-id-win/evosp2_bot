import os

from aiogram import Router, F
from aiogram.types import Message, CallbackQuery, LabeledPrice, FSInputFile
from database import database
from keyboards import select_language, start_buttons, get_branches
from messages import messages, job_info, info_company, info_branches, info_news, info_contacts, info_tashkent, \
    info_office

router = Router()


@router.message(F.text.in_(["🇺🇿/🇷🇺 Til", "🇺🇿/🇷🇺 Язык"]))
async def get_language(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    await message.answer(messages[lang]['select_lang'], reply_markup=select_language())

@router.callback_query(F.data.in_(["uz", "ru"]))
async def set_language(callback_query: CallbackQuery):
    lang = callback_query.data
    database.set_user_lang(telegram_id=callback_query.from_user.id, lang=lang)
    await callback_query.message.answer(text='Hello', reply_markup=start_buttons(lang))



@router.message(F.text.in_(["🏢 О кампании", "🏢 Kampaniya haqida"]))
async def about_company(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "evos.png"))
    await message.answer_photo(photo=img, caption=info_company[lang]["about_company"])



@router.message(F.text.in_(["Филиалы", "Filialari"]))
async def branches(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_15.png"))
    await message.answer_photo(photo=img, caption=info_branches[lang]["branches"], reply_markup=get_branches(lang))


@router.message(F.text.in_(["Bo'sh ish o'rinlari", "Вакансии"]))
async def job_positions(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_16.png"))
    await message.answer_photo(photo=img, caption=job_info[lang]["job_position"])


@router.message(F.text.in_(["Yangiliklar", "Новости"]))
async def job_positions(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_17.png"))
    await message.answer_photo(photo=img, caption=info_news[lang]["news"])


@router.message(F.text.in_(["Kantaktlar/Manzil", "Контакты/Адрес"]))
async def contacts(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_18.png"))
    await message.answer_photo(photo=img, caption=info_contacts[lang]["contacts"])


@router.message(F.text.in_(["Ortga", "Назад"]))
async def ortga(message: Message):
    text = "Siz bosh sahifaga qayttingiz!"
    lang = database.get_user_lang(message.from_user.id)
    await message.answer(text=text, reply_markup=start_buttons(lang))


@router.message(F.text.in_(["Toshkent sh", "Ташекент"]))
async def tashkent_sh(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_19.png"))
    await message.answer_photo(photo=img, caption=info_tashkent[lang]["tashkent_sh"])

@router.message(F.text.in_(["Bosh ofis!", "Главный офис!"]))
async def head_office(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_20.png"))
    await message.answer_photo(photo=img, caption=info_office[lang]["head_office"])

@router.message(F.text.in_(["Yaqin filialarni korsatish!", "Отправить локации!"]))
async def send_location(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "img_20.png"))
    await message.answer_photo(photo=img, caption=info_office[lang]["send_location"])