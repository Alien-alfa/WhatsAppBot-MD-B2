let handler = async (m, { usedPrefix, command, msgsz, text    }) => {
 try {     let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let kon = `*Current database  ${totalreg} user*\n*Register registered ${rtotalreg} user*`
    await msgsz.sendBI(m.chat, kon, wm, fla + `${command}`, [['Menu', `${usedPrefix}menu`]], m)
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

    handler.help1 = ['á´sá´Ê']

handler.help = ['ððð´ð']
handler.tags = ['info']
handler.command = /^(database|user)$/i

module.exports = handler
