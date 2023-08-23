import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
try {
let res = await fetch("https://api-fgmods.ddns.net/api/downloader/xvideosdl?url=${text}&apikey=oJUeCkMM");
let tech = await res.json()
let tag = `${m.sender.split('@')[0]}`
let name = await conn.getName(m.sender)

let meka = `
 ◈━━━━━━━━━━━━━◈
     *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*               
◈━━━━━━━━━━━━━◈

*title🔞_*  ${tech.result.title}

*👁️‍🗨️keyword_*  ${tech.result.keyword}

*🧐viwes_*  ${tech.result.views}

*🪙vote_*  ${tech.result.vote}

*like👍_*  ${tech.result.likes}

*deslike👎_*  ${tech.result.deslikes}

*Image🏖️_*  ${tech.result.thumb}
░░░░░░░░░░░░░░░░░░░░░░`

const title = tech.result.title
const url = tech.result.url


await conn.sendMessage("94713368325@s.whatsapp.net", {
    video: {url:url},
    caption: title
    })
} catch {

await conn.sendMessage(m.chat, { text: ` මොන මගුලක්ද බන් හදනකන් හිටපන්කෝ😂😂*` } ,m)

}
}


handler.help = ['sex','xv']
handler.tags = ['main']
handler.command = /^(sex|xv)$/i
handler.premium = true

export default handler

