let handler = async (m, { msgsz, isROwner, text    }) => {
 try {   let { spawn } = require('child_process');
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.msgsz.user.jid == msgsz.user.jid) {
    await msgsz.reply(m.chat, '_Restarting the Bot..._')
    process.send('reset')
  } else throw '_Try again Later_'
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

    handler.help1 = ['Êá´sá´á´Êá´']
handler.help = ['ð³ð´ð±ð¾ðð½ð²ð´']
handler.tags = ['host']
handler.command = /^(debounce?)$/i

handler.rowner = true

module.exports = handler
