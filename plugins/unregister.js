const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  try { 
   if (!args[0]) throw 'Serial Number is empty <3'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '_Serial Number Invalid_'
  user.registered = false
  await msgsz.reply(m.chat, `_Succesfully Unregistered_`) 
  
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

    handler.help1 = ['แดษดสแดษขษชsแดแดส <sษด>']
handler.help = ['๐๐ฝ๐๐ด๐ถ๐ธ๐๐๐ด๐']
handler.tags = ['xp']
handler.command = /^unreg(is(ter)?)?$/i

handler.register = true

module.exports = handler

