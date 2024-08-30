const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026742398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_20_31_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODcsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5LFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDczLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDg0LFxuICAgICAgICAxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkhxVm1MRkl3WExCUEJkamVOZGxQSysyczhFMDcvcUcrTHI2NkR4SFJ5OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidUp1VE9TbXBRS3lwVnZVNWI4OWZod1wiLFxuICBcInBob25lSWRcIjogXCI5ODdhNmM4Zi0wNjM1LTQ5YWItYTNjMi01MjQ0NzNiNDIxYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcyLFxuICAgICAgMTc0LFxuICAgICAgNzAsXG4gICAgICA3MSxcbiAgICAgIDI0MCxcbiAgICAgIDE5MixcbiAgICAgIDg0LFxuICAgICAgMTI1LFxuICAgICAgNjIsXG4gICAgICAxNjksXG4gICAgICAxMDYsXG4gICAgICA3MCxcbiAgICAgIDczLFxuICAgICAgNzcsXG4gICAgICAxMzIsXG4gICAgICAxNTksXG4gICAgICAyMjMsXG4gICAgICAxODYsXG4gICAgICA5NyxcbiAgICAgIDg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMjQ2LFxuICAgICAgMTg0LFxuICAgICAgMTA2LFxuICAgICAgMjM2LFxuICAgICAgNTEsXG4gICAgICAyOCxcbiAgICAgIDkwLFxuICAgICAgMzcsXG4gICAgICAxNTIsXG4gICAgICAxMCxcbiAgICAgIDUxLFxuICAgICAgMjM2LFxuICAgICAgMTc4LFxuICAgICAgMTA4LFxuICAgICAgMTE4LFxuICAgICAgNjcsXG4gICAgICAyMTksXG4gICAgICAxMDQsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJURlI1S1k1N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNjc0MjM5ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE3ODM2ODQwMjM1MjE5OjE2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lMbGhlRUdFTExZeUxZR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVBEZGczR1lpS0V0VzVWUWtDWi9pdWJHdlAvYU1xVlJMaHpNQkxqeDczdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSLzJ0TlA5RDJyd0hFTEVnK29FSmtpUEVCYWlnWXgxOFJFSjNsTzhoOFlJeVFXbzRod1FtVk0yUHpFQzRlWFRmME0wck1GWWNpa3dYRFRaM1ZBei9EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIybVkxL1RGbWNKTjJCY3hvU09wbUYvTGtRalpUMnNlRDdyUEpObnNERXVOVEU3YlNPMCtRdC90Z0FJMnZ1NDRxUmlPcGcyNUxjRHV6QjYveFpKRUFDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NzQyMzk4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjUwNDk5MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGNXNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUY1cy5qc29uIjogIntcImtleURhdGFcIjpcInV3VDIwazh1RDJPM2RoU1BMZ2Jod3AyWHBMaWRiZkF2b25raEtuaWxqMlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxNDEzMTMzMCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
