let handler  = async (m, { msgsz, text    }) => {
 try { msgsz.reply(m.chat, 'Wait a moment, processing database.json', m)
msgsz.sendMedia(m.chat, 'database.json', m, {fileName: 'database.json'})
}
   

    catch(e){
  msgsz.reply(m.chat, `${e}`) 
msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
'```COMMAND   :'+`${command}`+'```\n\n'+
'```PREFIX    :'+`${usedPrefix}`+'```\n\n'+
'```VERSION   :'+`${version}`+'```\n\n'+
'```ERROR     :'+`${e}`+'```\n\n'+
'```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
  msgsz.reply('120363041922413381@g.us', `ðð¿ð¿ð¼ð¿ : ${util.format(e)}\n\n
  ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['É¢á´á´á´á´á´á´Êá´sá´']

handler.help = ['ð¶ð´ðð³ð°ðð°ð±ð°ðð´']
handler.tags = ['host']
handler.command = /^(g(et)?d(ata)?b(ase)?)$/i

handler.rowner = true

module.exports = handler
