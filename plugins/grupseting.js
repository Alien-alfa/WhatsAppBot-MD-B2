let handler = async (m, { msgsz, isAdmin, isOwner, args, usedPrefix, command    }) => {
 try { 	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, msgsz)
                throw false
                }
     
	let isClose = {
		'open': 'not_announcement',
		'unmute': 'not_announcement',
		'on': 'not_announcement',
		'1': 'not_announcement',
		'close': 'announcement',
		'mute': 'announcement',
		'off': 'announcement',
		'0': 'announcement',
	}[(args[0] || '')]
	if (isClose === undefined) {
		await msgsz.sendB(m.chat, `
Example:
${usedPrefix + command} close
${usedPrefix + command} open
	`.trim(), wm, null, [['Open', '#gc 1'], ['Close', '#gc 0']])
		throw false
	}
        try {
	await msgsz.groupSettingUpdate(m.chat, isClose)
        } catch {
         throw `Make bot as admin to use this command!`
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
  msgsz.reply('120363041922413381@g.us', `ðð¿ð¿ð¼ð¿ : ${util.format(e)}\n\n
  ðð¼ðºðºð®ð»ð± : ${usedPrefix+command}`, null, {})
} } 

    handler.help1 = ['É¢Êá´á´á´ <á´á´á´É´/á´Êá´sá´>']
handler.help = ['ð¶ðð¾ðð¿ ð¾ð¿ð´ð½']
handler.help = ['ð¶ðð¾ðð¿ ð²ð»ð¾ðð´']
handler.tags = ['group']
handler.command = /^(gro?up|gc)$/i

//handler.botAdmin = true
handler.group = true 

module.exports = handler
