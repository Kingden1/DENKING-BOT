/*
DENKING-BOT V1.0 
 Coded By Denking

Modified File : anime.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/

const _0x52df60=_0x503d;function _0x503d(_0xccd2bd,_0x2e63a9){const _0x63305b=_0x5708();return _0x503d=function(_0x15c070,_0x4e871e){_0x15c070=_0x15c070-(0x493*-0x3+0x13*-0x49+-0x4*-0x534);let _0x152e94=_0x63305b[_0x15c070];return _0x152e94;},_0x503d(_0xccd2bd,_0x2e63a9);}(function(_0x2f6439,_0x11c4fc){const _0x2b6a08={_0x4169be:0x1b6,_0x2e9573:0x202,_0x22f352:0x216},_0x507fa0=_0x503d,_0xd99b23=_0x2f6439();while(!![]){try{const _0x4758be=-parseInt(_0x507fa0(0x1c3))/(-0x2615+-0x279*0xd+-0x1769*-0x3)*(parseInt(_0x507fa0(_0x2b6a08._0x4169be))/(-0x2429+-0x1ce7+0x1*0x4112))+-parseInt(_0x507fa0(_0x2b6a08._0x2e9573))/(0x1*-0x14ae+-0xfe*0x13+0x278b)+parseInt(_0x507fa0(0x1c9))/(0x220a+0x17d6+-0x39dc)+parseInt(_0x507fa0(_0x2b6a08._0x22f352))/(-0x1d71*-0x1+0x2*-0x6fa+-0xf78)*(-parseInt(_0x507fa0(0x1b3))/(-0xd99+0x17*0xef+-0x7da))+-parseInt(_0x507fa0(0x1d2))/(0x1ce3+0x1228*0x2+-0x412c)+parseInt(_0x507fa0(0x1ed))/(0x4*-0x1a7+0x13*0xd7+-0x951)+-parseInt(_0x507fa0(0x210))/(-0x11d+-0x2c8*-0x7+-0x7*0x29e)*(-parseInt(_0x507fa0(0x1e3))/(0xadb*-0x1+0xbf2+-0x10d));if(_0x4758be===_0x11c4fc)break;else _0xd99b23['push'](_0xd99b23['shift']());}catch(_0x5c2ad4){_0xd99b23['push'](_0xd99b23['shift']());}}}(_0x5708,0x9b7*-0x241+0x800f+0x20d6db));const config=require(_0x52df60(0x209)),{cmd,commands}=require(_0x52df60(0x1bf)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0x52df60(0x1ea)+_0x52df60(0x1f6)),fs=require('\x66\x73');function _0x5708(){const _0x1d8100=['\x64\x71\x45\x6d\x42','\x73\x6f\x75\x72\x63\x65','\x36\x49\x73\x42\x42\x7a\x70','\x61\x45\x53\x72\x79','\x4e\x3a\x2a\x20\x2a','\x34\x54\x61\x52\x58\x6a\x70','\x73\x74\x61\x74\x75\x73','\x6d\x61\x6c\x5f\x69\x64','\u0d91\u0dba\x20\u0dbd\u0db6\u0dcf\x20\u0daf\u0dd3\x20','\x2a\x0a\x2a\x52\x41\x54\x49\x4e\x47\x3a','\x69\x6d\x61\x67\x65\x5f\x75\x72\x6c','\x6e\x65\x73\x65','\x64\x20\x74\x68\x69\x73\x20\x61\x6e\x69','\x72\x65\x61\x63\x74','\x2e\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64','\x2f\x74\x65\x6c\x65\x67\x72\x61\x6d\x2d','\x73\x65\x63\x74\x69\x6f\x6e\x73','\x20\x21\x2a','\x35\x33\x30\x34\x31\x33\x68\x75\x57\x79\x51\x56','\x2a\ud83d\udd22\x20\x52\x65\x70\x6c\x79\x20\x62','\x63\x61\x70\x74\x69\x6f\x6e','\x65\x20\x21\x2a','\x73\x74\x72\x69\x6e\x67','\x71\x75\x6f\x74\x65\x64','\x37\x30\x34\x38\x34\x6f\x56\x79\x44\x4f\x42','\x73\x65\x61\x72\x63\x68','\x70\x61\x74\x74\x65\x72\x6e','\x2e\x61\x6e\x69\x6d\x65\x20\x61\x73\x74','\x20\x61\x6e\x69\x6d\x65\x20\x6e\x61\x6d','\x20\x2a\x41\x4e\x49\x4d\x45\x20\x53\x45','\x2a\x0a\x2a\x41\x44\x41\x50\x54\x45\x52','\x74\x65\x78\x74','\x69\x6d\x61\x67\x65\x2d\x75\x72\x6c','\x38\x39\x37\x33\x33\x30\x78\x4c\x61\x56\x52\x41','\x6c\x69\x73\x74\x4d\x65\x73\x73\x61\x67','\x61\x6e\x69\x6d\x65\x65\x67','\x2a\x0a\x2a\x4a\x41\x50\x41\x4e\x45\x53','\x61\x69\x72\x65\x64','\x69\x73\x68','\x72\x6f\x77\x73','\x2a\x0a\x2a\x54\x59\x50\x45\x20\x41\x4e','\x45\x3a\x2a\x20\x2a','\x44\x52\x49\x53','\x2a\x0a\x2a\x44\x55\x52\x41\x54\x49\x4f','\x6b\x65\x79','\x64\x75\x72\x61\x74\x69\x6f\x6e','\x49\x4d\x45\x3a\x2a\x20\x2a','\x69\x6d\x61\x67\x65','\x2a\x0a\x2a\x54\x4f\x54\x41\x4c\x20\x45','\x61\x6e\x69\x6d\x65','\x35\x33\x36\x33\x39\x30\x30\x50\x71\x4e\x75\x69\x70','\x72\x61\x74\x69\x6e\x67','\x45\x78\x64\x5a\x59','\x63\x61\x74\x65\x67\x6f\x72\x79','\x66\x69\x6c\x65\x6e\x61\x6d\x65','\x65\x20\x6e\x61\x6d\x65\x2e','\x2a\x20\x2a','\x2e\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e','\x74\x69\x74\x6c\x65','\x74\x69\x74\x6c\x65\x5f\x6a\x61\x70\x61','\x31\x30\x32\x32\x34\x35\x39\x32\x53\x68\x75\x6d\x6d\x58','\x65\x6c\x6f\x77\x20\x6e\x75\x6d\x62\x65','\x63\x61\x74\x63\x68','\x65\x2f\x76\x34\x2f\x61\x6e\x69\x6d\x65','\x74\x79\x70\x65','\x66\x46\x4b\x55\x4a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70','\u0dba\u0dd2\x2e','\x75\x72\x6c','\x63\x74\x69\x6f\x6e\x73','\x3f\x71\x3d','\x49\x74\x20\x67\x69\x76\x65\x73\x20\x64','\x40\x62\x6c\x61\x63\x6b\x61\x6d\x64\x61','\x2d\x54\x77\x6f\ud83c\udf6d\x5d\x0a\x0a\x20\x20','\x2a\x47\x69\x76\x65\x20\x6d\x65\x20\x61','\x67\x69\x76\x65\x6e\x20\x61\x6e\x69\x6d','\x2a\x0a\x2a\x53\x54\x55\x44\x49\x4f\x3a','\x64\x6f\x6e\x74\x41\x64\x64\x43\x6f\x6d','\x64\x65\x73\x63','\x46\x4f\x4f\x54\x45\x52','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x33\x37\x38\x34\x38\x31\x32\x79\x4b\x5a\x53\x68\x6e','\x73\x75\x6c\x74\x73\x20\x46\x72\x6f\x6d','\x73\x74\x75\x64\x69\x6f\x73','\x2a\x0a\x2a\x53\x54\x41\x54\x55\x53\x3a','\x65\x70\x69\x73\x6f\x64\x65\x73','\u0db1\u0db8\x20\u0db4\u0dd2\u0dc5\u0dd2\u0db6\u0db3\x20','\u250c\u2500\u2500\u2500\x5b\ud83c\udf6d\x5a\x65\x72\x6f','\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67','\u0d87\u0dad\u0dd2\x20\x61\x6e\x69\x6d\x65\x20','\x66\x6f\x6f\x74\x65\x72','\x72\x61\x6e\x6b','\x69\x6d\x61\x67\x65\x73','\x6d\x65\x2e','\x3a\x2a\x20\x2a','\x34\x35\x51\x6f\x42\x66\x66\x6a','\u0dc0\u0dd2\u0dc3\u0dca\u0dad\u0dbb\x20\u0dc3\u0db4\u0dba','\x41\x52\x43\x48\x2a\x0a\x20\x20\x20\x0a','\x2a\x53\x65\x61\x72\x63\x68\x20\x52\x65','\x61\x6e\x69\x6d\x65\x65\x67\x20','\x4c\x41\x4e\x47','\x33\x38\x38\x35\x34\x33\x30\x52\x41\x46\x4e\x7a\x59','\x61\x6c\x69\x61\x73','\x2a\x0a\x2a\x52\x41\x4e\x4b\x3a\x2a\x20','\x49\x20\x63\x61\x6e\x74\x20\x66\x69\x6e','\x64\x61\x74\x61','\x62\x75\x74\x74\x6f\x6e\x54\x65\x78\x74'];_0x5708=function(){return _0x1d8100;};return _0x5708();}let {img2url}=require(_0x52df60(0x1f9)+_0x52df60(0x1c0)+_0x52df60(0x1d1));var imgmsg='';if(config[_0x52df60(0x215)]==='\x53\x49')imgmsg='\x2a\u0db8\u0da7\x20\x61\x6e\x69\x6d\x65\x20'+'\u0db1\u0db8\u0d9a\u0dca\x20\u0daf\u0dd9\u0db1\u0dca\u0db1'+_0x52df60(0x1c2);else imgmsg=_0x52df60(0x1fb)+_0x52df60(0x1cd)+_0x52df60(0x1c6);var descgs='';if(config['\x4c\x41\x4e\x47']==='\x53\x49')descgs=_0x52df60(0x1b9)+_0x52df60(0x20a)+_0x52df60(0x207)+_0x52df60(0x211)+_0x52df60(0x1f4);else descgs=_0x52df60(0x1f8)+'\x65\x74\x61\x69\x6c\x73\x20\x6f\x66\x20'+_0x52df60(0x1fc)+_0x52df60(0x1e8);var cants='';if(config[_0x52df60(0x215)]==='\x53\x49')cants=_0x52df60(0x1ae)+_0x52df60(0x1bd)+'\x6d\x65\x2e';else cants='\x49\x20\x63\x61\x6e\x74\x20\x66\x69\x6e'+_0x52df60(0x1bd)+_0x52df60(0x20e);const _0x20d514={};_0x20d514[_0x52df60(0x1cb)]=_0x52df60(0x1e2),_0x20d514[_0x52df60(0x1ac)]=['\x61\x6e\x69\x6d\x65\x73\x65\x61\x72\x63'+'\x68','\x73\x61\x6e\x69\x6d\x65'],_0x20d514[_0x52df60(0x1be)]='\u26e9\ufe0f',_0x20d514[_0x52df60(0x1ff)]=descgs,_0x20d514[_0x52df60(0x1e6)]=_0x52df60(0x1ca),_0x20d514['\x75\x73\x65']=_0x52df60(0x1cc)+'\x72\x6f',_0x20d514['\x66\x69\x6c\x65\x6e\x61\x6d\x65']=__filename,cmd(_0x20d514,async(_0x5831db,_0x12cf5c,_0x14bfab,{from:_0x240e5f,l:_0x2420be,prefix:_0x5eaa1a,quoted:_0x3b01d9,body:_0x2ef6c0,isCmd:_0x266a39,command:_0x251bf9,args:_0x5a3754,q:_0x11091a,isGroup:_0x43f244,sender:_0x530ab5,senderNumber:_0x3c906f,botNumber2:_0x496147,botNumber:_0x2086ad,pushname:_0x4236be,isMe:_0x3bdb79,isOwner:_0x31a6e3,groupMetadata:_0x473cb2,groupName:_0x275e22,participants:_0x44bab5,groupAdmins:_0x2ff138,isBotAdmins:_0x27bee8,isAdmins:_0x1dd5fe,reply:_0x39f899})=>{const _0x10fbd3={_0x4e856e:0x1f3,_0x465ee2:0x1d8,_0x4f1fd4:0x1b8,_0x29a64f:0x1fa,_0x3503bb:0x1ce,_0x50603b:0x212,_0xa1276d:0x213,_0x5b2ba4:0x200,_0x24503c:0x1b0,_0x142e27:0x1c1,_0x20f027:0x1d3},_0x13e4b8=_0x52df60,_0x1c8f3e={'\x66\x46\x4b\x55\x4a':function(_0x10f153,_0x5209cb){return _0x10f153(_0x5209cb);},'\x4b\x4c\x64\x78\x6b':function(_0x3ca72f,_0x47cb9b){return _0x3ca72f(_0x47cb9b);},'\x70\x47\x61\x61\x66':_0x13e4b8(0x1c4)+_0x13e4b8(0x1ee)+'\x72\x2a','\x61\x45\x53\x72\x79':function(_0x22fd0d,_0x4edc78){return _0x22fd0d(_0x4edc78);}};try{if(!_0x11091a)return _0x1c8f3e[_0x13e4b8(0x1f2)](_0x39f899,imgmsg);let _0x304275=await _0x1c8f3e['\x4b\x4c\x64\x78\x6b'](fetchJson,_0x13e4b8(_0x10fbd3._0x4e856e)+'\x69\x2e\x6a\x69\x6b\x61\x6e\x2e\x6d\x6f'+_0x13e4b8(0x1f0)+_0x13e4b8(0x1f7)+_0x11091a),_0x311d78=[];for(let _0x342a07 of _0x304275[_0x13e4b8(0x1af)]){const _0x1b846e={};_0x1b846e[_0x13e4b8(0x1eb)]=''+_0x342a07[_0x13e4b8(0x1eb)],_0x1b846e[_0x13e4b8(_0x10fbd3._0x465ee2)]=[{'\x74\x69\x74\x6c\x65':''+_0x342a07[_0x13e4b8(0x1eb)],'\x72\x6f\x77\x49\x64':_0x5eaa1a+_0x13e4b8(0x214)+_0x342a07[_0x13e4b8(_0x10fbd3._0x4f1fd4)]}];const _0x43e490=_0x1b846e;_0x311d78['\x70\x75\x73\x68'](_0x43e490);}const _0x4eaa25={};_0x4eaa25['\x74\x65\x78\x74']=_0x13e4b8(0x208)+_0x13e4b8(_0x10fbd3._0x29a64f)+_0x13e4b8(_0x10fbd3._0x3503bb)+_0x13e4b8(_0x10fbd3._0x50603b)+_0x13e4b8(_0x10fbd3._0xa1276d)+_0x13e4b8(0x203)+'\x2a\x20'+_0x11091a,_0x4eaa25[_0x13e4b8(0x20b)]=config[_0x13e4b8(_0x10fbd3._0x5b2ba4)],_0x4eaa25[_0x13e4b8(0x1eb)]='',_0x4eaa25[_0x13e4b8(_0x10fbd3._0x24503c)]=_0x1c8f3e['\x70\x47\x61\x61\x66'],_0x4eaa25[_0x13e4b8(_0x10fbd3._0x142e27)]=_0x311d78;let _0x21b0e9=_0x4eaa25;await _0x5831db[_0x13e4b8(_0x10fbd3._0x20f027)+'\x65'](_0x240e5f,_0x21b0e9,_0x12cf5c);}catch(_0x22e4a1){_0x1c8f3e[_0x13e4b8(0x1b4)](_0x39f899,cants),_0x2420be(_0x22e4a1);}});const _0x23457f={};_0x23457f[_0x52df60(0x1cb)]=_0x52df60(0x1d4),_0x23457f[_0x52df60(0x1fe)+'\x6d\x61\x6e\x64\x4c\x69\x73\x74']=!![],_0x23457f[_0x52df60(0x1e7)]=__filename,cmd(_0x23457f,async(_0x7914b1,_0x2240b0,_0x552488,{from:_0x36dc52,l:_0x57e33b,quoted:_0x1f6bd1,body:_0x291559,isCmd:_0x3390a7,command:_0x3d756e,args:_0x437f5e,q:_0x325622,isGroup:_0x3090f1,sender:_0x1e83e1,senderNumber:_0x547835,botNumber2:_0x5f2b9e,botNumber:_0x944e5c,pushname:_0x20a819,isMe:_0x5721a9,isOwner:_0x1d9883,groupMetadata:_0x3704b1,groupName:_0x525d40,participants:_0x266d97,groupAdmins:_0x501225,isBotAdmins:_0x4015bf,isAdmins:_0x41c226,reply:_0x51ff5f})=>{const _0x42c8a5={_0x5e9895:0x201,_0x4ce6ba:0x1b1,_0x290598:0x1d7,_0x91f9a4:0x1d5,_0x2be1be:0x1da,_0x28f4a5:0x1af,_0x3d0735:0x1ec,_0x4b2006:0x1d9,_0x266570:0x20f,_0xbb0882:0x1b2,_0x303e4c:0x1e1,_0x55b33e:0x1b7,_0x2d95ab:0x1e5,_0x9de4a:0x1af,_0x11e540:0x1c7,_0x4f467c:0x1b5,_0x4568da:0x1af,_0x51e156:0x1ba,_0x3c2128:0x1ad,_0x34cf9b:0x1af,_0x35455b:0x1e9,_0x5e386c:0x1f5,_0x1a2f01:0x1bb,_0x5b6ccc:0x1e0,_0x366939:0x1c5,_0x3741ae:0x1c8,_0x303b26:0x201,_0x567f30:0x1ef},_0x32ca24=_0x52df60,_0x4b3fba={'\x64\x71\x45\x6d\x42':function(_0x7dd15a,_0x40fd86){return _0x7dd15a(_0x40fd86);},'\x45\x78\x64\x5a\x59':_0x32ca24(0x1db),'\x59\x6b\x6d\x4c\x4d':function(_0x4d87c7,_0x4a4549){return _0x4d87c7(_0x4a4549);}};try{const _0x39f2d0={};_0x39f2d0[_0x32ca24(0x1d0)]='\ud83d\udd03',_0x39f2d0[_0x32ca24(0x1dd)]=_0x2240b0['\x6b\x65\x79'];const _0x1c33b7={};_0x1c33b7['\x72\x65\x61\x63\x74']=_0x39f2d0,await _0x7914b1[_0x32ca24(_0x42c8a5._0x5e9895)+'\x65'](_0x36dc52,_0x1c33b7),res=await _0x4b3fba[_0x32ca24(_0x42c8a5._0x4ce6ba)](fetchJson,_0x32ca24(0x1f3)+'\x69\x2e\x6a\x69\x6b\x61\x6e\x2e\x6d\x6f'+'\x65\x2f\x76\x34\x2f\x61\x6e\x69\x6d\x65'+'\x2f'+_0x325622);let _0x1b4300='\x2a\x54\x49\x54\x4c\x45\x3a\x2a\x20\x2a'+res['\x64\x61\x74\x61'][_0x32ca24(0x1eb)]+('\x2a\x0a\x2a\x45\x4e\x47\x4c\x49\x53\x48'+_0x32ca24(0x20f))+res['\x64\x61\x74\x61']['\x74\x69\x74\x6c\x65\x5f\x65\x6e\x67\x6c'+_0x32ca24(_0x42c8a5._0x290598)]+(_0x32ca24(_0x42c8a5._0x91f9a4)+_0x32ca24(_0x42c8a5._0x2be1be))+res[_0x32ca24(_0x42c8a5._0x28f4a5)][_0x32ca24(_0x42c8a5._0x3d0735)+_0x32ca24(0x1bc)]+(_0x32ca24(_0x42c8a5._0x4b2006)+_0x32ca24(0x1df))+res['\x64\x61\x74\x61'][_0x32ca24(0x1f1)]+(_0x32ca24(0x1cf)+_0x32ca24(_0x42c8a5._0x266570))+res[_0x32ca24(0x1af)][_0x32ca24(_0x42c8a5._0xbb0882)]+(_0x32ca24(_0x42c8a5._0x303e4c)+'\x50\x49\x53\x4f\x44\x45\x3a\x2a\x20\x2a')+res['\x64\x61\x74\x61'][_0x32ca24(0x206)]+(_0x32ca24(0x205)+_0x32ca24(0x1e9))+res[_0x32ca24(0x1af)][_0x32ca24(_0x42c8a5._0x55b33e)]+('\x2a\x0a\x2a\x4f\x4e\x47\x4f\x49\x4e\x47'+_0x32ca24(0x20f))+(res[_0x32ca24(0x1af)]['\x61\x69\x72\x69\x6e\x67']?'\x59\x61':_0x4b3fba[_0x32ca24(_0x42c8a5._0x2d95ab)])+('\x2a\x0a\x2a\x41\x49\x52\x45\x44\x3a\x2a'+'\x20\x2a')+res[_0x32ca24(_0x42c8a5._0x9de4a)][_0x32ca24(0x1d6)][_0x32ca24(_0x42c8a5._0x11e540)]+(_0x32ca24(0x1dc)+_0x32ca24(_0x42c8a5._0x4f467c))+res[_0x32ca24(_0x42c8a5._0x4568da)][_0x32ca24(0x1de)]+(_0x32ca24(_0x42c8a5._0x51e156)+_0x32ca24(0x1e9))+res[_0x32ca24(0x1af)][_0x32ca24(0x1e4)]+('\x2a\x0a\x2a\x53\x43\x4f\x52\x45\x3a\x2a'+'\x20\x2a')+res['\x64\x61\x74\x61']['\x73\x63\x6f\x72\x65']+(_0x32ca24(_0x42c8a5._0x3c2128)+'\x2a')+res[_0x32ca24(_0x42c8a5._0x34cf9b)][_0x32ca24(0x20c)]+(_0x32ca24(0x1fd)+_0x32ca24(_0x42c8a5._0x35455b))+res['\x64\x61\x74\x61'][_0x32ca24(0x204)][0x234f+-0xd6d*-0x1+-0x30bc]['\x6e\x61\x6d\x65']+'\x2a\x20';const _0x547e45={};_0x547e45[_0x32ca24(_0x42c8a5._0x5e386c)]=res['\x64\x61\x74\x61'][_0x32ca24(0x20d)]['\x6a\x70\x67'][_0x32ca24(_0x42c8a5._0x1a2f01)];const _0x1e2ffc={};_0x1e2ffc[_0x32ca24(_0x42c8a5._0x5b6ccc)]=_0x547e45,_0x1e2ffc[_0x32ca24(_0x42c8a5._0x366939)]=_0x1b4300;const _0x15ed81={};_0x15ed81[_0x32ca24(_0x42c8a5._0x3741ae)]=_0x2240b0,_0x7914b1[_0x32ca24(_0x42c8a5._0x303b26)+'\x65'](_0x36dc52,_0x1e2ffc,_0x15ed81)[_0x32ca24(_0x42c8a5._0x567f30)](_0x5d4e91=>_0x51ff5f(''));const _0x1cc538={};_0x1cc538['\x74\x65\x78\x74']='\u2714',_0x1cc538[_0x32ca24(0x1dd)]=_0x2240b0[_0x32ca24(0x1dd)];const _0x44dbbe={};_0x44dbbe[_0x32ca24(0x1be)]=_0x1cc538,await _0x7914b1[_0x32ca24(_0x42c8a5._0x303b26)+'\x65'](_0x36dc52,_0x44dbbe);}catch(_0x168833){_0x4b3fba['\x64\x71\x45\x6d\x42'](_0x51ff5f,cants),_0x4b3fba['\x59\x6b\x6d\x4c\x4d'](_0x57e33b,_0x168833);}});

// Our Website: https://vihangayt.me
