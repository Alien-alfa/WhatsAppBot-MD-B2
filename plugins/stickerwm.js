let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { msgsz, usedPrefix, command, text    }) => {
 try { if(!text) return msgsz.reply(m.chat, `Enter Packname & Stickername \nExample: *${usedPrefix}${command} Alien-Alfa,WhatsApp-Bot-MD*`, m)
    try {
    var [p, a] = text.split `,`
    var q = m.quoted ? m.quoted : m
    var ras = await q.download()
    var sel = await webp2png(ras)
    } finally {
    if(sel) await msgsz.sendStimg(m.chat, sel, m, { packname: p || '', author: a || '' })
    else return msgsz.reply(m.chat, `Reply sticker with caption *${usedPrefix}${command} packname|author* `, m) 
  }
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

    handler.help1 = ['แดกแด'].map(v => v + ' <แดแดแดแดษดแดแดแด|แดแดแดสแดส>')
handler.help = ['๐๐ผ']
handler.tags = ['sticker', 'premium']
handler.command = /^(wm)$/i

handler.premium = true 

module.exports = handler
