
/* Copyright (C) 2022 Neeraj Krishna.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/




let handler = async(m, { usedPrefix,command,msgsz, text    }) => {
 try { 
    msgsz.sendMessage(m.chat, {
            react: {
            text: `${pickRandom(['๐', '๐ฅต', '๐ฑ', '๐ฆ', '๐','๐','๐','๐คฃ','๐','๐','๐','๐ฏ','๐','๐ง','๐ฒ','๐ค','๐','๐บ','๐ค','๐ฟ','๐คจ','๐ฅด','๐','๐', '๐ถโโ','๐'])}`,
            key: m.key,
            }})
   
   }catch(e){
    msgsz.reply(m.chat, `${e}`) 
  msgsz.reply(`${global.owner[0]}`+'@s.whatsapp.net','```ERROR REPORT```\n\n'+
  '```COMMAND   :```'+`\`\`\` ${command}\`\`\`\n`+
  '```PREFIX    :```'+`\`\`\` ${usedPrefix}\`\`\`\n`+
  '```VERSION   :```'+`\`\`\` ${version}\`\`\`\n`+
  '```ERROR     :```'+`\`\`\` ${e}\`\`\`\n\n`+
  '```DETIELD ERROR LOG IN CRASH REPORT GROUP```') 
    msgsz.reply('120363041922413381@g.us', `๐๐ฟ๐ฟ๐ผ๐ฟ : ${util.format(e)}\n\n
    ๐๐ผ๐บ๐บ๐ฎ๐ป๐ฑ : ${usedPrefix+command}`, null, {})
  }}
      handler.customPrefix = /(sad|oh|idk|poda|eda|ni|njn|go|kundan|myr|shit|ehh|hmm|aah|ok|nop|no|way)$/i
      handler.command = new RegExp
   
      module.exports = handler
   
      function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
      } 