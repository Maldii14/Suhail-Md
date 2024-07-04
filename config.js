const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254758732775" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254758732775";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_30_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDMxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyLFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgODgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrWlRDa3A1L0VmQTRqNnVsNEwyd3A5RWZJV1VTUHRLR1ZpRjlHc1ZMak80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1ODczMjc3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzkxQjFCNTUxOTk0MEI5RTE3M0NFODczRjNEQ0E3NkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMDk5ODA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU4NzMyNzc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyOTEwQzY3N0I1NDU3QzQ5RUU1QThDRjQ2NUVENzA4NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAwOTk4MTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNHgxU1V1bHJRcXV4d2FUY0tGUmVqd1wiLFxuICBcInBob25lSWRcIjogXCI1MzIxMWIyZS0yZmJmLTRiMmYtODEwMC01NTUzNDY1ZTUwYjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTYxLFxuICAgICAgMTE1LFxuICAgICAgMjI2LFxuICAgICAgMTQ4LFxuICAgICAgNjksXG4gICAgICA1NixcbiAgICAgIDQzLFxuICAgICAgMTA2LFxuICAgICAgMTY3LFxuICAgICAgODAsXG4gICAgICAxNDUsXG4gICAgICAyMjEsXG4gICAgICA2MixcbiAgICAgIDE2LFxuICAgICAgMTk3LFxuICAgICAgMjQ0LFxuICAgICAgMzUsXG4gICAgICA3LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDEzLFxuICAgICAgMjQ1LFxuICAgICAgMjI5LFxuICAgICAgMjksXG4gICAgICAxMzEsXG4gICAgICA4MyxcbiAgICAgIDksXG4gICAgICAxMTEsXG4gICAgICAxODIsXG4gICAgICAyMjgsXG4gICAgICAxNzAsXG4gICAgICAyOSxcbiAgICAgIDY4LFxuICAgICAgMzIsXG4gICAgICAyOSxcbiAgICAgIDEwNSxcbiAgICAgIDE1MyxcbiAgICAgIDM1LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjI0RjZZN1JMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTg3MzI3NzU6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNQUxESVZFUyBNLk1cIixcbiAgICBcImxpZFwiOiBcIjI0NzU4ODE3MTMyMTM3NzozNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZk9ycVFDRU5qSG1yUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkd1RE96RzhPbFh1ZTN2cU83M2dENUwzd0VKNWxMVVpnb2Y1ZmJYSTUzd3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQUs4L2ljaUkwNi9PTGRpQ3FScjN5V3lsZy9nRHBndUhpSzJIWS9aL2psR2dDeXhlaElEVkJVbmsxeTlzeDJsdTNReVRzTGJqOFA1UXp5QzNMM0xaRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ0tKRXppNmozdVBidXQ0YkRXTG45NlJMay9hSnc4eG4wQTI0RW1EdngweU1FQXlCM3F4ZzJidFdiSXdmYUZOUXFxVzNOdFdNSHp3TXpkTDhLb3ZZQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU4NzMyNzc1OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDA5OTgwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm05Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNS9DcE84OUdQeUdFZmMzMzJlQWxSYW1wSGlQc2Nzamxva2xPVTZTcG1ERT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTMxMzIwMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA5OTgwOTMxMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
