let handler = async(m, { msgsz    }) => {
 try {   try {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.quoted.sender ? m.quoted.sender : m.sender
  let name = await msgsz.getName(who)
  msgsz.reply(m.chat, name)
  } catch {
    try {
    let who = m.quoted ? m.quoted.sender : m.sender
    let name = await msgsz.getName(who)
    msgsz.reply(m.chat, name)
  } catch {
    throw `sorry try another one`
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
  msgsz.reply('120363041922413381@g.us', `๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}\n\n
  ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['ษขแดแดษดแดแดแด <@แดแดษข/สแดแดสส>']

handler.help = ['๐ถ๐ด๐๐ฝ๐ฐ๐ผ๐ด']
handler.tags = ['tool']
handler.command = /^(get)?name?a?$/i

module.exports = handler

