/*
created by Hassan_Rajpoot
contact me 923286813475
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs ʜᴀssᴀɴ-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ ʜᴀssᴀɴ-ʀᴀᴊᴘᴏᴏᴛ...²¹⁴*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ʜᴀssᴀɴ ʀᴀᴊᴘᴏᴏᴛ*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ ʜᴀssᴀɴ*
*│  ◦* *ᴀɢᴇ➠ sᴇᴠᴇɴᴛᴇᴇɴ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • HASSAN -MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠ʜᴀssᴀɴ ʀᴀᴊᴘᴏᴏᴛ²¹⁴*
*│  ◦* *▢➠ᴍʏ ǫᴜᴇᴇɴ²¹⁴😈🅼*
*│  ◦* *▢➠sʜᴇɪᴋʜ ᴀʟɪ's ǫᴜᴇᴇɴ³²¹👿*
*│  ◦* *▢➠sʜᴇɪᴋʜ ᴀʟɪ ᴋɪɴɢ³²¹*
*│  ◦* *▢➠ғᴀɪᴢᴀɴ ᴋɪɴɢ²¹³*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʜᴀssᴀɴ ʀᴀᴊᴘᴏᴏᴛ²¹⁴
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
