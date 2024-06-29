"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "test", reaction: "⏳", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '𝘽𝙊𝙏 𝙄𝙎 𝙊𝙉𝙇𝙄𝙉𝙀 \n\n ' + "║❒ 𝙏𝙔𝙋𝙀 𝙈𝙀𝙉𝙐 𝙏𝙊 𝙎𝙀𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎";
    let d = '                                            ║❒ INSTAGRAM https://instagram.com/denden_kibet9107?igshid=ZHp0eXhsbHU5NHV3';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/557f1309a0005c937db7e.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *DENKING-BOT-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *DENKING-BOT-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/557f1309a0005c937db7e.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
