const _0x21de35=_0x43f7;(function(_0x3e5ece,_0xd5fede){const _0x25a570=_0x43f7,_0x296313=_0x3e5ece();while(!![]){try{const _0x364dbf=parseInt(_0x25a570(0x19a))/0x1*(parseInt(_0x25a570(0x1d3))/0x2)+-parseInt(_0x25a570(0x1b9))/0x3*(parseInt(_0x25a570(0x1c3))/0x4)+parseInt(_0x25a570(0x17e))/0x5+parseInt(_0x25a570(0x1a2))/0x6*(parseInt(_0x25a570(0x1f2))/0x7)+-parseInt(_0x25a570(0x167))/0x8+parseInt(_0x25a570(0x1cc))/0x9*(-parseInt(_0x25a570(0x1e3))/0xa)+-parseInt(_0x25a570(0x1ac))/0xb*(-parseInt(_0x25a570(0x17a))/0xc);if(_0x364dbf===_0xd5fede)break;else _0x296313['push'](_0x296313['shift']());}catch(_0x1dc893){_0x296313['push'](_0x296313['shift']());}}}(_0x3495,0x5a1ea));import{allSongs}from'../songs/songs.js';const urlKey=window['location']['search'],urlParams=new URLSearchParams(urlKey),urlParamId=urlParams[_0x21de35(0x1ab)]('songId');let selectedSong=allSongs[_0x21de35(0x168)](_0x5de352=>_0x5de352['id']===urlParamId),metaDescription=document[_0x21de35(0x1b3)]('meta[name=\x22description\x22]'),description='Bağlama\x20ile\x20'+selectedSong[_0x21de35(0x18d)]+_0x21de35(0x1c8)+selectedSong[_0x21de35(0x1e1)]+_0x21de35(0x1bb)+selectedSong[_0x21de35(0x18d)]+_0x21de35(0x183)+selectedSong[_0x21de35(0x18d)]+_0x21de35(0x1d9);metaDescription[_0x21de35(0x181)]=description;const notes=['Al',_0x21de35(0x186),_0x21de35(0x1fd),'Bl','Cl',_0x21de35(0x192),'C#l','Dl',_0x21de35(0x1ad),_0x21de35(0x1be),'El','Fl',_0x21de35(0x1b8),'F#l','Gl','Abl','Ab2l','Am',_0x21de35(0x1d1),_0x21de35(0x1db),'Bm','Cm',_0x21de35(0x1da),_0x21de35(0x17c),'Dm',_0x21de35(0x1ee),_0x21de35(0x1a3),'Em','Fm',_0x21de35(0x173),_0x21de35(0x193),'Gm','Abm','Ab2m','Ah','Bbh',_0x21de35(0x1d7),'Bh','Ch',_0x21de35(0x1ce),'C#h','Dh',_0x21de35(0x1d4),'Eb2h','Eh','Fh',_0x21de35(0x185),_0x21de35(0x1bf),'Gh',_0x21de35(0x1d5),_0x21de35(0x1f8),'-','|',':|','|:',':|:'],noteNames=['La',_0x21de35(0x164),'Si&flat;<sup>2</sup>','Si','Do',_0x21de35(0x1a0),'Do&sharp;','Re',_0x21de35(0x1cd),_0x21de35(0x1c4),'Mi','Fa',_0x21de35(0x1f4),_0x21de35(0x1e2),_0x21de35(0x199),_0x21de35(0x179),'La&flat;<sup>2</sup>','La',_0x21de35(0x164),'Si&flat;<sup>2</sup>','Si','Do','Do&sharp;<sup>3</sup>',_0x21de35(0x16e),'Re',_0x21de35(0x1cd),_0x21de35(0x1c4),'Mi','Fa',_0x21de35(0x1f4),'Fa&sharp;','Sol',_0x21de35(0x179),_0x21de35(0x196),'La',_0x21de35(0x164),_0x21de35(0x16f),'Si','Do',_0x21de35(0x1a0),_0x21de35(0x16e),'Re','Mi&flat;',_0x21de35(0x1c4),'Mi','Fa','Fa&sharp;<sup>3</sup>',_0x21de35(0x1e2),_0x21de35(0x199),_0x21de35(0x179),_0x21de35(0x196),'-','|',':|','|:',_0x21de35(0x174)];let audioAl=new Audio(_0x21de35(0x165)),audioBbl=new Audio(_0x21de35(0x1c6)),audioBb2l=new Audio(_0x21de35(0x1c6)),audioBl=new Audio(_0x21de35(0x175)),audioCl=new Audio(_0x21de35(0x1a7)),audioCs3l=new Audio('http://www.freesound.org/data/previews/39/39176_35187-lq.mp3'),audioCsl=new Audio('http://www.freesound.org/data/previews/39/39176_35187-lq.mp3'),audioDl=new Audio('http://www.freesound.org/data/previews/39/39177_35187-lq.mp3'),audioEbl=new Audio('http://www.freesound.org/data/previews/39/39178_35187-lq.mp3'),audioEb2l=new Audio(_0x21de35(0x1f1)),audioEl=new Audio(_0x21de35(0x201)),audioFl=new Audio('http://www.freesound.org/data/previews/39/39180_35187-lq.mp3'),audioFs3l=new Audio(_0x21de35(0x189)),audioFsl=new Audio(_0x21de35(0x189)),audioGl=new Audio('https://cdn.freesound.org/previews/717/717204_15530819-lq.mp3'),audioAbl=new Audio(_0x21de35(0x1fa)),audioAb2l=new Audio(_0x21de35(0x200)),audioA=new Audio(_0x21de35(0x18c)),audioBb=new Audio(_0x21de35(0x1af)),audioBb2=new Audio(_0x21de35(0x178)),audioB=new Audio(_0x21de35(0x1a5)),audioC=new Audio(_0x21de35(0x16c)),audioCs3=new Audio(_0x21de35(0x1cb)),audioCs=new Audio(_0x21de35(0x17b)),audioD=new Audio(_0x21de35(0x1bd)),audioEb=new Audio(_0x21de35(0x171)),audioEb2=new Audio('https://cdn.freesound.org/previews/717/717197_15530819-lq.mp3'),audioE=new Audio(_0x21de35(0x1f9)),audioF=new Audio(_0x21de35(0x1c7)),audioFs3=new Audio(_0x21de35(0x1e6)),audioFs=new Audio('https://cdn.freesound.org/previews/717/717201_15530819-lq.mp3'),audioG=new Audio('https://cdn.freesound.org/previews/717/717203_15530819-lq.mp3'),audioAb=new Audio(_0x21de35(0x1f3)),audioAb2=new Audio(_0x21de35(0x177)),audioAh=new Audio('https://cdn.freesound.org/previews/717/717180_15530819-lq.mp3'),audioBbh=new Audio('https://cdn.freesound.org/previews/717/717185_15530819-lq.mp3'),audioBb2h=new Audio('https://cdn.freesound.org/previews/717/717184_15530819-lq.mp3'),audioBh=new Audio(_0x21de35(0x1a8)),audioCh=new Audio(_0x21de35(0x1ed)),audioCs3h=new Audio('https://cdn.freesound.org/previews/717/717191_15530819-lq.mp3'),audioCsh=new Audio(_0x21de35(0x1ef)),audioDh=new Audio(_0x21de35(0x1ea)),audioEbh=new Audio(_0x21de35(0x182)),audioEb2h=new Audio('https://cdn.freesound.org/previews/717/717198_15530819-lq.mp3'),audioEh=new Audio(_0x21de35(0x1cf)),audioFh=new Audio(_0x21de35(0x1b4)),audioFs3h=new Audio(_0x21de35(0x17f)),audioFsh=new Audio(_0x21de35(0x17f)),audioGh=new Audio(_0x21de35(0x1e4)),audioAbh=new Audio('http://www.freesound.org/data/previews/39/39208_35187-lq.mp3'),audioAb2h=new Audio(_0x21de35(0x1d6)),audioSilence=new Audio(_0x21de35(0x1eb));const audioFiles=[audioAl,audioBbl,audioBb2l,audioBl,audioCl,audioCs3l,audioCsl,audioDl,audioEbl,audioEb2l,audioEl,audioFl,audioFs3l,audioFsl,audioGl,audioAbl,audioAb2l,audioA,audioBb,audioBb2,audioB,audioC,audioCs3,audioCs,audioD,audioEb,audioEb2,audioE,audioF,audioFs3,audioFs,audioG,audioAb,audioAb2,audioAh,audioBbh,audioBb2h,audioBh,audioCh,audioCs3h,audioCsh,audioDh,audioEbh,audioEb2h,audioEh,audioFh,audioFs3h,audioFsh,audioGh,audioAbh,audioAb2h,audioSilence];let intervalID=0x0,selectedBeat=0x0,indexOfNoteInNotes=0x0,repeatBegin=0x0,applyRepeat=!![];function playSong(){const _0x2b29a9=_0x21de35;clearInterval(intervalID),audioFiles[indexOfNoteInNotes]['pause'](),audioFiles[indexOfNoteInNotes][_0x2b29a9(0x180)]=0x0,document[_0x2b29a9(0x1e0)](_0x2b29a9(0x1ff))[_0x2b29a9(0x18e)](function(_0x2959eb){const _0x552ca1=_0x2b29a9;_0x2959eb[_0x552ca1(0x17d)][_0x552ca1(0x166)](_0x552ca1(0x1b2));}),document[_0x2b29a9(0x1e0)]('.frets-container\x20button')['forEach'](function(_0x3f3575){const _0x2dd6fb=_0x2b29a9;_0x3f3575[_0x2dd6fb(0x17d)][_0x2dd6fb(0x166)]('selected-fret-visible');}),document[_0x2b29a9(0x1e0)]('.long-frets-container\x20button')[_0x2b29a9(0x18e)](function(_0x920d76){const _0x35d264=_0x2b29a9;_0x920d76[_0x35d264(0x17d)][_0x35d264(0x166)](_0x35d264(0x1dc));});let _0x3f8520=selectedSong[_0x2b29a9(0x176)][selectedBeat];_0x3f8520==='|'&&(selectedBeat++,_0x3f8520=selectedSong[_0x2b29a9(0x176)][selectedBeat]);_0x3f8520==='|:'&&(selectedBeat++,repeatBegin=selectedBeat,applyRepeat=!![]);if(_0x3f8520===':|'){if(applyRepeat===!![])selectedBeat=repeatBegin,applyRepeat=![];else selectedBeat++;}_0x3f8520===_0x2b29a9(0x174)&&(applyRepeat===!![]?(selectedBeat=repeatBegin,applyRepeat=![]):(selectedBeat++,repeatBegin=selectedBeat,applyRepeat=!![]));_0x3f8520=selectedSong[_0x2b29a9(0x176)][selectedBeat];if(selectedBeat===selectedSong[_0x2b29a9(0x176)][_0x2b29a9(0x1f7)]){selectedBeat=0x0,repeatBegin=0x0,applyRepeat=!![];return;}indexOfNoteInNotes=notes['indexOf'](_0x3f8520),audioFiles[indexOfNoteInNotes][_0x2b29a9(0x1b0)](),document[_0x2b29a9(0x1b3)](_0x2b29a9(0x1d0)+selectedBeat)['classList']['add']('selected-note-highlight'),_0x3f8520!=='-'&&(document[_0x2b29a9(0x1b3)]('.frets-container\x20.fret-'+indexOfNoteInNotes)[_0x2b29a9(0x17d)][_0x2b29a9(0x1ca)](_0x2b29a9(0x1dc)),document['querySelector'](_0x2b29a9(0x191)+indexOfNoteInNotes)[_0x2b29a9(0x17d)]['add'](_0x2b29a9(0x1dc))),intervalID=setInterval(playSong,selectedSong[_0x2b29a9(0x19e)][selectedBeat]*0xea60/(selectedSong[_0x2b29a9(0x169)]*tempo)),selectedBeat++;}const buttonPlay=document[_0x21de35(0x1b3)](_0x21de35(0x1ec));buttonPlay[_0x21de35(0x1e9)](_0x21de35(0x1c2),playSong);const buttonPause=document[_0x21de35(0x1b3)]('.js-button-pause');buttonPause[_0x21de35(0x1e9)]('click',function(){clearInterval(intervalID);});const buttonStop=document['querySelector'](_0x21de35(0x197));buttonStop[_0x21de35(0x1e9)](_0x21de35(0x1c2),stopPlayback);function stopPlayback(){const _0x3ed370=_0x21de35;clearInterval(intervalID),selectedBeat=0x0,repeatBegin=0x0,applyRepeat=!![],document[_0x3ed370(0x1e0)]('.js-note')['forEach'](function(_0x586098){const _0x18ec39=_0x3ed370;_0x586098[_0x18ec39(0x17d)]['remove']('selected-note-highlight');}),document['querySelectorAll'](_0x3ed370(0x16a))[_0x3ed370(0x18e)](function(_0xdf133b){const _0x2abbce=_0x3ed370;_0xdf133b['classList'][_0x2abbce(0x166)]('selected-fret-visible');}),document[_0x3ed370(0x1e0)](_0x3ed370(0x1e8))[_0x3ed370(0x18e)](function(_0x594974){const _0x23f50b=_0x3ed370;_0x594974[_0x23f50b(0x17d)][_0x23f50b(0x166)](_0x23f50b(0x1dc));});}document['querySelector']('.main-title')[_0x21de35(0x1bc)]=selectedSong[_0x21de35(0x18d)];let symbols=['\x20','&#8857',_0x21de35(0x1fb),_0x21de35(0x19b),'&#9475;.','&#9485;','&#9485;.','&#9489;',_0x21de35(0x187),_0x21de35(0x1ba),'&#9557;'],beatValues=[0x0,0x3,0x2,0x1,0x3/0x2,0x1/0x2,0x3/0x4,0x1/0x15,0x1/0x4,0x3/0x8,0x1/0x29];function writeBeatValues(_0xf3ed0b){const _0x48cd6c=_0x21de35;let _0x2bce00=beatValues[_0x48cd6c(0x1c5)](_0xf3ed0b);return symbols[_0x2bce00];}function writeNotes(_0x101cc4,_0x3aad18){const _0x21396c=_0x21de35;let _0x17dd78=document[_0x21396c(0x1b3)](_0x21396c(0x1c9))['innerHTML'],_0x5509c4=notes[_0x21396c(0x1c5)](_0x101cc4),_0x352a8c=_0x21396c(0x19f)+writeBeatValues(selectedSong['beats'][_0x3aad18])+_0x21396c(0x188)+_0x3aad18+_0x21396c(0x190)+noteNames[_0x5509c4]+'</div><div\x20class=lyrics>'+selectedSong[_0x21396c(0x1f0)][_0x3aad18]+_0x21396c(0x19c);_0x17dd78=_0x17dd78+_0x352a8c,document[_0x21396c(0x1b3)](_0x21396c(0x1c9))[_0x21396c(0x1bc)]=_0x17dd78;}selectedSong[_0x21de35(0x176)][_0x21de35(0x18e)](writeNotes);function selectNoteToPlay(_0xca57d4,_0x8e7222){const _0x86c330=_0x21de35;document[_0x86c330(0x1b3)](_0x86c330(0x1d0)+_0x8e7222)[_0x86c330(0x1e9)](_0x86c330(0x1c2),function(){const _0x45e7fd=_0x86c330;selectedBeat=_0x8e7222;let _0x14f8b2=selectedSong[_0x45e7fd(0x176)][selectedBeat];indexOfNoteInNotes=notes[_0x45e7fd(0x1c5)](_0x14f8b2),document[_0x45e7fd(0x1e0)](_0x45e7fd(0x1ff))['forEach'](function(_0x560927){const _0x5bb9ed=_0x45e7fd;_0x560927[_0x5bb9ed(0x17d)][_0x5bb9ed(0x166)](_0x5bb9ed(0x1b2));}),document[_0x45e7fd(0x1b3)]('.js-note-'+selectedBeat)[_0x45e7fd(0x17d)][_0x45e7fd(0x1ca)](_0x45e7fd(0x1b2)),document[_0x45e7fd(0x1e0)](_0x45e7fd(0x16a))[_0x45e7fd(0x18e)](function(_0x2a298f){const _0x38e490=_0x45e7fd;_0x2a298f[_0x38e490(0x17d)]['remove'](_0x38e490(0x1dc));}),document[_0x45e7fd(0x1e0)]('.long-frets-container\x20button')['forEach'](function(_0x42c21d){const _0xae61a1=_0x45e7fd;_0x42c21d[_0xae61a1(0x17d)][_0xae61a1(0x166)](_0xae61a1(0x1dc));}),document[_0x45e7fd(0x1b3)](_0x45e7fd(0x1b5)+indexOfNoteInNotes)[_0x45e7fd(0x17d)][_0x45e7fd(0x1ca)]('selected-fret-visible'),document[_0x45e7fd(0x1b3)](_0x45e7fd(0x191)+indexOfNoteInNotes)[_0x45e7fd(0x17d)][_0x45e7fd(0x1ca)]('selected-fret-visible');});}selectedSong['notes']['forEach'](selectNoteToPlay),document[_0x21de35(0x1b3)](_0x21de35(0x1dd))[_0x21de35(0x1bc)]='(Kaynak:\x20<a\x20href=\x22'+selectedSong['notation']+_0x21de35(0x194)+selectedSong['notation']+_0x21de35(0x1c0);function _0x43f7(_0x5ad5b4,_0x1cd160){const _0x34953f=_0x3495();return _0x43f7=function(_0x43f7c2,_0x430672){_0x43f7c2=_0x43f7c2-0x164;let _0x440336=_0x34953f[_0x43f7c2];return _0x440336;},_0x43f7(_0x5ad5b4,_0x1cd160);}function _0x3495(){const _0x2da4d6=['\x20notaları,\x20','main-part-sticky','F#3h','Bbl','&#9554;','</div><div\x20class=\x22js-note-','http://www.freesound.org/data/previews/39/39181_35187-lq.mp3','scrollTop','.title','https://cdn.freesound.org/previews/717/717175_15530819-lq.mp3','title','forEach','subtitle-shrinked','\x20js-note\x22>\x20','.long-frets-container\x20.fret-','C#3l','F#m','\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x20noreferrer\x22>','tempo-value','La&flat;<sup>2</sup>','.js-button-stop','oninput','Sol','341xQrZoe','&#9475;','</div></div>','<embed\x20src=\x22','beats','<div\x20class=\x22each-beat\x22><div\x20class=\x22beat-values\x22>','Do&sharp;<sup>3</sup>','nav-shrinked','446538WSRCTg','Eb2m','.notation','https://cdn.freesound.org/previews/717/717181_15530819-lq.mp3','short-neck','http://www.freesound.org/data/previews/39/39175_35187-lq.mp3','https://cdn.freesound.org/previews/717/717186_15530819-lq.mp3','fullLyrics','.full-lyrics','get','407osJjTu','Ebl','.baglama-keyboard','https://cdn.freesound.org/previews/717/717182_15530819-lq.mp3','play','getElementById','selected-note-highlight','querySelector','http://www.freesound.org/data/previews/39/39205_35187-lq.mp3','.frets-container\x20.fret-','.subtitle','Hız:\x20','F#3l','65526KNKLxr','&#9554;.','\x20nasıl\x20çalınır?\x20','innerHTML','https://cdn.freesound.org/previews/719/719281_15530819-lq.mp3','Eb2l','F#h','</a>)','notation','click','44pMaCgE','Mi&flat;<sup>2</sup>','indexOf','http://www.freesound.org/data/previews/39/39173_35187-lq.mp3','https://cdn.freesound.org/previews/717/717200_15530819-lq.mp3','\x20türküsü\x20nasıl\x20çalınır?\x20','.beats-notes-lyrics','add','https://cdn.freesound.org/previews/717/717190_15530819-lq.mp3','62091aIWqHE','Mi&flat;','C#3h','https://cdn.freesound.org/previews/717/717199_15530819-lq.mp3','.js-note-','Bbm','hide-section','1574TZGvBQ','Ebh','Abh','http://www.freesound.org/data/previews/39/39208_35187-lq.mp3','Bb2h','offsetTop','\x20türküsü\x20sözleri','C#3m','Bb2m','selected-fret-visible','.notation-link','onscroll','title-shrinked','querySelectorAll','secondTitle','Fa&sharp;','610DAOhtg','http://www.freesound.org/data/previews/39/39207_35187-lq.mp3','.long-baglama-keyboard','https://cdn.freesound.org/previews/717/717202_15530819-lq.mp3','.main-part','.long-frets-container\x20button','addEventListener','https://cdn.freesound.org/previews/717/717194_15530819-lq.mp3','https://cdn.freesound.org/previews/472/472955_6142149-lq.mp3','.js-button-play','https://cdn.freesound.org/previews/717/717188_15530819-lq.mp3','Ebm','https://cdn.freesound.org/previews/717/717192_15530819-lq.mp3','lyrics','http://www.freesound.org/data/previews/39/39178_35187-lq.mp3','21HgfOdp','https://cdn.freesound.org/previews/717/717176_15530819-lq.mp3','Fa&sharp;<sup>3</sup>','banner-shrinked','body','length','Ab2h','https://cdn.freesound.org/previews/717/717195_15530819-lq.mp3','https://cdn.freesound.org/previews/717/717179_15530819-lq.mp3','&#183','value','Bb2l','logo-shrinked','.js-note','https://cdn.freesound.org/previews/717/717178_15530819-lq.mp3','http://www.freesound.org/data/previews/39/39179_35187-lq.mp3','Si&flat;','http://www.freesound.org/data/previews/39/39172_35187-lq.mp3','remove','3249232XXpFQD','find','tempo','.frets-container\x20button','.logo','https://cdn.freesound.org/previews/717/717187_15530819-lq.mp3','\x22\x20type=\x22text/html\x22\x20height=\x22760px\x22\x20width=\x22500px\x22/>','Do&sharp;','Si&flat;<sup>2</sup>','nav','https://cdn.freesound.org/previews/717/717196_15530819-lq.mp3','long-neck','F#3m',':|:','http://www.freesound.org/data/previews/39/39174_35187-lq.mp3','notes','https://cdn.freesound.org/previews/717/717177_15530819-lq.mp3','https://cdn.freesound.org/previews/717/717183_15530819-lq.mp3','La&flat;','257604SkKhEk','https://cdn.freesound.org/previews/717/717189_15530819-lq.mp3','C#m','classList','752350SmAImR','http://www.freesound.org/data/previews/39/39206_35187-lq.mp3','currentTime','content','https://cdn.freesound.org/previews/717/717198_15530819-lq.mp3'];_0x3495=function(){return _0x2da4d6;};return _0x3495();}function showNotation(_0x2c0056){const _0x1f3494=_0x21de35;let _0x5d8450=document[_0x1f3494(0x1b3)](_0x1f3494(0x1a4))[_0x1f3494(0x1bc)],_0xb91b1a=_0x1f3494(0x19d)+_0x2c0056[_0x1f3494(0x1c1)]+_0x1f3494(0x16d);_0x5d8450=_0x5d8450+_0xb91b1a,document['querySelector'](_0x1f3494(0x1a4))[_0x1f3494(0x1bc)]=_0x5d8450;}showNotation(selectedSong),document[_0x21de35(0x1b3)](_0x21de35(0x1aa))[_0x21de35(0x1bc)]=selectedSong[_0x21de35(0x1a9)];let tempoSelector=document[_0x21de35(0x1b1)]('js-tempo-selector'),output=document[_0x21de35(0x1b1)](_0x21de35(0x195));output[_0x21de35(0x1bc)]=_0x21de35(0x1b7)+tempoSelector[_0x21de35(0x1fc)]+'%';let tempo=tempoSelector['value']/0x64;tempoSelector[_0x21de35(0x198)]=function(){const _0x59054e=_0x21de35;tempo=tempoSelector[_0x59054e(0x1fc)]/0x64,output[_0x59054e(0x1bc)]=_0x59054e(0x1b7)+this['value']+'%';};let shortNeckSelector=document[_0x21de35(0x1b1)](_0x21de35(0x1a6));shortNeckSelector['oninput']=function(){const _0x26af6b=_0x21de35;shortNeckSelector[_0x26af6b(0x1fc)]===_0x26af6b(0x1a6)&&(document[_0x26af6b(0x1b3)](_0x26af6b(0x1ae))[_0x26af6b(0x17d)][_0x26af6b(0x166)]('hide-section'),document['querySelector'](_0x26af6b(0x1e5))['classList'][_0x26af6b(0x1ca)](_0x26af6b(0x1d2)));};let longNeckSelector=document[_0x21de35(0x1b1)](_0x21de35(0x172));longNeckSelector[_0x21de35(0x198)]=function(){const _0x3e962a=_0x21de35;longNeckSelector[_0x3e962a(0x1fc)]==='long-neck'&&(document[_0x3e962a(0x1b3)](_0x3e962a(0x1ae))[_0x3e962a(0x17d)][_0x3e962a(0x1ca)](_0x3e962a(0x1d2)),document[_0x3e962a(0x1b3)]('.long-baglama-keyboard')[_0x3e962a(0x17d)][_0x3e962a(0x166)](_0x3e962a(0x1d2)));},window[_0x21de35(0x1de)]=function(){stickyMainPart(),scrollFunction();};let mainPart=document[_0x21de35(0x1b3)](_0x21de35(0x1e7)),sticky=mainPart[_0x21de35(0x1d8)]-0x60;function stickyMainPart(){const _0x329f47=_0x21de35;window['pageYOffset']>=sticky?mainPart['classList']['add'](_0x329f47(0x184)):mainPart[_0x329f47(0x17d)][_0x329f47(0x166)]('main-part-sticky');}function scrollFunction(){const _0x5aa55c=_0x21de35;document[_0x5aa55c(0x1f6)][_0x5aa55c(0x18a)]>0x40||document['documentElement'][_0x5aa55c(0x18a)]>0x40?(document['querySelector']('.banner')[_0x5aa55c(0x17d)][_0x5aa55c(0x1ca)](_0x5aa55c(0x1f5)),document[_0x5aa55c(0x1b3)](_0x5aa55c(0x16b))[_0x5aa55c(0x17d)][_0x5aa55c(0x1ca)](_0x5aa55c(0x1fe)),document[_0x5aa55c(0x1b3)](_0x5aa55c(0x18b))[_0x5aa55c(0x17d)][_0x5aa55c(0x1ca)](_0x5aa55c(0x1df)),document[_0x5aa55c(0x1b3)]('.subtitle')[_0x5aa55c(0x17d)][_0x5aa55c(0x1ca)]('subtitle-shrinked'),document[_0x5aa55c(0x1b3)](_0x5aa55c(0x170))[_0x5aa55c(0x17d)][_0x5aa55c(0x1ca)]('nav-shrinked')):(document[_0x5aa55c(0x1b3)]('.banner')[_0x5aa55c(0x17d)][_0x5aa55c(0x166)](_0x5aa55c(0x1f5)),document[_0x5aa55c(0x1b3)](_0x5aa55c(0x16b))[_0x5aa55c(0x17d)][_0x5aa55c(0x166)](_0x5aa55c(0x1fe)),document['querySelector'](_0x5aa55c(0x18b))[_0x5aa55c(0x17d)][_0x5aa55c(0x166)](_0x5aa55c(0x1df)),document[_0x5aa55c(0x1b3)](_0x5aa55c(0x1b6))['classList']['remove'](_0x5aa55c(0x18f)),document[_0x5aa55c(0x1b3)](_0x5aa55c(0x170))[_0x5aa55c(0x17d)][_0x5aa55c(0x166)](_0x5aa55c(0x1a1)));}