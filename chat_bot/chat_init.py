import telebot
import time
bot = telebot.TeleBot('6232078716:AAG0djn-jXnBYpZpVO0lOPIbGFAoJJ54-M8')

@bot.message_handler(content_types=['text'])
def get_text_messages(message):
    if message.text == "/start":
        text='Добрый день. Вас приветствует чат бот Московского долголетия'
        bot.send_message(message.from_user.id, text)
        bot.send_message(message.from_user.id, 'есть команды \start ,\stop. Можете пистать что угодно')
    elif message.text == "/stop":
        text='До скорых встреч'
        bot.send_message(message.from_user.id, text)
    else:
        text = 'Добрый день. сечас день и время:' + str(time.ctime(time.time()))
        bot.send_message(message.from_user.id, text)

bot.polling(none_stop=True, interval=0)