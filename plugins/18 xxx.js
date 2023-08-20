import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const res = await fetch("https://api-fgmods.ddns.net/api/downloader/xvideosdl?url=${text}&apikey=oJUeCkMM");
let tech = await res.json()

 let meka = `'*title🔞*' + ${tech.result.title}
              '*👁️‍🗨️keyword_*' + ${tech.result.keyword}
              '*🧐viwes_*' + ${tech.result.views}
              '*🪙vote_*' + ${tech.result.vote}
              '*like👍_*' + ${tech.result.likes}
              '*deslike👎_*' + ${tech.result.deslikes}
              '*Image🏖️_*' + ${tech.result.thumb}`,

conn.sendMessage(m.chat, { react: { text: `🔞`, key: m.key }})

await conn.sendMessage(m.chat, { text: `*⏳𝙋𝙇𝘼𝙎𝙀 𝙒𝘼𝙄𝙏⏳*` } ,m)

await conn.sendMessage(m.chat, {
 document: {
             url: `${tech.result.url}`,
             }, 
             caption: ${meka} 
 } ,m)
}


handler.help = ['sex','xv']
handler.tags = ['main']
handler.command = /^(sex|xv)$/i
handler.premium = true

export default handler

