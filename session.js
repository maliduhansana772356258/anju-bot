//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1kZXJzTy9Ob2E1dm1OL094ODd1MExtOTFUOHh1QXd0alZNUjhnODZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDVpeCthVFR5Y3NUNlMzRnBxNHZpZDF5SURBSWFPdDQyZEtLaHJnSjkzQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlS3NkeWw2bWVoWExPcUpjQ3ZTVHJlV29aNGFjSWxwWmRLQjcweE9rTTJvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXMFBHeDgwaXhiVFdZL1AzZU5LRmN4ZU4zbkV4S0dzVzllclBNQzBzamlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktKZ0h2Y3R0ZStsdUVkeUkxdyt4ZlVCK0g3MzRRRm1pK3UvSG1vTTR2bEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4vTTN5dDRselpBOGJFZ1VTVW54VUlHZjExb0xqeWNTYkFqdExLS0IxUUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVtK2JDeXRtNnpxZzl0VHhGQUFQRFhXMWlLMCs1a2JMNUJGWCtReG5YND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic2pyZUU3dExGWVVXT1JYcUdNcytBT2NQTTF4UmZoWDJVZUZ1R1dGMXBGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRoR2NaUHB4Nmg3UTdSMHhkL2dOR0xoRjkxQWo1QmhKM2dkd254dzRvcTkrcXFVYktXKzBhdi9QaUhJMDNyS0kvNU1oMGZ1SWQvRGE4b2lYRzI3cUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiIrY05KRzhnNTRKWm0xTTY3aTFIVHVRWnlzdkY4ckhnMXl2NFc4SkdjaTJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE5Nzc0MDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZGQjQ3QTkyMDEwQkFDNzQ2QTAxREUyMThERDMyM0M5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1MjAyMDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE5Nzc0MDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdDN0EzNjE2RTBEMzNEODgzMTJBREQyN0E2NjM2RDZEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1MjAyMDl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE5Nzc0MDc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMyNTM3RTA4QjcwQzMyQkU4QzVGN0RENDM3MTBGMEFFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU1MjAyMTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJlRmJqRjZVU21XSXZQVmtIRFRaVmciLCJwaG9uZUlkIjoiYjViM2JiMjUtMjEwMS00OWI5LTkwMjktZjUxNDU1OWExYmUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNid3ZZaFJ5SUd0VTNNcXJXTTBlN3U3N0xzaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6RHg3S1QrK09odFovd2RONlU5UTR5amliclk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOEM4Qjc3RVciLCJtZSI6eyJpZCI6Ijk0NzE5Nzc0MDc4OjZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyNDQyMTc3MTMwMDg2OTo2QGxpZCIsIm5hbWUiOiLwn5KQIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPT2NsNjBCRU1LNWpNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrMWRJMTRMMExXaGxJSm13NHRheFJOa1RSY2piM2Z1SnFRVVdqTXB2bnhnPSIsImFjY291bnRTaWduYXR1cmUiOiJrc3I2SDFBcUt0N2g4akpVcUorZkVuUDY1aVd1UXpSZnlwOG1mSWdiNytkVFNlazJMUkQ2WUttSjYxQlJZaWhLb0VqSTBzMGFkeTN0dmQra0plRlVDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMUVXdHJVUk5hR1MrMms3ZWtYYW1VaVVXZWt6Slh5MjRGYUlESjVqK292bXBoUDB4KzdocVo1dHRBcE1mVVVqaGdZQVMrajJ0U3FneEh3Y0VtREZNQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxOTc3NDA3ODo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpOWFNOZUM5QzFvWlNDWnNPTFdzVVRaRTBYSTI5MzdpYWtGRm96S2I1OFkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTUyMDIwNywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQVzEifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "719774078",
  PASSWORD: 
    process.env.PASSWORD || "Malidu1234",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94772356258", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
