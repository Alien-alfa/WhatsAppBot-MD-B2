let handler = async (m, { msgsz, args, participants    }) => {
 try {         let grup = await msgsz.getName(m.key.remoteJid)
        let mimin = m.isGroup ? NgeriAtmin(participants) : ''
        let txt = `List Group Admin  *${grup}*\n*Total:* ${mimin.length}\n\n`
        for (let min of mimin) {
                txt += `â¢ @${min.split('@')[0]}\n`
        }
        msgsz.reply(m.chat, txt, m, { mentions: await msgsz.parseMention(txt) })
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

    handler.help1 = ['ÊÉªsá´á´á´á´ÉªÉ´']
handler.help = ['ð»ð¸ððð°ð³ð¼ð¸ð½']
handler.tags = ['group']
handler.command = /^(adminlist?|list?admin)$/i

handler.group = true

module.exports = handler


const NgeriAtmin = (participants) => {
        atminn = []
	for (let b of participants) {
		b.admin === "admin" ? atminn.push(b.id) : ''
		b.admin === "superadmin" ? atminn.push(b.id) : ''
	}
	return atminn
}
