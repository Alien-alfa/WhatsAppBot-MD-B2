const axios = require('axios')
let handler = async (m, { msgsz, args  , usedPrefix, command })=>{
    try { 
if(!args[0]) throw " please provide place or location name"

    try{

        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        const res = await response

        const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + 'ยฐC'
        const Minimum_Temperature= res.data.main.temp_min + 'ยฐC'
        const Maximum_Temperature= res.data.main.temp_max + 'ยฐC'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'


        msgsz.reply(m.chat,`
Place: ${name}
Country: ${Country}
Weather: ${Weather}
Temperature: ${Temperature}
Minimum Temperature: ${Minimum_Temperature}
Maximum Temperature: ${Maximum_Temperature}
Humidity: ${Humidity}
Wind: ${Wind}
        `.trim(),m)
    }catch(e){
throw 'location not found' 

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

    handler.help1 = ['แดกแดแดแดสแดส']
handler.help = ['๐๐ด๐ฐ๐๐ท๐ด๐']
handler.tags = ['internet']
handler.command = /^(weather|wthr)$/i

module.exports = handler
