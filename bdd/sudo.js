
const _0x2bae69=_0x2609;(function(_0x2ff54e,_0x4604d8){const _0x4e3bb3=_0x2609,_0x3c60c2=_0x2ff54e();while(!![]){try{const _0x4d3082=-parseInt(_0x4e3bb3(0x19e))/0x1*(-parseInt(_0x4e3bb3(0x19f))/0x2)+parseInt(_0x4e3bb3(0x191))/0x3+parseInt(_0x4e3bb3(0x181))/0x4+parseInt(_0x4e3bb3(0x1a4))/0x5+-parseInt(_0x4e3bb3(0x190))/0x6*(-parseInt(_0x4e3bb3(0x189))/0x7)+parseInt(_0x4e3bb3(0x199))/0x8*(parseInt(_0x4e3bb3(0x17f))/0x9)+-parseInt(_0x4e3bb3(0x1a2))/0xa;if(_0x4d3082===_0x4604d8)break;else _0x3c60c2['push'](_0x3c60c2['shift']());}catch(_0x2a6774){_0x3c60c2['push'](_0x3c60c2['shift']());}}}(_0x2189,0xcf28d),require(_0x2bae69(0x196))[_0x2bae69(0x1a0)]());const {Pool}=require('pg'),s=require(_0x2bae69(0x198));function _0x2189(){const _0x2533ee=['DELETE\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1','postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9','DATABASE_URL','21jzuqyf','exports','connect','Numéro\x20de\x20téléphone\x20','SELECT\x20COUNT(*)\x20FROM\x20sudo','log','Une\x20erreur\x20est\x20survenue\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20\x27sudo\x27:','759216UlCguf','2846955zTsIiI','Erreur\x20lors\x20de\x20la\x20suppression\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:','Erreur\x20lors\x20de\x20la\x20vérification\x20de\x20la\x20table\x20\x22sudo\x22\x20:','error','rows','dotenv','\x20supprimé\x20de\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.','../set','16GgnNEV','INSERT\x20INTO\x20sudo\x20(jid)\x20VALUES\x20($1)','Erreur\x20lors\x20de\x20l\x27ajout\x20du\x20numéro\x20de\x20téléphone\x20autorisé\x20:','SELECT\x20EXISTS\x20(SELECT\x201\x20FROM\x20sudo\x20WHERE\x20jid\x20=\x20$1)','release','19PbemsP','118726MAPAwr','config','jid','45855300Pokylx','exists','4109850nLdnZA','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20numéros\x20de\x20téléphone\x20autorisés\x20:','3623364FzgerF','La\x20table\x20\x27sudo\x27\x20a\x20été\x20créée\x20avec\x20succès.','5401612OZCfdY','count','query','\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20sudo\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20serial\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20text\x20NOT\x20NULL\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20','\x20ajouté\x20à\x20la\x20liste\x20des\x20numéros\x20de\x20téléphone\x20autorisés.'];_0x2189=function(){return _0x2533ee;};return _0x2189();}var dbUrl=s[_0x2bae69(0x188)]?s[_0x2bae69(0x188)]:_0x2bae69(0x187);const proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);function _0x2609(_0x46237f,_0x5123d8){const _0x21899c=_0x2189();return _0x2609=function(_0x260984,_0x26665c){_0x260984=_0x260984-0x17e;let _0x391a95=_0x21899c[_0x260984];return _0x391a95;},_0x2609(_0x46237f,_0x5123d8);}async function createSudoTable(){const _0x3906af=_0x2bae69,_0x26b3f9=await pool[_0x3906af(0x18b)]();try{await _0x26b3f9[_0x3906af(0x183)](_0x3906af(0x184)),console['log'](_0x3906af(0x180));}catch(_0xdf58ca){console[_0x3906af(0x194)](_0x3906af(0x18f),_0xdf58ca);}finally{_0x26b3f9[_0x3906af(0x19d)]();}}createSudoTable();async function issudo(_0x47dc26){const _0x4f5778=_0x2bae69,_0x188036=await pool[_0x4f5778(0x18b)]();try{const _0x293e2e=_0x4f5778(0x19c),_0x418680=[_0x47dc26],_0x366877=await _0x188036[_0x4f5778(0x183)](_0x293e2e,_0x418680);return _0x366877[_0x4f5778(0x195)][0x0][_0x4f5778(0x1a3)];}catch(_0x4934c1){return console[_0x4f5778(0x194)]('Erreur\x20lors\x20de\x20la\x20vérification\x20du\x20groupe\x20banni\x20:',_0x4934c1),![];}finally{_0x188036[_0x4f5778(0x19d)]();}}async function removeSudoNumber(_0x2210e3){const _0x5b4f20=_0x2bae69,_0x5f4a11=await pool[_0x5b4f20(0x18b)]();try{const _0x34451a=_0x5b4f20(0x186),_0x3783da=[_0x2210e3];await _0x5f4a11[_0x5b4f20(0x183)](_0x34451a,_0x3783da),console['log']('Numéro\x20de\x20téléphone\x20'+_0x2210e3+_0x5b4f20(0x197));}catch(_0x15e036){console[_0x5b4f20(0x194)](_0x5b4f20(0x192),_0x15e036);}finally{_0x5f4a11['release']();}}async function addSudoNumber(_0x24b3e7){const _0x19e2d8=_0x2bae69,_0x12c03e=await pool[_0x19e2d8(0x18b)]();try{const _0x55de27=_0x19e2d8(0x19a),_0x35f71f=[_0x24b3e7];await _0x12c03e['query'](_0x55de27,_0x35f71f),console[_0x19e2d8(0x18e)](_0x19e2d8(0x18c)+_0x24b3e7+_0x19e2d8(0x185));}catch(_0x47024b){console[_0x19e2d8(0x194)](_0x19e2d8(0x19b),_0x47024b);}finally{_0x12c03e[_0x19e2d8(0x19d)]();}}async function getAllSudoNumbers(){const _0x276c9a=_0x2bae69,_0x4bd27b=await pool[_0x276c9a(0x18b)]();try{const _0x568040='SELECT\x20jid\x20FROM\x20sudo',_0x577848=await _0x4bd27b[_0x276c9a(0x183)](_0x568040),_0x127ad9=_0x577848[_0x276c9a(0x195)]['map'](_0x4e870d=>_0x4e870d[_0x276c9a(0x1a1)]);return _0x127ad9;}catch(_0x4fb070){return console[_0x276c9a(0x194)](_0x276c9a(0x17e),_0x4fb070),[];}finally{_0x4bd27b[_0x276c9a(0x19d)]();}}async function isSudoTableNotEmpty(){const _0x4daa30=_0x2bae69,_0xdf1c51=await pool[_0x4daa30(0x18b)]();try{const _0x18fa68=await _0xdf1c51[_0x4daa30(0x183)](_0x4daa30(0x18d)),_0x242dd7=parseInt(_0x18fa68[_0x4daa30(0x195)][0x0][_0x4daa30(0x182)]);return _0x242dd7>0x0;}catch(_0xdb870e){return console[_0x4daa30(0x194)](_0x4daa30(0x193),_0xdb870e),![];}finally{_0xdf1c51[_0x4daa30(0x19d)]();}};module[_0x2bae69(0x18a)]={'issudo':issudo,'addSudoNumber':addSudoNumber,'removeSudoNumber':removeSudoNumber,'getAllSudoNumbers':getAllSudoNumbers,'isSudoTableNotEmpty':isSudoTableNotEmpty};
