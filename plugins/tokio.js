let handler = async m => m.reply(`
🍓 Drips :* a whatsapp bot\n\n🔗 🍓URL :🍓https://github.com/zim-bot/king-bot
`.trim()) // repository
handler.help = ['drips']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
