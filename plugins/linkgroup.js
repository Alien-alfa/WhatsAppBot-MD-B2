let handler = async (m, { msgsz    }) => {
 try {     try {
    msgsz.reply(m.chat, `*Group Link :* ${await msgsz.getName(m.chat)}\n\nhttps://chat.whatsapp.com/` + await msgsz.groupInviteCode(m.chat) + `\n\n${msgsz.user.name}`, m)
  } catch {
      msgsz.reply(m.chat, `Make @${msgsz.user.jid.split('@')[0]} an admin to use this command!`, m, {mentions: [msgsz.user.jid]})
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

    handler.help1 = ['ษชษดแด ษชแดแด']
handler.help = ['๐ธ๐ฝ๐๐ธ๐๐ด']
handler.tags = ['group']
handler.command = /^invite$/i
  
handler.group = true
//handler.botAdmin = true
  
module.exports = handler
