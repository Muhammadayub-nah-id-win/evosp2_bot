import os

from aiogram import Router, F
from aiogram.types import Message, CallbackQuery, LabeledPrice, FSInputFile
from database import database
from keyboard import select_language, start_buttons
from messages import messages, job_info
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

@router.message(F.text.in_(["Вакансии", "Bo'sh ish o'rinlari"]))
async def get_jobs(message: Message):
    lang = database.get_user_lang(message.from_user.id)
    await message.answer(text=job_info[lang]["job_position"])


@router.message(F.text.in_(["🏢 О кампании", "🏢 Kampaniya haqida"]))
async def about_company_handlears(message: Message):
    img = FSInputFile(os.path.join(os.path.dirname(__file__), "images", "evos.png"))
    text= ("Kompaniyamizning birinchi filiali 2006 yilda ochilgan bo’lib\n"
           "shu kungacha muvaffaqiyatli faoliyat yuritib kelmoqdaligini bilarmidingiz?\n"
           "15 yil davomida kompaniya avtobus bekatidagi kichik ovqatlanish joyidan zamonaviy\n"
           "kengaytirilgan tarmoqqa aylandi, u bugungi kunda O‘zbekiston bo‘ylab 65 dan ortiq restoranlarni\n"
           "o‘zining eng tezkor yetkazib berish xizmatini, zamonaviy IT-infratuzilmasini va 2000 dan ortiq xodimlarni o‘z ichiga oladi.!")
    await message.answer_photo(photo=img, caption=text)

@router.message(F.text == "⬅️Ortga")
async def ortga(message: Message):
    text = "Siz bosh sahifaga qayttingiz!"
    lang = database.get_user_lang(message.from_user.id)
    await message.answer(text=text, reply_markup=start_buttons(lang))