let handler = async (m, { msgsz, text    }) => {
 try {   let cc = msgsz.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
    let teks = text ? text : cc.text
    msgsz.reply(m.chat, `_Send a broadcast message to ${chats.length} chat_\nEstimation complete ${chats.length * 1.5} second`, m)
    for (let id of chats) {
      await delay(1500)
      await msgsz.copyNForward('447405935355@s.whatsapp.net', msgsz.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '*Broadcast*\n\n' + teks + '\n\nššļ¼”ļ¼¬ļ¼©ļ¼„ļ¼® ļ¼”ļ¼¬ļ¼¦ļ¼”šš' + watermark), true).catch(_ => _)
    }
    msgsz.reply(m.chat, 'šæš¤š£š š½š§š¤šššššØš© š¼š”š” š¾ššš©:)')
  }catch(e){
    msgsz.reply(m.chat, `${e}`) 
  msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
  '```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+
  '```PREFIX    :```'+`\`\`\` ${usedPrefix}\`\`\`\n`+
  '```VERSION   :```'+`\`\`\` ${version}\`\`\`\n`+
  '```ERROR     :```'+`\`\`\` ${e}\`\`\`\n\n`+
  '```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
    msgsz.reply('120363041922413381@g.us', `ššæšæš¼šæ : ${util.format(e)}\n\n
    šš¼šŗšŗš®š»š± : ${usedPrefix+command}`, null, {})
  }}
//  handler.help = ['broadcast', 'bc'].map(v => v + ' <text>')
 // handler.tags = ['owner']
  //handler.command = /^(broadcast|bc)$/i
  handler.owner = true
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  const more = String.fromCharCode(8206)
  const readMore = more.repeat(4001)
  
  const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
  
  const delay = time => new Promise(res => setTimeout(res, time))