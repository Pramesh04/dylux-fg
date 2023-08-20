import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, text, command }) => {
const res = await fetch(`https://darkapi--technicalhacke4.repl.co/hirunews`);
let tech = await res.json()

let tt = "${tech.result.image}"

let aliveMessage = {
                image: {
                    url: tt,
                },
                caption: `*◈━━━━━━━━━━━━━◈*   *𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*\n*◈━━━━━━━━━━━━━◈*\n\n☀𝙏𝙄𝙏𝙇𝙀☀_ \n*${tech.result.title}*\n\n☀𝙉𝙀𝙒𝙎☀_ \n${tech.result.decs}\n\n\n_${tech.result.time}_`,
                footer: `*𝗞𝙸𝙽𝙶 𝗥𝙰𝚅𝙰𝙽𝙰 𝗠𝗗*`,
                headerType: 4,
            };
await conn.sendMessage(m.chat, aliveMessage ,m)
}


handler.help = ['hirunews','news']
handler.tags = ['main']
handler.command = /^(hirunews|news)$/i
handler.premium = true

export default handler
