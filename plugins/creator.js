/* const { generateThumbnail } = require("@adiwajshing/baileys")
const { ms } = require("translate-google/languages")

let handler = async(m, { msgsz    }) => {
 try { let msg = "๐ษดแด แดแดสสs แดษดสส แดแดssแดษขแด"
  let name= m.sender
  let mail = 'alienalfa.yt@gmail.com'
  let verfication = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '120363040549014341@g.us' } : {}) }, message: { contactMessage: { displayName: `${await msgsz.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
   try {
await msgsz.sendContactArray(m.chat, [
    [`${owner[0]}`, `๐ง๐๐ซ๐๐ ๐๐๐ ๐๐`,๐๐๐๐ ๐ด๐๐๐๐๐๐,msg,mail],
    [`${owner[1]}`, `๐ก๐จ๐จ๐๐๐`,๐๐๐๐ ๐ด๐๐๐๐๐๐,msg,mail],
    [`${owner[2]}`, `๐๐๐๐ ๐ฆ๐จ๐`,๐๐๐๐ ๐ด๐๐๐๐๐๐,msg,mail],
    [`${owner[3]}`, `๐-๐จ-๐ฏ-๐-๐`,๐๐๐๐ ๐ด๐๐๐๐๐๐,msg,mail],

  ],verfication) 
   } catch {
 }
}
handler.help = ['แดแดกษดแดส']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler

*/