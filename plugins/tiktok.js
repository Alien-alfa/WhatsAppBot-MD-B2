const { Tiktok } = require('xfarr-api')
const { tiktok } = require('../lib/scrape')
let handler = async (m, { msgsz, args, usedPrefix, command    }) => {
 try { if (!args[0]) throw `${nolink}\n\nExample:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `URL Invalid`
  await msgsz.reply(m.chat, `Downloading media from Tiktok`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: insta,
    mediaType: 2,
    description: deslink, 
    title: linkname,
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: linkgc
     }}
  })
  try {
  var anu = await Tiktok(args[0])
  var { url, medias } = anu
  //await msgsz.sendBI(m.chat, sel, wm, tt, 
  //[[`No WM`, `.tiktoknowm ${args[0]}`], [`Audio`, `.tiktokaudio ${args[0]}`]], 
  //sentMsg, {mentions: [m.sender], jpegThumbnail: await(await fetch(tt)).buffer()})
  let cap = ` *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`
  msgsz.sendBV(m.chat, cap, global.wm, medias[0].url, [[`No WM`, `.tiktoknowm ${args[0]}`], [`Audio`, `.tiktokaudio ${args[0]}`]], null, {mentions: [m.sender]})
  } catch {
    try {
    var anuu = await tiktok(args[0])
    var { wm } = anuu
    msgsz.sendBV(m.chat, cap, global.wm, wm, [[`No WM`, `.tiktoknowm ${args[0]}`], [`Audio`, `.tiktokaudio ${args[0]}`]], 0, {mentions: [m.sender]})
  } catch {
    throw msgsz.reply(m.chat, eror, m ) 
   }
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
  msgsz.reply('120363041922413381@g.us', `𝗘𝗿𝗿𝗼𝗿 : ${util.format(e)}\n\n
  𝗖𝗼𝗺𝗺𝗮𝗻𝗱 : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['ᴛɪᴋᴛᴏᴋ'].map(v => v + ' <ᴜʀʟ>')
handler.help = ['𝚃𝙸𝙺𝚃𝙾𝙺'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(wm)?(dl)?(down(load)?(er)?)?$/i



module.exports = handler
