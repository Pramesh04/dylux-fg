import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const res = await fetch("https://api-fgmods.ddns.net/api/downloader/xvideosdl?url=${text}&apikey=oJUeCkMM");
let tech = await res.json()

let meka = `
 ◈━━━━━━━━━━━━━◈
     *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*               
◈━━━━━━━━━━━━━◈
'*title🔞*' + ${tech.result.title}
'*👁️‍🗨️keyword_*' + ${tech.result.keyword}
'*🧐viwes_*' + ${tech.result.views}
'*🪙vote_*' + ${tech.result.vote}
'*like👍_*' + ${tech.result.likes}
'*deslike👎_*' + ${tech.result.deslikes}
'*Image🏖️_*' + ${tech.result.thumb}`

let title = ${tech.result.title}
let url = ${tech.result.url}

conn.sendMessage(m.chat, { react: { text: `🔞`, key: m.key }})

await conn.sendMessage(m.chat, { text: `*⏳𝙋𝙇𝘼𝙎𝙀 𝙒𝘼𝙄𝙏⏳*` } ,m)

conn.sendFile(m.chat, url, title + '.mp4', meka.trim(), m, false, { asDocument: chat.useDocument })
}


handler.help = ['sex','xv']
handler.tags = ['main']
handler.command = /^(sex|xv)$/i
handler.premium = true

export default handler

