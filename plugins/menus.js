let handler = async (m, { usedPrefix, command, msgsz    }) => {
 try {    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)
    let fetch = require('node-fetch')


//let res = await fetch('https://api-toxic-devil-production.up.railway.app/api/random/quote')
//let json = await res.json()




    msgsz.sendTB(m.chat, `Alien Alfa BETA2 testbot\n\n๐ป I am Alive \n` + `${uptimex}`, wm, linkbuttid1, butturl1, '๊ฑแดแดสแดแด', 'https://github.com/Alien-alfa/WhatsAppBot-MD', 'สษช๊ฑแด แดแดษดแด', `.melp`, 'แดสส แดแดษดแด', '.] bonk', null, null, m) 
  }
     

    catch(e){
  msgsz.reply(m.chat, `${e}`) 
msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
'```COMMAND   :'+`${command}`+'```\n\n'+
'```PREFIX    :'+`${usedPrefix}`+'```\n\n'+
'```VERSION   :'+`${version}`+'```\n\n'+
'```ERROR     :'+`${e}`+'```\n\n'+
'```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
  msgsz.reply('120363041922413381@g.us', `๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}\n\n
  ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['Menu']
  handler.help = ['๐ผ๐ด๐ฝ๐']
  
  handler.tags = ['main']
  handler.command = /^(menu|help|list)$/i
  
  module.exports = handler



  function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return ['*'+h+' Hour* ', '*'+m+' Minute* ', '*'+s+' Second*'].map(v => v.toString().padStart(2, 0)).join(' ')
}