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
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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

  sessionName:process.env.SESSION_ID || "SUHAIL_16_55_08_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAzLFxuICAgICAgICAyNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNSxcbiAgICAgICAgNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICA2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAzOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQxLFxuICAgICAgICA1MSxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDJpSXYwWWUwZlJhb2czWTBCZTZDVTkydlpwOEk0OWlHTFpIVDcvS0FyRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2NVRmQzVTNTTXFLQy1nbEpoeGk0d1wiLFxuICBcInBob25lSWRcIjogXCJiZjQwMGU0Mi0zYjI1LTRiOTItYWY0Yi02YTI3ODczNGMyMmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgNzcsXG4gICAgICAxMzUsXG4gICAgICAxMTksXG4gICAgICAxNDksXG4gICAgICAxOTMsXG4gICAgICAxOTksXG4gICAgICAxODgsXG4gICAgICA2OSxcbiAgICAgIDczLFxuICAgICAgMTY3LFxuICAgICAgMTY1LFxuICAgICAgMTg2LFxuICAgICAgMTg0LFxuICAgICAgMTk1LFxuICAgICAgMTYwLFxuICAgICAgMzIsXG4gICAgICA0NixcbiAgICAgIDE5NixcbiAgICAgIDIxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAxOTcsXG4gICAgICAxNjIsXG4gICAgICAxMjEsXG4gICAgICA5OCxcbiAgICAgIDEyMixcbiAgICAgIDE5NSxcbiAgICAgIDEwMixcbiAgICAgIDIyMyxcbiAgICAgIDkxLFxuICAgICAgODgsXG4gICAgICAyMDYsXG4gICAgICAxMzgsXG4gICAgICAyMTAsXG4gICAgICAxNTMsXG4gICAgICAyNDgsXG4gICAgICAyMzUsXG4gICAgICAxOTYsXG4gICAgICAxNzEsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM05KTlZOSDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY3NDIzOTg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNzgzNjg0MDIzNTIxOToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTGxoZUVHRVBQeXg3WUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVQRGRnM0dZaUtFdFc1VlFrQ1ovaXViR3ZQL2FNcVZSTGh6TUJMang3M3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibTFNZUViVURxRzBZMTMxL1NzU3NwbEdNczgydmdOaUkvVXVtUXZOQTdTaWFJTEloS1dkMUt1SnZqbUJTdUxwNE42WHJUTlNWeEsrQW5tcFZHYThnRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSE5BamlYN2dWWkxBd3Z2WTRsOFdrVWxCaTRDY0lKc3FIUHdGL1lLTUVDK1FCMTNUaDAvMlg4bXYvWVorOVprM1plcTVxcHcyVGNkeG1DUllBQmtoZ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNjc0MjM5ODoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MDM2OTE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRjVzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGNXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1d1QyMGs4dUQyTzNkaFNQTGdiaHdwMlhwTGlkYmZBdm9ua2hLbmlsajJRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MTQxMzEzMzAsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9",  // PUT SESSION ID HERE 
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
 
