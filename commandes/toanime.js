/*
ZeroTwo-MD V1.0 
 Coded By VihangaYT

Modified File : toanime.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/

const _0x962cb1=_0x18fc;(function(_0x49764e,_0x29ee3b){const _0x49b7a9={_0x5db57c:0xe7,_0xdbdd87:0xc3,_0x3a08f0:0xd8,_0x2ca736:0xb1,_0xdb9b62:0xd1,_0x1e739b:0xc8},_0xb9dcba=_0x18fc,_0x33bb8d=_0x49764e();while(!![]){try{const _0x598f32=-parseInt(_0xb9dcba(_0x49b7a9._0x5db57c))/(0xa42*-0x1+-0xa*-0x3b7+-0x1ae3)*(parseInt(_0xb9dcba(0xd3))/(0x5*0x7a3+-0x49*0x5f+-0xb16))+parseInt(_0xb9dcba(0xf1))/(0x210+-0x195f*-0x1+-0x1b6c)*(parseInt(_0xb9dcba(_0x49b7a9._0xdbdd87))/(-0xd72+-0x69f+-0x1*-0x1415))+-parseInt(_0xb9dcba(0xaa))/(0x18e2+-0xdfd+-0xae0)*(-parseInt(_0xb9dcba(_0x49b7a9._0x3a08f0))/(0x6b0+0x40f*0x6+-0x1f04))+-parseInt(_0xb9dcba(_0x49b7a9._0x2ca736))/(-0x18a6+-0x13*-0x6+0x1*0x183b)+-parseInt(_0xb9dcba(_0x49b7a9._0xdb9b62))/(0x1*-0x1692+0xc0e+0xa8c)+-parseInt(_0xb9dcba(_0x49b7a9._0x1e739b))/(0x52d*0x2+0x181c+0x7*-0x4eb)*(parseInt(_0xb9dcba(0xc0))/(-0x2039*0x1+-0xea4+0x2ee7))+parseInt(_0xb9dcba(0xb5))/(-0x22a5+-0x1080+0x3330);if(_0x598f32===_0x29ee3b)break;else _0x33bb8d['push'](_0x33bb8d['shift']());}catch(_0x2e12f3){_0x33bb8d['push'](_0x33bb8d['shift']());}}}(_0x21d5,-0x81c3b+-0x1*0x85208+0x1a7d8d));const {cmd,commands}=require(_0x962cb1(0xce));let {img2url}=require(_0x962cb1(0xed)+_0x962cb1(0xe2)+_0x962cb1(0xaf));function _0x18fc(_0x523011,_0x3e95c8){const _0x17ce88=_0x21d5();return _0x18fc=function(_0x3a10ae,_0x200154){_0x3a10ae=_0x3a10ae-(0x168f+-0x1ea3+-0x59*-0x19);let _0x4d2399=_0x17ce88[_0x3a10ae];return _0x4d2399;},_0x18fc(_0x523011,_0x3e95c8);}const {getRandom,fetchJson,getBuffer}=require(_0x962cb1(0xca)+_0x962cb1(0xcd)),fs=require('\x66\x73'),config=require(_0x962cb1(0xe5));var desct='';function _0x21d5(){const _0x3d151d=['\x6c\x65\x6e\x67\x74\x68','\x6d\x73\x67','\x67\x61\x79\x74\x30\x2f\x37\x64\x62\x62','\x70\x61\x74\x74\x65\x72\x6e','\x4d\x50\x55\x71\x64','\x56\x53\x6c\x5a\x58','\x20\u0d9a\u0dcf\u0dbb\u0dca\u0dba\u0db6\u0dc4\u0dd4\u0dbd','\x61\x70\x69\x2f\x74\x6f\x61\x6e\x69\x6d','\x31\x36\x39\x33\x30\x6f\x6c\x46\x48\x65\x70','\x36\x35\x66\x36\x61\x64\x66\x65\x32\x31','\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65','\x33\x35\x39\x36\x69\x70\x72\x55\x41\x53','\x2e\x63\x6f\x6d\x2f\x76\x69\x68\x61\x6e','\x63\x6f\x6e\x76\x65\x72\x74','\x6a\x47\x69\x50\x43','\x33\x39\x38\x32\x35\x36\x39\x61\x2f\x72','\x32\x35\x37\x34\x74\x55\x5a\x52\x42\x58','\x69\x6d\x67\x74\x6f\x61\x6e\x69\x6d\x65','\x2e\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e','\x2a\u0da1\u0dcf\u0dba\u0dcf\u0dbb\u0dd6\u0db4\u0dba\u0d9a','\x64\x65\x73\x63','\x63\x74\x69\x6f\x6e\x73','\x2e\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64','\x65\x78\x74','\x67\x65\x20\x74\x6f\x20\x61\x6e\x69\x6d','\x33\x36\x38\x37\x33\x31\x32\x41\x6b\x6e\x7a\x48\x4c','\u0dd0\u0dc0\u0dad\x20\u0d8b\u0dad\u0dca\u0dc3\u0dcf\u0dc4','\x32\x4c\x6d\x73\x78\x49\x63','\x71\x75\x6f\x74\x65\x64','\x63\x61\x74\x65\x67\x6f\x72\x79','\x74\x79\x70\x65','\x46\x4f\x4f\x54\x45\x52','\x35\x38\x30\x36\x32\x4b\x4d\x41\x55\x73\x59','\x65\x72\x2e\x21\x2a','\x20\x62\x75\x73\x79\x2e\x20\x54\x72\x79','\x6a\x73\x6f\x6e','\x66\x69\x6c\x65\x2d\x74\x79\x70\x65','\x4f\x6b\x6c\x76\x66','\x20\x67\x69\x76\x65\x6e\x20\x69\x6d\x61','\u0d87\u0dad\u0dd2\x20\u0dbb\u0dd6\u0db4\u0dba\x20\x61','\x68\x6a\x4b\x7a\x6f','\u0d9a\u0dbb\u0dba\u0dd2\x2e','\x2f\x74\x65\x6c\x65\x67\x72\x61\x6d\x2d','\x72\x61\x6e\x64\x6f\x6d','\x65\x3f\x75\x72\x6c\x3d','\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67','\u0daf\u0dd9\u0db1\u0dca\u0db1\x20\x21\x2a','\x34\x30\x32\x35\x39\x36\x43\x57\x67\x4a\x4f\x6b','\x61\x6e\x69\x6d\x65\x69\x6d\x67','\x74\x6f\x61\x6e\x69\x6d\x65','\x6e\x69\x6d\x65\x20\x69\x6d\x61\x67\x65','\x61\x20\x70\x68\x6f\x74\x6f\x20\x21\x2a','\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61','\x40\x62\x6c\x61\x63\x6b\x61\x6d\x64\x61','\u0da7\x20\x6d\x65\x6e\x74\x69\x6f\x6e\x20','\x6e\x69\x6d\x65\x3f\x75\x72\x6c\x3d','\x66\x6c\x6f\x6f\x72','\x35\x34\x36\x5a\x53\x41\x45\x63\x59','\x64\x6f\x77\x6e\x6c\x6f\x61\x64','\x68\x61\x6e\x67\x61\x79\x74\x2e\x6d\x65','\x66\x6a\x54\x6f\x75','\x65\x20\x69\x6d\x61\x67\x65\x2e','\x2a\x53\x65\x72\x76\x65\x72\x20\u0d91\u0d9a','\x61\x6c\x69\x61\x73','\x4d\x4d\x53\x4e\x64','\x68\x6b\x72\x63\x70','\x2e\x74\x6f\x61\x6e\x69\x6d\x65\x20\x3c','\x4c\x41\x4e\x47','\x73\x65\x72\x63\x6f\x6e\x74\x65\x6e\x74','\x53\x79\x58\x42\x4f','\x77\x72\x69\x74\x65\x46\x69\x6c\x65','\x35\x69\x45\x47\x6e\x43\x59','\x67\x59\x79\x68\x49','\x2a\x53\x65\x72\x76\x65\x72\x20\x69\x73','\x73\x74\x2e\x67\x69\x74\x68\x75\x62\x75','\x70\x72\x6f\x6d\x69\x73\x65\x73','\x69\x6d\x61\x67\x65\x2d\x75\x72\x6c','\x49\x74\x20\x63\x6f\x6e\x76\x65\x72\x74','\x38\x32\x39\x38\x36\x35\x34\x48\x53\x56\x75\x4f\x69','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x69','\x26\x61\x70\x69\x6b\x65\x79\x3d','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x33\x33\x32\x31\x31\x32\x39\x39\x71\x59\x55\x62\x5a\x54','\x68\x44\x67\x54\x79','\u0d91\u0dba\x20\u0dbd\u0db6\u0dcf\x20\u0daf\u0dd3\x20'];_0x21d5=function(){return _0x3d151d;};return _0x21d5();}if(config['\x4c\x41\x4e\x47']==='\x53\x49')desct=_0x962cb1(0xb7)+_0x962cb1(0xdf)+_0x962cb1(0xea)+'\x20\u0d91\u0d9a\u0d9a\u0dca\x20\u0db6\u0dc0\u0da7\x20'+'\u0db4\u0dbb\u0dd2\u0dc0\u0dbb\u0dca\u0dad\u0db1\u0dba\x20'+_0x962cb1(0xe1);else desct=_0x962cb1(0xb0)+_0x962cb1(0xde)+_0x962cb1(0xd0)+_0x962cb1(0xa0);var imgmsg='';if(config[_0x962cb1(0xa6)]==='\x53\x49')imgmsg=_0x962cb1(0xcb)+_0x962cb1(0xee)+_0x962cb1(0xe6);else imgmsg='\x2a\x52\x65\x70\x6c\x79\x20\x74\x6f\x20'+_0x962cb1(0xeb);var cantf='';if(config['\x4c\x41\x4e\x47']==='\x53\x49')cantf=_0x962cb1(0xa1)+_0x962cb1(0xbe)+'\u0dba\u0dd2\x2e\x20\u0db4\u0dc3\u0dd4\u0dc0\x20\u0db1'+_0x962cb1(0xd2)+'\x20\u0d9a\u0dbb\u0db1\u0dca\u0db1\x2e\x20\x21\x2a';else cantf=_0x962cb1(0xac)+_0x962cb1(0xda)+'\x20\x61\x67\x61\x69\x6e\x20\x6c\x61\x74'+_0x962cb1(0xd9);const _0x9ca3db={};_0x9ca3db[_0x962cb1(0xbb)]=_0x962cb1(0xe9),_0x9ca3db['\x72\x65\x61\x63\x74']='\ud83c\udfee',_0x9ca3db[_0x962cb1(0xa2)]=[_0x962cb1(0xc9),_0x962cb1(0xe8)],_0x9ca3db[_0x962cb1(0xcc)]=desct,_0x9ca3db[_0x962cb1(0xd5)]=_0x962cb1(0xc5),_0x9ca3db['\x75\x73\x65']=_0x962cb1(0xa5)+'\x72\x65\x70\x6c\x79\x20\x69\x6d\x61\x67'+'\x65\x3e',_0x9ca3db['\x66\x69\x6c\x65\x6e\x61\x6d\x65']=__filename,cmd(_0x9ca3db,async(_0x3229d0,_0x281a97,_0x590201,{from:_0x14d18d,l:_0x39c0f3,prefix:_0x1e8183,quoted:_0x534476,body:_0x1769b8,isCmd:_0x5a3927,command:_0x57eceb,args:_0x4e8f6c,q:_0x328b09,isGroup:_0x3b5ace,sender:_0x3a3697,senderNumber:_0x5bc74e,botNumber2:_0x5add02,botNumber:_0x3ba7f3,pushname:_0x4e1548,isMe:_0x1a6549,isOwner:_0x985e22,groupMetadata:_0x56a01f,groupName:_0x30bda0,participants:_0x2f3fd6,groupAdmins:_0x1b3dba,isBotAdmins:_0x1910eb,isAdmins:_0x1bc24f,reply:_0x336a92})=>{const _0x350948={_0xc4f97f:0xb2,_0x525bac:0x9e,_0xf4cc57:0xa7,_0x39ad42:0xba,_0x28a25c:0xc1,_0x24dad3:0xc7,_0x81340e:0xbf,_0x5ea029:0xe4,_0x53d77c:0xec,_0x20f527:0xd6,_0x926007:0xd4,_0x3e6774:0xb9,_0xa3f78c:0xec,_0x2bdeb9:0xdd,_0x2f305e:0xd4,_0x34e131:0x9d,_0x376134:0xae,_0x3841fb:0xc6},_0x3cf110={_0x59e5d7:0xbd,_0x5271d0:0xb6,_0x2b212c:0xe0,_0x12f8b0:0xf0,_0x510191:0xb8},_0x5d446c=_0x962cb1,_0x1c560a={'\x6a\x47\x69\x50\x43':function(_0x1b07f3,_0x1ba9d5){return _0x1b07f3(_0x1ba9d5);},'\x56\x53\x6c\x5a\x58':function(_0xd434a8,_0x4f6797){return _0xd434a8+_0x4f6797;},'\x68\x44\x67\x54\x79':_0x5d446c(_0x350948._0xc4f97f)+_0x5d446c(_0x350948._0x525bac)+'\x2f\x74\x6f\x6f\x6c\x73\x2f\x74\x6f\x61'+_0x5d446c(0xef),'\x68\x6a\x4b\x7a\x6f':'\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69'+_0x5d446c(0xad)+_0x5d446c(_0x350948._0xf4cc57)+_0x5d446c(0xc4)+_0x5d446c(_0x350948._0x39ad42)+_0x5d446c(_0x350948._0x28a25c)+'\x35\x33\x38\x66\x37\x66\x65\x62\x64\x31'+_0x5d446c(_0x350948._0x24dad3)+'\x61\x77\x2f\x61\x70\x69\x6c\x69\x73\x2e'+_0x5d446c(0xdb),'\x53\x79\x58\x42\x4f':function(_0x2c8171,_0x148062){return _0x2c8171*_0x148062;},'\x44\x7a\x57\x48\x45':function(_0x208b84,_0x4c32f1){return _0x208b84+_0x4c32f1;},'\x53\x53\x4e\x4d\x4a':_0x5d446c(_0x350948._0x81340e)+_0x5d446c(_0x350948._0x5ea029),'\x67\x4d\x77\x71\x75':_0x5d446c(0xb3),'\x68\x6b\x72\x63\x70':function(_0x4233d9,_0x533ff2){return _0x4233d9===_0x533ff2;},'\x66\x6a\x54\x6f\x75':_0x5d446c(0xc2)+'\x73\x73\x61\x67\x65','\x4d\x50\x55\x71\x64':_0x5d446c(_0x350948._0x53d77c)+'\x67\x65','\x4f\x6b\x6c\x76\x66':_0x5d446c(0xdc),'\x41\x4a\x41\x71\x43':function(_0x288871,_0x44852f){return _0x288871+_0x44852f;},'\x67\x59\x79\x68\x49':function(_0x5047e7,_0x46e4ec){return _0x5047e7(_0x46e4ec);},'\x4d\x4d\x53\x4e\x64':function(_0x35a6ac,_0x4aa7c8){return _0x35a6ac(_0x4aa7c8);},'\x6b\x4e\x6c\x43\x47':function(_0x4bbb42,_0x3c2204){return _0x4bbb42(_0x3c2204);}};try{const _0x4cd4f3=_0x590201[_0x5d446c(0xd4)]?_0x1c560a['\x68\x6b\x72\x63\x70'](_0x590201[_0x5d446c(0xd4)][_0x5d446c(_0x350948._0x20f527)],_0x1c560a[_0x5d446c(0x9f)]):![],_0x3cbaa9=_0x590201[_0x5d446c(_0x350948._0x926007)]?_0x590201['\x71\x75\x6f\x74\x65\x64']['\x74\x79\x70\x65']===_0x1c560a[_0x5d446c(0xbc)]||(_0x4cd4f3?_0x1c560a[_0x5d446c(0xa4)](_0x590201['\x71\x75\x6f\x74\x65\x64'][_0x5d446c(_0x350948._0x3e6774)][_0x5d446c(0xd6)],_0x5d446c(_0x350948._0xa3f78c)+'\x67\x65'):![]):![];if(_0x590201[_0x5d446c(0xd6)]===_0x1c560a[_0x5d446c(0xbc)]||_0x3cbaa9){const _0x167514=_0x1c560a['\x6a\x47\x69\x50\x43'](require,_0x1c560a[_0x5d446c(_0x350948._0x2bdeb9)]);var _0x94acbc=getRandom('');let _0x3a222a=_0x3cbaa9?await _0x590201[_0x5d446c(_0x350948._0x2f305e)][_0x5d446c(_0x350948._0x34e131)](_0x94acbc):await _0x590201['\x64\x6f\x77\x6e\x6c\x6f\x61\x64'](_0x94acbc),_0x1d692d=await _0x167514['\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72'](_0x3a222a);await fs[_0x5d446c(_0x350948._0x376134)][_0x5d446c(0xa9)](_0x1c560a['\x41\x4a\x41\x71\x43']('\x2e\x2f',_0x1d692d[_0x5d446c(0xcf)]),_0x3a222a),_0x1c560a[_0x5d446c(0xab)](img2url,'\x2e\x2f'+_0x1d692d[_0x5d446c(0xcf)])['\x74\x68\x65\x6e'](async _0x1d4877=>{const _0x33973f=_0x5d446c;try{const _0x2962a7={};_0x2962a7[_0x33973f(0xd4)]=_0x281a97,await _0x3229d0[_0x33973f(0xb4)+'\x65'](_0x14d18d,{'\x69\x6d\x61\x67\x65':await _0x1c560a[_0x33973f(0xc6)](getBuffer,_0x1c560a[_0x33973f(_0x3cf110._0x59e5d7)](_0x1c560a[_0x33973f(_0x3cf110._0x5271d0)],_0x1d4877)),'\x63\x61\x70\x74\x69\x6f\x6e':config['\x46\x4f\x4f\x54\x45\x52']},_0x2962a7);}catch(_0x1d7325){let _0x529976=await fetchJson(_0x1c560a[_0x33973f(_0x3cf110._0x2b212c)]),_0x48c5aa=_0x529976['\x75\x73\x65\x72\x73'],_0x2951b6=_0x48c5aa[Math[_0x33973f(_0x3cf110._0x12f8b0)](_0x1c560a[_0x33973f(0xa8)](Math[_0x33973f(0xe3)](),_0x48c5aa[_0x33973f(_0x3cf110._0x510191)]))];const _0x2be32a={};_0x2be32a['\x71\x75\x6f\x74\x65\x64']=_0x281a97,await _0x3229d0[_0x33973f(0xb4)+'\x65'](_0x14d18d,{'\x69\x6d\x61\x67\x65':{'\x75\x72\x6c':_0x1c560a['\x44\x7a\x57\x48\x45'](_0x1c560a[_0x33973f(0xbd)](_0x1c560a['\x44\x7a\x57\x48\x45'](_0x529976['\x78\x7a'],_0x1c560a['\x53\x53\x4e\x4d\x4a'])+_0x1d4877,_0x1c560a['\x67\x4d\x77\x71\x75']),_0x2951b6)},'\x63\x61\x70\x74\x69\x6f\x6e':config[_0x33973f(0xd7)]},_0x2be32a);}});}else return _0x1c560a[_0x5d446c(0xa3)](_0x336a92,imgmsg);}catch(_0x1b8118){_0x1c560a[_0x5d446c(_0x350948._0x3841fb)](_0x336a92,cantf),_0x1c560a['\x6b\x4e\x6c\x43\x47'](_0x39c0f3,_0x1b8118);}});

// Our Website: https://vihangayt.me
