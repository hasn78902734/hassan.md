/*
created by Hassan_Rajpoot
contact me 923286813475
© Copy coder alert ⚠
*/



function _0x205c(_0x51ff4d,_0x12f868){const _0x242733=_0x2427();return _0x205c=function(_0x205c2e,_0x2860fe){_0x205c2e=_0x205c2e-0xa7;let _0x42f558=_0x242733[_0x205c2e];return _0x42f558;},_0x205c(_0x51ff4d,_0x12f868);}const _0xcc4ba5=_0x205c;(function(_0x5bbbca,_0x1929e6){const _0x160ad3=_0x205c,_0x1820e6=_0x5bbbca();while(!![]){try{const _0x237ee4=parseInt(_0x160ad3(0x184))/0x1+-parseInt(_0x160ad3(0x1e8))/0x2*(parseInt(_0x160ad3(0x19f))/0x3)+parseInt(_0x160ad3(0xd3))/0x4*(-parseInt(_0x160ad3(0x1de))/0x5)+-parseInt(_0x160ad3(0x1b7))/0x6+-parseInt(_0x160ad3(0x1c2))/0x7+parseInt(_0x160ad3(0x1b8))/0x8+parseInt(_0x160ad3(0x1db))/0x9;if(_0x237ee4===_0x1929e6)break;else _0x1820e6['push'](_0x1820e6['shift']());}catch(_0xe347b8){_0x1820e6['push'](_0x1820e6['shift']());}}}(_0x2427,0xc99c6));const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidNormalizedUser,getContentType,fetchLatestBaileysVersion,Browsers}=require(_0xcc4ba5(0xef)),l=console[_0xcc4ba5(0x137)],{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require(_0xcc4ba5(0x110)),fs=require('fs'),ff=require(_0xcc4ba5(0x19d)),P=require(_0xcc4ba5(0x198)),config=require(_0xcc4ba5(0x203)),qrcode=require('qrcode-terminal'),StickersTypes=require(_0xcc4ba5(0x1bc)),util=require(_0xcc4ba5(0x108)),{sms,downloadMediaMessage}=require(_0xcc4ba5(0x20d)),axios=require(_0xcc4ba5(0x1ec)),{File}=require(_0xcc4ba5(0x11c)),{fromBuffer}=require(_0xcc4ba5(0x1ab)),bodyparser=require(_0xcc4ba5(0x132)),{tmpdir}=require('os'),Crypto=require(_0xcc4ba5(0x1d6)),path=require('path'),prefix=config[_0xcc4ba5(0x1ef)],ownerNumber=[_0xcc4ba5(0x16f)];if(!fs[_0xcc4ba5(0xf9)](__dirname+'/auth_info_baileys/creds.json')){if(!config[_0xcc4ba5(0xdf)])return console[_0xcc4ba5(0x137)](_0xcc4ba5(0x101));const sessdata=config[_0xcc4ba5(0xdf)],filer=File['fromURL']('https://mega.nz/file/'+sessdata);filer[_0xcc4ba5(0x123)]((_0x40472d,_0x5ccba8)=>{const _0x1df8cb=_0xcc4ba5;if(_0x40472d)throw _0x40472d;fs[_0x1df8cb(0x201)](__dirname+'/auth_info_baileys/creds.json',_0x5ccba8,()=>{const _0x31fe0c=_0x1df8cb;console[_0x31fe0c(0x137)]('SESSION\x20DOWNLOADED\x20COMPLETED\x20✅');});});}const express=require(_0xcc4ba5(0xd6)),app=express(),port=process['env'][_0xcc4ba5(0x144)]||0x2382;async function connectToWA(){const _0x52586f=_0xcc4ba5;console['log'](_0x52586f(0x207));const {state:_0x428452,saveCreds:_0x4ba182}=await useMultiFileAuthState(__dirname+_0x52586f(0x1aa));var {version:_0x5205a8}=await fetchLatestBaileysVersion();const _0x24f959=makeWASocket({'logger':P({'level':_0x52586f(0x131)}),'printQRInTerminal':![],'browser':Browsers[_0x52586f(0x12d)](_0x52586f(0x171)),'syncFullHistory':!![],'auth':_0x428452,'version':_0x5205a8});_0x24f959['ev']['on']('connection.update',_0x1d5eeb=>{const _0x320fad=_0x52586f,{connection:_0x3a5c41,lastDisconnect:_0x3ffbe4}=_0x1d5eeb;if(_0x3a5c41===_0x320fad(0xd8))_0x3ffbe4[_0x320fad(0x109)]['output'][_0x320fad(0x1ff)]!==DisconnectReason[_0x320fad(0x1a9)]&&connectToWA();else{if(_0x3a5c41===_0x320fad(0xbd)){console[_0x320fad(0x137)](_0x320fad(0x1bf));const _0x2a496e=require(_0x320fad(0xfc));fs['readdirSync']('./plugins/')['forEach'](_0x46d899=>{const _0x46d466=_0x320fad;_0x2a496e[_0x46d466(0x11f)](_0x46d899)[_0x46d466(0x115)]()=='.js'&&require(_0x46d466(0x1f3)+_0x46d899);}),console[_0x320fad(0x137)](_0x320fad(0x1bd)),console['log'](_0x320fad(0x1d4));let _0xb37a88=_0x320fad(0x1f8)+prefix+']*\x0a\x0a*•────────────•⟢*\x0a\x0a>\x20©\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ʜᴀssᴀɴʀᴀᴊᴘᴏᴏᴛ²¹⁴\x0a\x0a*•────────────•⟢*\x0a\x0a';_0x24f959[_0x320fad(0x1dc)](_0x24f959['user']['id'],{'image':{'url':_0x320fad(0x190)},'caption':_0xb37a88});}}}),_0x24f959['ev']['on'](_0x52586f(0xcb),_0x4ba182),_0x24f959['ev']['on']('messages.upsert',async _0x5d29b4=>{const _0x2ef164=_0x52586f;_0x5d29b4=_0x5d29b4[_0x2ef164(0x1b0)][0x0];if(!_0x5d29b4[_0x2ef164(0xec)])return;_0x5d29b4[_0x2ef164(0xec)]=getContentType(_0x5d29b4[_0x2ef164(0xec)])===_0x2ef164(0x120)?_0x5d29b4['message'][_0x2ef164(0x120)][_0x2ef164(0xec)]:_0x5d29b4['message'];_0x5d29b4[_0x2ef164(0x1b9)]&&_0x5d29b4['key']['remoteJid']===_0x2ef164(0x1c3)&&config['AUTO_READ_STATUS']===_0x2ef164(0x1a2)&&await _0x24f959['readMessages']([_0x5d29b4[_0x2ef164(0x1b9)]]);if(_0x5d29b4[_0x2ef164(0x1b9)]&&_0x5d29b4[_0x2ef164(0x1b9)]['remoteJid']===_0x2ef164(0x1c3)&&config['AUTO_REPLY_STATUS']===_0x2ef164(0x1a2)){const _0x5a0ca8=_0x5d29b4[_0x2ef164(0x1b9)][_0x2ef164(0x139)],_0x28ae92=''+config[_0x2ef164(0x1f9)];await _0x24f959[_0x2ef164(0x1dc)](_0x5a0ca8,{'text':_0x28ae92},{'quoted':_0x5d29b4});}const _0x57083e=sms(_0x24f959,_0x5d29b4),_0x1bbb6b=getContentType(_0x5d29b4[_0x2ef164(0xec)]),_0x10358a=JSON[_0x2ef164(0xb1)](_0x5d29b4[_0x2ef164(0xec)]),_0x48a433=_0x5d29b4[_0x2ef164(0x1b9)][_0x2ef164(0xcf)],_0x226926=_0x1bbb6b=='extendedTextMessage'&&_0x5d29b4[_0x2ef164(0xec)][_0x2ef164(0x165)][_0x2ef164(0x1c7)]!=null?_0x5d29b4[_0x2ef164(0xec)]['extendedTextMessage'][_0x2ef164(0x1c7)][_0x2ef164(0x1a7)]||[]:[],_0x23a920=_0x1bbb6b===_0x2ef164(0x1c0)?_0x5d29b4[_0x2ef164(0xec)][_0x2ef164(0x1c0)]:_0x1bbb6b===_0x2ef164(0x165)?_0x5d29b4[_0x2ef164(0xec)]['extendedTextMessage']['text']:_0x1bbb6b==_0x2ef164(0x1d5)&&_0x5d29b4[_0x2ef164(0xec)][_0x2ef164(0x1d5)][_0x2ef164(0x1bb)]?_0x5d29b4['message'][_0x2ef164(0x1d5)][_0x2ef164(0x1bb)]:_0x1bbb6b==_0x2ef164(0xd5)&&_0x5d29b4[_0x2ef164(0xec)]['videoMessage']['caption']?_0x5d29b4[_0x2ef164(0xec)][_0x2ef164(0xd5)][_0x2ef164(0x1bb)]:'',_0x22ae71=_0x23a920[_0x2ef164(0x14a)](prefix),_0x28bbbc=_0x22ae71?_0x23a920[_0x2ef164(0x17b)](prefix[_0x2ef164(0x199)])[_0x2ef164(0x1cb)]()[_0x2ef164(0x1fc)]('\x20')[_0x2ef164(0x20c)]()[_0x2ef164(0x115)]():'',_0x3bcf44=_0x23a920[_0x2ef164(0x1cb)]()[_0x2ef164(0x1fc)](/ +/)['slice'](0x1),_0x1d1779=_0x3bcf44[_0x2ef164(0x1ca)]('\x20'),_0x27287b=_0x48a433[_0x2ef164(0x145)]('@g.us'),_0x2c78e3=_0x5d29b4[_0x2ef164(0x1b9)][_0x2ef164(0xb9)]?_0x24f959[_0x2ef164(0xea)]['id'][_0x2ef164(0x1fc)](':')[0x0]+_0x2ef164(0x140)||_0x24f959[_0x2ef164(0xea)]['id']:_0x5d29b4[_0x2ef164(0x1b9)][_0x2ef164(0x139)]||_0x5d29b4[_0x2ef164(0x1b9)][_0x2ef164(0xcf)],_0x38daec=_0x2c78e3[_0x2ef164(0x1fc)]('@')[0x0],_0x8107d=_0x24f959['user']['id'][_0x2ef164(0x1fc)](':')[0x0],_0x18e81a=_0x5d29b4[_0x2ef164(0x13d)]||'Sin\x20Nombre',_0x37874a=_0x8107d['includes'](_0x38daec),_0x18886b=ownerNumber[_0x2ef164(0xc6)](_0x38daec)||_0x37874a,_0x138ac3=await jidNormalizedUser(_0x24f959[_0x2ef164(0xea)]['id']),_0x1ef373=_0x27287b?await _0x24f959[_0x2ef164(0xba)](_0x48a433)[_0x2ef164(0x102)](_0x24a4ad=>{}):'',_0x1852a9=_0x27287b?_0x1ef373['subject']:'',_0x30837d=_0x27287b?await _0x1ef373[_0x2ef164(0xe6)]:'',_0x167cd3=_0x27287b?await getGroupAdmins(_0x30837d):'',_0x25db1c=_0x27287b?_0x167cd3[_0x2ef164(0xc6)](_0x138ac3):![],_0x1a7a55=_0x27287b?_0x167cd3[_0x2ef164(0xc6)](_0x2c78e3):![],_0x3ad4f6=_0x57083e['message']['reactionMessage']?!![]:![],_0x3c2fed=_0x5f5894=>{const _0x1c9dec=_0x2ef164;_0x24f959[_0x1c9dec(0x1dc)](_0x48a433,{'text':_0x5f5894},{'quoted':_0x5d29b4});};_0x24f959[_0x2ef164(0xa9)]=async(_0x5d8eac,_0x476646,_0x369c3e,_0x43f728,_0xebac4c={})=>{const _0x3a0ce3=_0x2ef164;let _0x2fb352='',_0x5397df=await axios['head'](_0x476646);_0x2fb352=_0x5397df[_0x3a0ce3(0x15b)]['content-type'];if(_0x2fb352[_0x3a0ce3(0x1fc)]('/')[0x1]===_0x3a0ce3(0x1c1))return _0x24f959['sendMessage'](_0x5d8eac,{'video':await getBuffer(_0x476646),'caption':_0x369c3e,'gifPlayback':!![],..._0xebac4c},{'quoted':_0x43f728,..._0xebac4c});let _0x532e0a=_0x2fb352[_0x3a0ce3(0x1fc)]('/')[0x0]+_0x3a0ce3(0x1ce);if(_0x2fb352===_0x3a0ce3(0x169))return _0x24f959['sendMessage'](_0x5d8eac,{'document':await getBuffer(_0x476646),'mimetype':'application/pdf','caption':_0x369c3e,..._0xebac4c},{'quoted':_0x43f728,..._0xebac4c});if(_0x2fb352[_0x3a0ce3(0x1fc)]('/')[0x0]===_0x3a0ce3(0x153))return _0x24f959[_0x3a0ce3(0x1dc)](_0x5d8eac,{'image':await getBuffer(_0x476646),'caption':_0x369c3e,..._0xebac4c},{'quoted':_0x43f728,..._0xebac4c});if(_0x2fb352[_0x3a0ce3(0x1fc)]('/')[0x0]===_0x3a0ce3(0x18a))return _0x24f959[_0x3a0ce3(0x1dc)](_0x5d8eac,{'video':await getBuffer(_0x476646),'caption':_0x369c3e,'mimetype':_0x3a0ce3(0x13b),..._0xebac4c},{'quoted':_0x43f728,..._0xebac4c});if(_0x2fb352[_0x3a0ce3(0x1fc)]('/')[0x0]===_0x3a0ce3(0xfe))return _0x24f959[_0x3a0ce3(0x1dc)](_0x5d8eac,{'audio':await getBuffer(_0x476646),'caption':_0x369c3e,'mimetype':_0x3a0ce3(0xb0),..._0xebac4c},{'quoted':_0x43f728,..._0xebac4c});},_0x24f959['ev']['on'](_0x2ef164(0x141),async _0x2f32d2=>{const _0x587d34=_0x2ef164;try{_0x2f32d2=_0x2f32d2[_0x587d34(0x1b0)][0x0];if(!_0x2f32d2[_0x587d34(0xec)])return;_0x2f32d2[_0x587d34(0xec)]=getContentType(_0x2f32d2['message'])===_0x587d34(0x120)?_0x2f32d2['message'][_0x587d34(0x120)][_0x587d34(0xec)]:_0x2f32d2[_0x587d34(0xec)];config[_0x587d34(0x138)]===_0x587d34(0x1a2)&&(await _0x24f959[_0x587d34(0xb7)]([_0x2f32d2[_0x587d34(0x1b9)]]),console['log'](_0x587d34(0x1a5)+_0x2f32d2[_0x587d34(0x1b9)][_0x587d34(0xcf)]+_0x587d34(0x18f)));const _0x547644=sms(_0x24f959,_0x2f32d2),_0x4abcc8=getContentType(_0x2f32d2[_0x587d34(0xec)]),_0xe554f=JSON[_0x587d34(0xb1)](_0x2f32d2['message']),_0x1aefe6=_0x2f32d2[_0x587d34(0x1b9)]['remoteJid'],_0x50c299=_0x1aefe6['endsWith'](_0x587d34(0x1e0)),_0x2bbe07=_0x2f32d2[_0x587d34(0x1b9)][_0x587d34(0xb9)]?_0x24f959[_0x587d34(0xea)]['id'][_0x587d34(0x1fc)](':')[0x0]+'@s.whatsapp.net':_0x2f32d2[_0x587d34(0x1b9)][_0x587d34(0x139)]||_0x2f32d2[_0x587d34(0x1b9)]['remoteJid'];}catch(_0x5382ed){console[_0x587d34(0x109)]('Error\x20in\x20message\x20handler:',_0x5382ed);}});if(_0x38daec['includes'](_0x2ef164(0x16f))){if(_0x3ad4f6)return;_0x57083e[_0x2ef164(0x13c)]('👑');}if(_0x38daec['includes'](_0x2ef164(0x1f2))){if(_0x3ad4f6)return;_0x57083e['react']('👑');}if(_0x38daec[_0x2ef164(0xc6)](_0x2ef164(0x150))){if(_0x3ad4f6)return;_0x57083e['react']('🦋');}if(_0x38daec[_0x2ef164(0xc6)]('447783770746')){if(_0x3ad4f6)return;_0x57083e[_0x2ef164(0x13c)]('🎀');}if(!_0x3ad4f6&&_0x38daec!==_0x8107d){if(config[_0x2ef164(0xd1)]==='true'){const _0x30189e=['😊','👍','😂','💯','🔥','🙏','🎉','👏','😎','🤖','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞','🕷️','🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),'🕸️','💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮','🕴️','💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫','🕷️',_0x2ef164(0x1c4),'💀','👻','🕺','💃','🕴️','👶','👵','👴','👱','👨','👩','👧','👦','👪','🙂','😑','🤣','😍','😘','😗','😙','😚','😛','😝','😞','😟','😠','😡','😢','😭','😓','😳','😴','😌','😆','😂','🤔','😒','😓','😶','🙄','🐶','🐱','🐔','🐷','🐴','🐲','🐸','🐳','🐋','🐒','🐑','🐕','🐩','🍔','🍕','🥤','🍣','🍲','🍴','🍽','🍹','🍸','🎂','📱','📺','📻','🎤','📚','💻','📸','📷','❤️','💔','❣️','☀️','🌙','🌃','🏠','🚪','🇺🇸',_0x2ef164(0xcc),_0x2ef164(0x158),_0x2ef164(0x1c9),_0x2ef164(0x14b),_0x2ef164(0x1d2),'🇪🇸','👍','👎','👏','👫','👭','👬','👮','🤝','🙏','👑','🌻','🌺','🌸','🌹','🌴',_0x2ef164(0x1d0),'🌊','🚗','🚌',_0x2ef164(0x146),_0x2ef164(0x1dd),_0x2ef164(0x159),'🚣','🛥','🚂','🚁','🚀','🏃‍♂️',_0x2ef164(0x15a),_0x2ef164(0x195),_0x2ef164(0x1e9),'🎾','🏀','🏈','🎯','🏆','??','⬆️','⬇️','⇒','⇐','↩️','↪️','ℹ️','‼️','⁉️','‽️','©️','®️','™️','🔴','🔵','🟢','🔹','🔺','💯','👑','🤣','🤷‍♂️',_0x2ef164(0x1e1),_0x2ef164(0x152),_0x2ef164(0xd0),'🙆‍♂️','🙆‍♀️','🤦‍♂️',_0x2ef164(0x16a),'🏻','💆‍♂️',_0x2ef164(0x174),_0x2ef164(0xf2),_0x2ef164(0x17d),_0x2ef164(0x15d),'💇‍♀️','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷','🕯️','💡','🔦','�','🏯','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),'🕸️','💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞','🕷️','🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🌳','🌲','🌾','🌿','🍃','🍂','🍃','🌻','💐','🌹','🌺','🌸','🌴','🏵','🎀','🏆','🏈','🏉','🎯','🏀','🏊','🏋','🏌','🎲','📚','📖','📜','📝','💭','💬','🗣','💫','🌟','🌠','🎉','🎊','👏','💥','🔥','💥','🌪','💨','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌪','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌪','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌱','🌿','🍃','🍂','🌻','💐','🌹','🌺','🌸','🌴','🏵','🎀','🏆','🏈','🏉','🎯','🏀','🏊','🏋','🏌','🎲','📚','📖','📜','📝','💭','💬','🗣','💫','🌟','🌠','🎉','🎊','👏','💥','🔥','💥','🌪','💨','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌪','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🕯️','💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🐒','🦍','🦧','🐶','🐕','🦮',_0x2ef164(0x124),'🐩','🐺','🦊','🦝','🐱','🐈',_0x2ef164(0xcd),'🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🦬','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦣','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇',_0x2ef164(0x178),'🦫','🦔','🦇','🐻',_0x2ef164(0x125),'🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦','🐧',_0x2ef164(0x1e4),'🦅','🦆','🦢','🦉','🦤','🪶','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🦭','🐟','🐠','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶',_0x2ef164(0x189),'😏','😒','🙄','😬',_0x2ef164(0x121),'🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵',_0x2ef164(0x117),'🤯','🤠','🥳','🥸','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','💋','💌','💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔',_0x2ef164(0x1ed),'❤️‍🩹','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','💯','💢','💥','💫','💦','💨',_0x2ef164(0x1d7),'💣','💬',_0x2ef164(0x197),_0x2ef164(0xfa),_0x2ef164(0x13e),'💭','💤','👋','🤚',_0x2ef164(0x1fb),'✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🫀','🫁','🦷','🦴','👀',_0x2ef164(0xf0),'👅','👄','👶','🧒','👦','👧','🧑','👱','👨','🧔',_0x2ef164(0x12f),_0x2ef164(0xe4),_0x2ef164(0x130),_0x2ef164(0x1fd),_0x2ef164(0xe2),_0x2ef164(0x11e),'👩',_0x2ef164(0x1e7),'🧑‍🦰','👩‍🦱',_0x2ef164(0xaf),_0x2ef164(0xde),_0x2ef164(0x18d),_0x2ef164(0xe3),_0x2ef164(0x16e),_0x2ef164(0x179),'👱‍♂️','🧓','👴','👵','🙍',_0x2ef164(0x148),'🙍‍♀️','🙎',_0x2ef164(0x180),_0x2ef164(0x1b1),'🙅',_0x2ef164(0x152),_0x2ef164(0xd0),'🙆',_0x2ef164(0x1f1),'🙆‍♀️','💁','💁‍♂️',_0x2ef164(0x114),'🙋',_0x2ef164(0x15f),_0x2ef164(0xf7),'🧏',_0x2ef164(0x191),_0x2ef164(0x143),'🙇','🙇‍♂️',_0x2ef164(0xa7),'🤦',_0x2ef164(0x208),_0x2ef164(0x16a),'🤷','🤷‍♂️','🤷‍♀️',_0x2ef164(0x176),_0x2ef164(0x170),_0x2ef164(0x186),'🧑‍🎓',_0x2ef164(0x19a),'👩‍🎓',_0x2ef164(0x134),_0x2ef164(0x10a),_0x2ef164(0x133),_0x2ef164(0x181),'👨‍⚖️','👩‍⚖️',_0x2ef164(0x105),'👨‍🌾',_0x2ef164(0xfd),_0x2ef164(0x17a),_0x2ef164(0x161),'👩‍🍳',_0x2ef164(0x183),'👨‍🔧',_0x2ef164(0x16d),_0x2ef164(0x19b),_0x2ef164(0xbc),'👩‍🏭',_0x2ef164(0x172),_0x2ef164(0x1f0),_0x2ef164(0x122),'🧑‍🔬','👨‍🔬',_0x2ef164(0x129),_0x2ef164(0xe9),_0x2ef164(0x173),_0x2ef164(0x15e),_0x2ef164(0x1cd),_0x2ef164(0x1d1),_0x2ef164(0x1f6),_0x2ef164(0x1ac),_0x2ef164(0xc0),'👩‍🎨',_0x2ef164(0x18e),_0x2ef164(0xd4),_0x2ef164(0x119),_0x2ef164(0x1ad),_0x2ef164(0x202),'👩‍🚀',_0x2ef164(0x100),_0x2ef164(0x20e),'👩‍🚒','👮','👮‍♂️',_0x2ef164(0xe8),_0x2ef164(0x156),_0x2ef164(0x175),'🕵️‍♀️','💂',_0x2ef164(0xda),'💂‍♀️','🥷','👷',_0x2ef164(0x1ee),_0x2ef164(0x1a0),'🤴','👸','👳',_0x2ef164(0x19c),_0x2ef164(0x14d),'👲','🧕','🤵','🤵‍♂️','🤵‍♀️','👰',_0x2ef164(0x1c5),_0x2ef164(0xed),'🤰','🤱','👩‍🍼','👨‍🍼',_0x2ef164(0xbe),'👼','🎅','🤶',_0x2ef164(0xac),'🦸',_0x2ef164(0x12a),'🦸‍♀️','🦹','🦹‍♂️',_0x2ef164(0x10f),'🧙','🧙‍♂️','🧙‍♀️','🧚','🧚‍♂️','🧚‍♀️','🧛',_0x2ef164(0xbf),_0x2ef164(0x113),'🧜','🧜‍♂️',_0x2ef164(0xd9),'🧝',_0x2ef164(0x12b),'🧝‍♀️','🧞',_0x2ef164(0x167),'🧞‍♀️','🧟',_0x2ef164(0x1d9),_0x2ef164(0x18c),'💆',_0x2ef164(0x10e),_0x2ef164(0x174),'💇',_0x2ef164(0x15d),_0x2ef164(0x12c),'🚶',_0x2ef164(0x157),_0x2ef164(0x1f4),'🧍',_0x2ef164(0x128),_0x2ef164(0x1ba),'🧎','🧎‍♂️',_0x2ef164(0x205),_0x2ef164(0x106),_0x2ef164(0xe0),_0x2ef164(0x17e),_0x2ef164(0xb8),'👨‍🦼',_0x2ef164(0x166),_0x2ef164(0x1e5),_0x2ef164(0xf1),_0x2ef164(0x177),'🏃',_0x2ef164(0x116),_0x2ef164(0x1a6),'💃','🕺','🕴️','👯',_0x2ef164(0x1cc),'👯‍♀️','🧖','🧖‍♂️','🧖‍♀️','🧗',_0x2ef164(0xb2),'🧗‍♀️','🤺','🏇','⛷️','🏂','🏌️','🏌️‍♂️',_0x2ef164(0x168),'🏄',_0x2ef164(0x1e9),_0x2ef164(0x185),'🚣',_0x2ef164(0x10d),_0x2ef164(0x1da),'🏊',_0x2ef164(0x195),_0x2ef164(0x194),'⛹️',_0x2ef164(0x18b),_0x2ef164(0x206),_0x2ef164(0x1e6),_0x2ef164(0x118),_0x2ef164(0x15a),'🚴',_0x2ef164(0x1d8),_0x2ef164(0xab),'🚵',_0x2ef164(0x14e),'🚵‍♀️','🤸',_0x2ef164(0x104),_0x2ef164(0xa8),'🤼','🤼‍♂️',_0x2ef164(0x204),'🤽',_0x2ef164(0x163),_0x2ef164(0x107),'🤾',_0x2ef164(0x20b),_0x2ef164(0x11d),'🤹',_0x2ef164(0x164),_0x2ef164(0xf4),'🧘',_0x2ef164(0x147),'🧘‍♀️','🛀','🛌',_0x2ef164(0x14c),'👭','👫','👬','💏',_0x2ef164(0x127),_0x2ef164(0xd2),_0x2ef164(0xdc),'💑',_0x2ef164(0xb6),'👨‍❤️‍👨','👩‍❤️‍👩','👪','👨‍👩‍👦','👨‍👩‍👧',_0x2ef164(0x209),'👨‍👩‍👦‍👦',_0x2ef164(0x182),_0x2ef164(0xc8),'👨‍👨‍👧',_0x2ef164(0x155),'👨‍👨‍👦‍👦','👨‍👨‍👧‍👧',_0x2ef164(0xc1),_0x2ef164(0x1c6),_0x2ef164(0xaa),_0x2ef164(0x1b5),_0x2ef164(0x103),_0x2ef164(0xf3),_0x2ef164(0x14f),_0x2ef164(0x154),_0x2ef164(0x136),_0x2ef164(0xf8),_0x2ef164(0x112),_0x2ef164(0x1af),_0x2ef164(0x16c),_0x2ef164(0x15c),_0x2ef164(0x200),'🗣️','👤','👥','🫂','👣','🦰','🦱','🦳','🦲','🐵'],_0x9a49be=_0x30189e[Math[_0x2ef164(0xca)](Math[_0x2ef164(0x12e)]()*_0x30189e['length'])];_0x57083e[_0x2ef164(0x13c)](_0x9a49be);}}if(!_0x3ad4f6&&_0x38daec===_0x8107d){if(config[_0x2ef164(0x1b2)]===_0x2ef164(0x1a2)){const _0x15ee7e=['😊','👍','😂','💯','🔥','🙏','🎉','👏','😎','🤖','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬','📽️','📸','📷','🕯️','💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞','🕷️','🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽','🕳️','💣','🔫','🕷️',_0x2ef164(0x1c4),'💀','👻','🕺','💃','🕴️','👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮','🕴️','💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞','🕷️','🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),'🕸️','💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','🙂','😑','🤣','😍','😘','😗','😙','😚','😛','😝','😞','😟','😠','😡','😢','😭','😓','😳','😴','😌','😆','😂','🤔','😒','😓','😶','🙄','🐶','🐱','🐔','🐷','🐴','🐲','🐸','🐳','🐋','🐒','🐑','🐕','🐩','🍔','🍕','🥤','🍣','🍲','🍴','🍽','🍹','🍸','🎂','📱','📺','📻','🎤','📚','💻','📸','📷','❤️','💔','❣️','☀️','🌙','🌃','🏠','🚪',_0x2ef164(0x1eb),'🇬🇧',_0x2ef164(0x158),'🇦🇺',_0x2ef164(0x14b),_0x2ef164(0x1d2),_0x2ef164(0xe1),'👍','👎','👏','👫','👭','👬','👮','🤝','🙏','👑','🌻','🌺','🌸','🌹','🌴',_0x2ef164(0x1d0),'🌊','🚗','🚌','🛣️',_0x2ef164(0x1dd),_0x2ef164(0x159),'🚣','🛥','🚂','🚁','🚀',_0x2ef164(0x116),_0x2ef164(0x15a),_0x2ef164(0x195),_0x2ef164(0x1e9),'🎾','🏀','🏈','🎯','🏆','??','⬆️','⬇️','⇒','⇐','↩️','↪️','ℹ️','‼️','⁉️','‽️','©️','®️','™️','🔴','🔵','🟢','🔹','🔺','💯','👑','🤣',_0x2ef164(0x13a),_0x2ef164(0x1e1),_0x2ef164(0x152),'🙅‍♀️',_0x2ef164(0x1f1),'🙆‍♀️',_0x2ef164(0x208),_0x2ef164(0x16a),'🏻',_0x2ef164(0x10e),'💆‍♀️',_0x2ef164(0xf2),'🕴‍♀️',_0x2ef164(0x15d),'💇‍♀️','🚫','🚽',_0x2ef164(0x1d7),'💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','�','🏯','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽','🕳️','💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🌳','🌲','🌾','🌿','🍃','🍂','🍃','🌻','💐','🌹','🌺','🌸','🌴','🏵','🎀','🏆','🏈','🏉','🎯','🏀','🏊','🏋','🏌','🎲','📚','📖','📜','📝','💭','💬','🗣','💫','🌟','🌠','🎉','🎊','👏','💥','🔥','💥','🌪','💨','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌪','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌪','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌱','🌿','🍃','🍂','🌻','💐','🌹','🌺','🌸','🌴','🏵','🎀','🏆','🏈','🏉','🎯','🏀','🏊','🏋','🏌','🎲','📚','📖','📜','📝','💭','💬','🗣','💫','🌟','🌠','🎉','🎊','👏','💥','🔥','💥','🌪','💨','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡','🌪','🌫','🌬','🌩','🌨','🌧','🌦','🌥','🌡',_0x2ef164(0x11b),'💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🏠','🏡','🏢','🏣','🏥','🏦','🏧','🏨','🏩','🏪','🏫','🏬','🏭','🏮','🏯','🚣','🛥','🚂','🚁','🚀','🛸','🛹','🚴','🚲','🛺','🚮','🚯','🚱','🚫','🚽','🕳️','💣','🔫',_0x2ef164(0x20a),_0x2ef164(0x1c4),'💀','👻','🕺','💃',_0x2ef164(0x1b6),'👶','👵','👴','👱','👨','👩','👧','👦','👪','👫','👭','👬','👮',_0x2ef164(0x1b6),'💼','📊','📈','📉','📊','📝','📚','📰','📱','💻','📻','📺','🎬',_0x2ef164(0x16b),'📸','📷','🕯️','💡','🔦','🔧','🔨','🔩','🔪','🔫','👑','👸','🤴','👹','🤺','🤻','👺','🤼','🤽','🤾','🤿','🦁','🐴','🦊','🐺','🐼','🐾','🐿','🦄','🦅','🦆','🦇','🦈','🐳','🐋','🐟','🐠','🐡','🐙','🐚','🐜','🐝','🐞',_0x2ef164(0x20a),'🦋','🐛','🐌','🐚','🌿','🌸','💐','🌹','🌺','🌻','🌴','🏵','🏰','🐒','🦍','🦧','🐶','🐕','🦮',_0x2ef164(0x124),'🐩','🐺','🦊','🦝','🐱','🐈','🐈‍⬛','🦁','🐯','🐅','🐆','🐴','🐎','🦄','🦓','🦌','🦬','🐮','🐂','🐃','🐄','🐷','🐖','🐗','🐽','🐏','🐑','🐐','🐪','🐫','🦙','🦒','🐘','🦣','🦏','🦛','🐭','🐁','🐀','🐹','🐰','🐇',_0x2ef164(0x178),'🦫','🦔','🦇','🐻','🐻‍❄️','🐨','🐼','🦥','🦦','🦨','🦘','🦡','🐾','🦃','🐔','🐓','🐣','🐤','🐥','🐦','🐧',_0x2ef164(0x1e4),'🦅','🦆','🦢','🦉','🦤','🪶','🦩','🦚','🦜','🐸','🐊','🐢','🦎','🐍','🐲','🐉','🦕','🦖','🐳','🐋','🐬','🦭','🐟','🐠','😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','🥲','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶',_0x2ef164(0x189),'😏','😒','🙄','😬',_0x2ef164(0x121),'🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','😵‍💫','🤯','🤠','🥳','🥸','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','💋','💌','💘','💝','💖','💗','💓','💞','💕','💟','❣️','💔',_0x2ef164(0x1ed),'❤️‍🩹','❤️','🧡','💛','💚','💙','💜','🤎','🖤','🤍','💯','💢','💥','💫','💦','💨',_0x2ef164(0x1d7),'💣','💬',_0x2ef164(0x197),_0x2ef164(0xfa),_0x2ef164(0x13e),'💭','💤','👋','🤚',_0x2ef164(0x1fb),'✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🫀','🫁','🦷','🦴','👀',_0x2ef164(0xf0),'👅','👄','👶','🧒','👦','👧','🧑','👱','👨','🧔','🧔‍♂️',_0x2ef164(0xe4),'👨‍🦰',_0x2ef164(0x1fd),'👨‍🦳','👨‍🦲','👩',_0x2ef164(0x1e7),'🧑‍🦰',_0x2ef164(0xb3),_0x2ef164(0xaf),_0x2ef164(0xde),'🧑‍🦳',_0x2ef164(0xe3),_0x2ef164(0x16e),_0x2ef164(0x179),_0x2ef164(0xc3),'🧓','👴','👵','🙍',_0x2ef164(0x148),_0x2ef164(0xc5),'🙎',_0x2ef164(0x180),_0x2ef164(0x1b1),'🙅',_0x2ef164(0x152),_0x2ef164(0xd0),'🙆',_0x2ef164(0x1f1),_0x2ef164(0x1cf),'💁',_0x2ef164(0xc2),_0x2ef164(0x114),'🙋',_0x2ef164(0x15f),_0x2ef164(0xf7),'🧏',_0x2ef164(0x191),_0x2ef164(0x143),'🙇',_0x2ef164(0x1d3),'🙇‍♀️','🤦',_0x2ef164(0x208),_0x2ef164(0x16a),'🤷',_0x2ef164(0x13a),_0x2ef164(0x1e1),_0x2ef164(0x176),_0x2ef164(0x170),_0x2ef164(0x186),'🧑‍🎓',_0x2ef164(0x19a),_0x2ef164(0x10b),_0x2ef164(0x134),_0x2ef164(0x10a),_0x2ef164(0x133),'🧑‍⚖️','👨‍⚖️',_0x2ef164(0xb5),'🧑‍🌾',_0x2ef164(0x1a8),_0x2ef164(0xfd),'🧑‍🍳',_0x2ef164(0x161),_0x2ef164(0x11a),'🧑‍🔧',_0x2ef164(0x160),'👩‍🔧','🧑‍🏭',_0x2ef164(0xbc),_0x2ef164(0x1f5),'🧑‍💼','👨‍💼',_0x2ef164(0x122),_0x2ef164(0x10c),_0x2ef164(0xce),_0x2ef164(0x129),_0x2ef164(0xe9),_0x2ef164(0x173),_0x2ef164(0x15e),_0x2ef164(0x1cd),_0x2ef164(0x1d1),_0x2ef164(0x1f6),'🧑‍🎨',_0x2ef164(0xc0),_0x2ef164(0xbb),_0x2ef164(0x18e),_0x2ef164(0xd4),_0x2ef164(0x119),_0x2ef164(0x1ad),_0x2ef164(0x202),_0x2ef164(0x149),_0x2ef164(0x100),'👨‍🚒',_0x2ef164(0x1fa),'👮',_0x2ef164(0x187),_0x2ef164(0xe8),_0x2ef164(0x156),_0x2ef164(0x175),_0x2ef164(0xe5),'💂',_0x2ef164(0xda),_0x2ef164(0x1b3),'🥷','👷',_0x2ef164(0x1ee),_0x2ef164(0x1a0),'🤴','👸','👳',_0x2ef164(0x19c),_0x2ef164(0x14d),'👲','🧕','🤵',_0x2ef164(0x1a4),_0x2ef164(0x1e3),'👰',_0x2ef164(0x1c5),_0x2ef164(0xed),'🤰','🤱',_0x2ef164(0x1a1),'👨‍🍼','🧑‍🍼','👼','🎅','🤶',_0x2ef164(0xac),'🦸',_0x2ef164(0x12a),'🦸‍♀️','🦹',_0x2ef164(0x142),_0x2ef164(0x10f),'🧙',_0x2ef164(0x1b4),_0x2ef164(0xae),'🧚','🧚‍♂️','🧚‍♀️','🧛','🧛‍♂️',_0x2ef164(0x113),'🧜','🧜‍♂️',_0x2ef164(0xd9),'🧝','🧝‍♂️','🧝‍♀️','🧞',_0x2ef164(0x167),'🧞‍♀️','🧟','🧟‍♂️',_0x2ef164(0x18c),'💆',_0x2ef164(0x10e),'💆‍♀️','💇','💇‍♂️',_0x2ef164(0x12c),'🚶',_0x2ef164(0x157),_0x2ef164(0x1f4),'🧍',_0x2ef164(0x128),_0x2ef164(0x1ba),'🧎',_0x2ef164(0x17c),_0x2ef164(0x205),_0x2ef164(0x106),_0x2ef164(0xe0),_0x2ef164(0x17e),_0x2ef164(0xb8),_0x2ef164(0x196),_0x2ef164(0x166),_0x2ef164(0x1e5),_0x2ef164(0xf1),_0x2ef164(0x177),'🏃',_0x2ef164(0x116),_0x2ef164(0x1a6),'💃','🕺',_0x2ef164(0x1b6),'👯',_0x2ef164(0x1cc),'👯‍♀️','🧖','🧖‍♂️',_0x2ef164(0xb4),'🧗',_0x2ef164(0xb2),_0x2ef164(0xfb),'🤺','🏇','⛷️','🏂',_0x2ef164(0xc7),_0x2ef164(0x1a3),_0x2ef164(0x168),'🏄',_0x2ef164(0x1e9),'🏄‍♀️','🚣',_0x2ef164(0x10d),_0x2ef164(0x1da),'🏊','🏊‍♂️','🏊‍♀️','⛹️',_0x2ef164(0x18b),_0x2ef164(0x206),_0x2ef164(0x1e6),_0x2ef164(0x118),'🏋️‍♀️','🚴','🚴‍♂️','🚴‍♀️','🚵',_0x2ef164(0x14e),'🚵‍♀️','🤸',_0x2ef164(0x104),'🤸‍♀️','🤼','🤼‍♂️',_0x2ef164(0x204),'🤽',_0x2ef164(0x163),_0x2ef164(0x107),'🤾',_0x2ef164(0x20b),_0x2ef164(0x11d),'🤹','🤹‍♂️',_0x2ef164(0xf4),'🧘','🧘‍♂️',_0x2ef164(0xe7),'🛀','🛌','🧑‍🤝‍🧑','👭','👫','👬','💏',_0x2ef164(0x127),_0x2ef164(0xd2),_0x2ef164(0xdc),'💑',_0x2ef164(0xb6),_0x2ef164(0x1ea),_0x2ef164(0x1f7),'👪','👨‍👩‍👦',_0x2ef164(0x1ae),_0x2ef164(0x209),'👨‍👩‍👦‍👦','👨‍👩‍👧‍👧','👨‍👨‍👦',_0x2ef164(0xf5),'👨‍👨‍👧‍👦','👨‍👨‍👦‍👦',_0x2ef164(0xc4),'👩‍👩‍👦',_0x2ef164(0x1c6),'👩‍👩‍👧‍👦',_0x2ef164(0x1b5),_0x2ef164(0x103),_0x2ef164(0xf3),_0x2ef164(0x14f),_0x2ef164(0x154),'👨‍👧‍👦',_0x2ef164(0xf8),'👩‍👦',_0x2ef164(0x1af),_0x2ef164(0x16c),_0x2ef164(0x15c),_0x2ef164(0x200),_0x2ef164(0x1e2),'👤','👥','🫂','👣','🦰','🦱','🦳','🦲','🐵'],_0x577211=_0x15ee7e[Math['floor'](Math[_0x2ef164(0x12e)]()*_0x15ee7e[_0x2ef164(0x199)])];_0x57083e[_0x2ef164(0x13c)](_0x577211);}}if(!_0x3ad4f6&&_0x38daec!==_0x8107d){if(config[_0x2ef164(0xeb)]===_0x2ef164(0x1a2)){const _0x386f79=['💘','💝','💖','💗','💓','💞','💕','❣️','❤️‍🔥',_0x2ef164(0xad),'❤️','🩷','🧡','💛','💚','💙','🩵','💜','🤎','🖤','🩶','🤍'],_0x3caec8=_0x386f79[Math[_0x2ef164(0xca)](Math[_0x2ef164(0x12e)]()*_0x386f79['length'])];_0x57083e['react'](_0x3caec8);}}if(!_0x3ad4f6&&_0x38daec===_0x8107d){if(config['HEART_REACT']===_0x2ef164(0x1a2)){const _0x3e863a=['💘','💝','💖','💗','💓','💞','💕','❣️',_0x2ef164(0x1ed),'❤️‍🩹','❤️','🩷','🧡','💛','💚','💙','🩵','💜','🤎','🖤','🩶','🤍'],_0x27e50d=_0x3e863a[Math[_0x2ef164(0xca)](Math[_0x2ef164(0x12e)]()*_0x3e863a[_0x2ef164(0x199)])];_0x57083e['react'](_0x27e50d);}}if(!_0x18886b&&config['MODE']===_0x2ef164(0x1c8))return;if(!_0x18886b&&_0x27287b&&config[_0x2ef164(0x193)]===_0x2ef164(0x135))return;if(!_0x18886b&&_0x27287b&&config[_0x2ef164(0x193)]===_0x2ef164(0xf6))return;const _0xaed70a=require(_0x2ef164(0x17f)),_0x26f994=_0x22ae71?_0x23a920[_0x2ef164(0x17b)](0x1)[_0x2ef164(0x1cb)]()[_0x2ef164(0x1fc)]('\x20')[0x0]['toLowerCase']():![];if(_0x22ae71){const _0x195ceb=_0xaed70a[_0x2ef164(0x126)][_0x2ef164(0x1df)](_0x5d375f=>_0x5d375f[_0x2ef164(0xff)]===_0x26f994)||_0xaed70a[_0x2ef164(0x126)][_0x2ef164(0x1df)](_0x3bd473=>_0x3bd473[_0x2ef164(0x192)]&&_0x3bd473[_0x2ef164(0x192)][_0x2ef164(0xc6)](_0x26f994));if(_0x195ceb){if(_0x195ceb[_0x2ef164(0x13c)])_0x24f959['sendMessage'](_0x48a433,{'react':{'text':_0x195ceb[_0x2ef164(0x13c)],'key':_0x5d29b4[_0x2ef164(0x1b9)]}});try{_0x195ceb[_0x2ef164(0x162)](_0x24f959,_0x5d29b4,_0x57083e,{'from':_0x48a433,'quoted':_0x226926,'body':_0x23a920,'isCmd':_0x22ae71,'command':_0x28bbbc,'args':_0x3bcf44,'q':_0x1d1779,'isGroup':_0x27287b,'sender':_0x2c78e3,'senderNumber':_0x38daec,'botNumber2':_0x138ac3,'botNumber':_0x8107d,'pushname':_0x18e81a,'isMe':_0x37874a,'isOwner':_0x18886b,'groupMetadata':_0x1ef373,'groupName':_0x1852a9,'participants':_0x30837d,'groupAdmins':_0x167cd3,'isBotAdmins':_0x25db1c,'isAdmins':_0x1a7a55,'reply':_0x3c2fed});}catch(_0x3a7882){console[_0x2ef164(0x109)](_0x2ef164(0x1be)+_0x3a7882);}}}_0xaed70a[_0x2ef164(0x126)][_0x2ef164(0xee)](async _0x49136b=>{const _0x2ceeda=_0x2ef164;if(_0x23a920&&_0x49136b['on']===_0x2ceeda(0xd7))_0x49136b[_0x2ceeda(0x162)](_0x24f959,_0x5d29b4,_0x57083e,{'from':_0x48a433,'l':l,'quoted':_0x226926,'body':_0x23a920,'isCmd':_0x22ae71,'command':_0x49136b,'args':_0x3bcf44,'q':_0x1d1779,'isGroup':_0x27287b,'sender':_0x2c78e3,'senderNumber':_0x38daec,'botNumber2':_0x138ac3,'botNumber':_0x8107d,'pushname':_0x18e81a,'isMe':_0x37874a,'isOwner':_0x18886b,'groupMetadata':_0x1ef373,'groupName':_0x1852a9,'participants':_0x30837d,'groupAdmins':_0x167cd3,'isBotAdmins':_0x25db1c,'isAdmins':_0x1a7a55,'reply':_0x3c2fed});else{if(_0x5d29b4['q']&&_0x49136b['on']===_0x2ceeda(0x111))_0x49136b['function'](_0x24f959,_0x5d29b4,_0x57083e,{'from':_0x48a433,'l':l,'quoted':_0x226926,'body':_0x23a920,'isCmd':_0x22ae71,'command':_0x49136b,'args':_0x3bcf44,'q':_0x1d1779,'isGroup':_0x27287b,'sender':_0x2c78e3,'senderNumber':_0x38daec,'botNumber2':_0x138ac3,'botNumber':_0x8107d,'pushname':_0x18e81a,'isMe':_0x37874a,'isOwner':_0x18886b,'groupMetadata':_0x1ef373,'groupName':_0x1852a9,'participants':_0x30837d,'groupAdmins':_0x167cd3,'isBotAdmins':_0x25db1c,'isAdmins':_0x1a7a55,'reply':_0x3c2fed});else{if((_0x49136b['on']===_0x2ceeda(0x153)||_0x49136b['on']===_0x2ceeda(0xdd))&&_0x5d29b4[_0x2ceeda(0xc9)]===_0x2ceeda(0x1d5))_0x49136b[_0x2ceeda(0x162)](_0x24f959,_0x5d29b4,_0x57083e,{'from':_0x48a433,'l':l,'quoted':_0x226926,'body':_0x23a920,'isCmd':_0x22ae71,'command':_0x49136b,'args':_0x3bcf44,'q':_0x1d1779,'isGroup':_0x27287b,'sender':_0x2c78e3,'senderNumber':_0x38daec,'botNumber2':_0x138ac3,'botNumber':_0x8107d,'pushname':_0x18e81a,'isMe':_0x37874a,'isOwner':_0x18886b,'groupMetadata':_0x1ef373,'groupName':_0x1852a9,'participants':_0x30837d,'groupAdmins':_0x167cd3,'isBotAdmins':_0x25db1c,'isAdmins':_0x1a7a55,'reply':_0x3c2fed});else _0x49136b['on']===_0x2ceeda(0x19e)&&_0x5d29b4[_0x2ceeda(0xc9)]===_0x2ceeda(0x188)&&_0x49136b[_0x2ceeda(0x162)](_0x24f959,_0x5d29b4,_0x57083e,{'from':_0x48a433,'l':l,'quoted':_0x226926,'body':_0x23a920,'isCmd':_0x22ae71,'command':_0x49136b,'args':_0x3bcf44,'q':_0x1d1779,'isGroup':_0x27287b,'sender':_0x2c78e3,'senderNumber':_0x38daec,'botNumber2':_0x138ac3,'botNumber':_0x8107d,'pushname':_0x18e81a,'isMe':_0x37874a,'isOwner':_0x18886b,'groupMetadata':_0x1ef373,'groupName':_0x1852a9,'participants':_0x30837d,'groupAdmins':_0x167cd3,'isBotAdmins':_0x25db1c,'isAdmins':_0x1a7a55,'reply':_0x3c2fed});}}});});}app[_0xcc4ba5(0x13f)]('/',(_0x45b0e5,_0xd6f592)=>{const _0x51f2cf=_0xcc4ba5;_0xd6f592[_0x51f2cf(0xdb)](_0x51f2cf(0x1fe));}),app['listen'](port,()=>console[_0xcc4ba5(0x137)](_0xcc4ba5(0x151)+port)),setTimeout(()=>{connectToWA();},0xfa0);function _0x2427(){const _0xb9fca3=['Message','🙆‍♀️','🏞️','👨‍🎤','🇫🇷','🙇‍♂️','HASSAN-RAJPOOT-MD\x20CONNECTED\x20TO\x20WHATSAPP\x20ENJOY\x20✅','imageMessage','crypto','🕳️','🚴‍♂️','🧟‍♂️','🚣‍♀️','29722446scJbmN','sendMessage','🛫️','11065IXwpNR','find','@g.us','🤷‍♀️','🗣️','🤵‍♀️','🕊️','🧑‍🦽','🏋️','👩‍🦰','2RkXKuA','🏄‍♂️','👨‍❤️‍👨','🇺🇸','axios','❤️‍🔥','👷‍♂️','PREFIX','👨‍💼','🙆‍♂️','923154647639','./plugins/','🚶‍♀️','👩‍🏭','👩‍🎤','👩‍❤️‍👩','\x0a\x0a*[\x20•\x20\x20HASSAN-RAJPOOT-MD\x20-\x20STARTED‎\x20•\x20]*\x0a\x0a*╭┈───────────────•*\x0a\x0a*│\x20\x20◦*\x20*_Congratulations\x20Your\x20Bot\x20Active\x20Successfully_*\x0a\x0a*│\x20\x20◦*\x0a\x0a*│\x20\x20◦*\x20*❁\x20ᴊᴏɪɴ\x20ᴏᴜʀ\x20ᴡʜᴀᴛsᴀᴘᴘ\x20ᴄʜᴀɴɴᴇʟ\x20❁*\x0a\x0a*│\x20\x20◦*\x0a\x0a*│\x20\x20◦*\x20*https://whatsapp.com/channel/0029Vao1lnR1nozDF8jBNh3B*\x0a\x0a*│\x20\x20◦*\x0a\x0a*│\x20\x20◦*\x20*❁\x20ᴊᴏɪɴ\x20ᴏᴜʀ\x20ʏᴏᴜᴛᴜʙᴇ\x20ᴄʜᴀɴɴᴇʟ\x20❁*\x0a\x0a*│\x20\x20◦*\x0a\x0a*│\x20\x20◦*\x20*https://youtube.com/@hassangaming425?si=ZBMFvPdI3m6YQlw6*\x0a\x0a*╰┈───────────────•*\x0a\x0a*[\x20•\x20\x20B\x20O\x20T\x20\x20-\x20R\x20E\x20P\x20O\x20‎\x20•\x20]*\x0a\x0a*╭┈───────────────•*\x0a\x0a*│✫➠\x20-\x20🌐URL:*\x20*https://github.com/hussu71982/Hassan_Rajpoot_MD.git**\x0a\x0a*╰┈───────────────•*\x0a\x0a*YOUR\x20BOT\x20ACTIVE\x20NOW\x20ENJOY♥️🪄*\x0a\x0a*PREFIX:\x20[','STATUS_REPLY','👩‍🚒','🖐️','split','👨‍🦱','HEY,\x20HASSAN-RAJPOOT-MD\x20STARTED\x20✅','statusCode','👩‍👧‍👧','writeFile','👨‍🚀','./config','🤼‍♀️','🧎‍♀️','⛹️‍♀️','CONNECTING\x20HASSAN-RAJPOOT-MD\x20BOT🧬...','🤦‍♂️','👨‍👩‍👧‍👦','🕷️','🤾‍♂️','shift','./lib/msg','👨‍🚒','🙇‍♀️','🤸‍♀️','sendFileUrl','👩‍👩‍👧‍👦','🚴‍♀️','🧑‍🎄','❤️‍🩹','🧙‍♀️','🧑‍🦱','audio/mpeg','stringify','🧗‍♂️','👩‍🦱','🧖‍♀️','👩‍⚖️','👩‍❤️‍👨','readMessages','🧑‍🦼','fromMe','groupMetadata','👩‍🎨','👨‍🏭','open','🧑‍🍼','🧛‍♂️','👨‍🎨','👩‍👩‍👦','💁‍♂️','👱‍♂️','👨‍👨‍👧‍👧','🙍‍♀️','includes','🏌️','👨‍👨‍👦','type','floor','creds.update','🇬🇧','🐈‍⬛','👨‍🔬','remoteJid','🙅‍♀️','AUTO_REACT','👨‍❤️‍💋‍👨','924wNjxFI','👨‍✈️','videoMessage','express','body','close','🧜‍♀️','💂‍♂️','send','👩‍❤️‍💋‍👩','photo','👩‍🦳','SESSION_ID','👨‍🦯','🇪🇸','👨‍🦳','👩‍🦲','🧔‍♀️','🕵️‍♀️','participants','🧘‍♀️','👮‍♀️','🧑‍💻','user','HEART_REACT','message','👰‍♀️','map','@whiskeysockets/baileys','👁️','👨‍🦽','🕴‍♂️','👨‍👦','🤹‍♀️','👨‍👨‍👧','groups','🙋‍♀️','👨‍👧‍👧','existsSync','🗨️','🧗‍♀️','path','👩‍🌾','audio','pattern','🧑‍🚒','Please\x20add\x20your\x20session\x20to\x20SESSION_ID\x20env\x20!!','catch','👩‍👩‍👧‍👧','🤸‍♂️','🧑‍🌾','🧑‍🦯','🤽‍♀️','util','error','👨‍🏫','👩‍🎓','🧑‍🔬','🚣‍♂️','💆‍♂️','🦹‍♀️','./lib/functions','text','👩‍👦','🧛‍♀️','💁‍♀️','toLowerCase','🏃‍♂️','😵‍💫','🏋️‍♂️','👩‍✈️','👩‍🍳','🕯️','megajs','🤾‍♀️','👨‍🦲','extname','ephemeralMessage','😮‍💨','👩‍💼','download','🐕‍🦺','🐻‍❄️','commands','👩‍❤️‍💋‍👨','🧍‍♂️','👩‍🔬','🦸‍♂️','🧝‍♂️','💇‍♀️','macOS','random','🧔‍♂️','👨‍🦰','silent','body-parser','👩‍🏫','🧑‍🏫','inbox','👨‍👧‍👦','log','READ_MESSAGE','participant','🤷‍♂️','video/mp4','react','pushName','🗯️','get','@s.whatsapp.net','messages.upsert','🦹‍♂️','🧏‍♀️','PORT','endsWith','🛣️','🧘‍♂️','🙍‍♂️','👩‍🚀','startsWith','🇯🇵','🧑‍🤝‍🧑','👳‍♀️','🚵‍♂️','👨‍👦‍👦','923251869133','Server\x20listening\x20on\x20port\x20http://localhost:','🙅‍♂️','image','👨‍👧','👨‍👨‍👧‍👦','🕵️','🚶‍♂️','🇨🇦','🛬️','🏋️‍♀️','headers','👩‍👧‍👦','💇‍♂️','👩‍💻','🙋‍♂️','👨‍🔧','👨‍🍳','function','🤽‍♂️','🤹‍♂️','extendedTextMessage','👩‍🦼','🧞‍♂️','🏌️‍♀️','application/pdf','🤦‍♀️','📽️','👩‍👧','👩‍🔧','🧑‍🦲','923096287432','👨‍⚕️','Firefox','🧑‍💼','👨‍💻','💆‍♀️','🕵️‍♂️','🧑‍⚕️','👩‍🦽','🐿️','👱‍♀️','🧑‍🍳','slice','🧎‍♂️','🕴‍♀️','👩‍🦯','./command','🙎‍♂️','🧑‍⚖️','👨‍👩‍👧‍👧','🧑‍🔧','330774rwWoZX','🏄‍♀️','👩‍⚕️','👮‍♂️','stickerMessage','😶‍🌫️','video','⛹️‍♂️','🧟‍♀️','🧑‍🦳','🧑‍✈️','\x20as\x20read.','https://files.catbox.moe/h5ddpq.jpg','🧏‍♂️','alias','MODE','🏊‍♀️','🏊‍♂️','👨‍🦼','👁️‍🗨️','pino','length','👨‍🎓','🧑‍🏭','👳‍♂️','fluent-ffmpeg','sticker','796878sclwEc','👷‍♀️','👩‍🍼','true','🏌️‍♂️','🤵‍♂️','Marked\x20message\x20from\x20','🏃‍♀️','quotedMessage','👨‍🌾','loggedOut','/auth_info_baileys/','file-type','🧑‍🎨','🧑‍🚀','👨‍👩‍👧','👩‍👦‍👦','messages','🙎‍♀️','OWNER_REACT','💂‍♀️','🧙‍♂️','👩‍👩‍👦‍👦','🕴️','4204392NwmZMW','480576nlXaMT','key','🧍‍♀️','caption','wa-sticker-formatter','PLUGINS\x20FILES\x20INSTALL\x20SUCCESSFULLY\x20✅','[PLUGIN\x20ERROR]\x20','♻️\x20INSTALLING\x20PLUGINS\x20FILES\x20PLEASE\x20WAIT...\x20🪄','conversation','gif','9729867vHmubx','status@broadcast','🕸️','👰‍♂️','👩‍👩‍👧','contextInfo','private','🇦🇺','join','trim','👯‍♂️','🧑‍🎤'];_0x2427=function(){return _0xb9fca3;};return _0x2427();}
