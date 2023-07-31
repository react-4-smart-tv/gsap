/*!
 * ScrambleTextPlugin 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GreenSock at https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

let D=/(?:^\s+|\s+$)/g;const u=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function F(D){let u=D.nodeType,C="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)C+=F(D)}else if(3===u||4===u)return D.nodeValue;return C}function C(F,C,E,e){if(F+="",E&&(F=F.trim?F.trim():F.replace(D,"")),C&&""!==C)return F.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(C);let t,n,r=[],i=F.length,s=0;for(;s<i;s++)n=F.charAt(s),(n.charCodeAt(0)>=55296&&n.charCodeAt(0)<=56319||F.charCodeAt(s+1)>=65024&&F.charCodeAt(s+1)<=65039)&&(t=((F.substr(s,12).split(u)||[])[1]||"").length||2,n=F.substr(s,t),r.emoji=1,s+=t-1),r.push(">"===n?"&gt;":"<"===n?"&lt;":!e||" "!==n||" "!==F.charAt(s-1)&&" "!==F.charAt(s+1)?n:"&nbsp;");return r}class E{constructor(D){this.chars=C(D),this.sets=[],this.length=50;for(let D=0;D<20;D++)this.sets[D]=B(80,this.chars)}grow(D){for(let u=0;u<20;u++)this.sets[u]+=B(D-this.length,this.chars);this.length=D}}let e,t,n=()=>e||"undefined"!=typeof window&&(e=window.gsap)&&e.registerPlugin&&e,r=function(){return String.fromCharCode.apply(null,arguments)},i=r(103,114,101,101,110,115,111,99,107,46,99,111,109),s=r(103,115,97,112,46,99,111,109),o=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,a=function(D){var u="undefined"!=typeof window,F=0===(u?window.location.href:"").indexOf(r(102,105,108,101,58,47,47))||-1!==D.indexOf(r(108,111,99,97,108,104,111,115,116))||o.test(D),C=[i,s,r(99,111,100,101,112,101,110,46,105,111),r(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),r(99,111,100,101,112,101,110,46,100,101,118),r(99,111,100,101,112,101,110,46,97,112,112),r(99,111,100,101,112,101,110,46,119,101,98,115,105,116,101),r(112,101,110,115,46,99,108,111,117,100),r(99,115,115,45,116,114,105,99,107,115,46,99,111,109),r(99,100,112,110,46,105,111),r(112,101,110,115,46,105,111),r(103,97,110,110,111,110,46,116,118),r(99,111,100,101,99,97,110,121,111,110,46,110,101,116),r(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),r(99,101,114,101,98,114,97,120,46,99,111,46,117,107),r(116,121,109,112,97,110,117,115,46,110,101,116),r(116,119,101,101,110,109,97,120,46,99,111,109),r(112,108,110,107,114,46,99,111),r(104,111,116,106,97,114,46,99,111,109),r(119,101,98,112,97,99,107,98,105,110,46,99,111,109),r(97,114,99,104,105,118,101,46,111,114,103),r(99,111,100,101,115,97,110,100,98,111,120,46,105,111),r(99,115,98,46,97,112,112),r(115,116,97,99,107,98,108,105,116,122,46,99,111,109),r(115,116,97,99,107,98,108,105,116,122,46,105,111),r(99,111,100,105,101,114,46,105,111),r(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),r(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),r(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),r(115,116,117,100,105,111,102,114,101,105,103,104,116,46,99,111,109),r(119,101,98,99,111,110,116,97,105,110,101,114,46,105,111),r(106,115,102,105,100,100,108,101,46,110,101,116)],E=function(){if(u)if("loading"===document.readyState||"interactive"===document.readyState)document.addEventListener("readystatechange",E);else{document.removeEventListener("readystatechange",E);var D="object"==typeof e?e:u&&window.gsap;u&&window.console&&!window._gsapWarned&&"object"==typeof D&&!1!==D.config().trialWarn&&(console.log(r(37,99,87,97,114,110,105,110,103),r(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(r(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+"ScrambleTextPlugin"+r(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(r(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),r(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)}},t=C.length;for(setTimeout(E,50);--t>-1;)if(-1!==D.indexOf(C[t]))return!0;return F||!setTimeout((function(){u&&(window.location.href=r(104,116,116,112,115,58,47,47)+i+r(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin=ScrambleTextPlugin&source=trial")}),4e3)}("undefined"!=typeof window?window.location.host:""),l=/\s+/g,B=(D,u)=>{let F=u.length,C="";for(;--D>-1;)C+=u[~~(Math.random()*F)];return C},A="ABCDEFGHIJKLMNOPQRSTUVWXYZ",h=A.toLowerCase(),c={upperCase:new E(A),lowerCase:new E(h),upperAndLowerCase:new E(A+h)},d=()=>{t=e=n()};const g={version:"3.12.2",name:"scrambleText",register(D,u,F){e=D,d()},init(D,u,e,n,r){if(t||d(),this.prop="innerHTML"in D?"innerHTML":"textContent"in D?"textContent":0,!this.prop)return;this.target=D,"object"!=typeof u&&(u={text:u});let i,s,o,B,A=u.text||u.value||"",h=!1!==u.trim,g=this;return g.delimiter=i=u.delimiter||"",g.original=C(F(D).replace(l," ").split("&nbsp;").join(""),i,h),"{original}"!==A&&!0!==A&&null!=A||(A=g.original.join(i)),g.text=C((A||"").replace(l," "),i,h),g.hasClass=!(!u.newClass&&!u.oldClass),g.newClass=u.newClass,g.oldClass=u.oldClass,B=""===i,g.textHasEmoji=B&&!!g.text.emoji,g.charsHaveEmoji=!!u.chars&&!!C(u.chars).emoji,g.length=B?g.original.length:g.original.join(i).length,g.lengthDif=(B?g.text.length:g.text.join(i).length)-g.length,g.fillChar=u.fillChar||u.chars&&~u.chars.indexOf(" ")?"&nbsp;":"",g.charSet=o=c[u.chars||"upperCase"]||new E(u.chars),g.speed=.05/(u.speed||1),g.prevScrambleTime=0,g.setIndex=20*Math.random()|0,s=g.length+Math.max(g.lengthDif,0),s>o.length&&o.grow(s),g.chars=o.sets[g.setIndex],g.revealDelay=u.revealDelay||0,g.tweenLength=!1!==u.tweenLength,g.tween=e,g.rightToLeft=!!u.rightToLeft,g._props.push("scrambleText","text"),a},render(D,u){let F,E,e,t,n,r,i,s,o,a,l,{target:B,prop:A,text:h,delimiter:c,tween:d,prevScrambleTime:g,revealDelay:p,setIndex:f,chars:m,charSet:w,length:x,textHasEmoji:j,charsHaveEmoji:b,lengthDif:T,tweenLength:v,oldClass:y,newClass:S,rightToLeft:L,fillChar:_,speed:H,original:M,hasClass:O}=u,I=h.length,P=d._time,W=P-g;p&&(d._from&&(P=d._dur-P),D=0===P?0:P<p?1e-6:P===d._dur?1:d._ease((P-p)/(d._dur-p))),D<0?D=0:D>1&&(D=1),L&&(D=1-D),F=~~(D*I+.5),D?((W>H||W<-H)&&(u.setIndex=f=(f+(19*Math.random()|0))%20,u.chars=w.sets[f],u.prevScrambleTime+=W),t=m):t=M.join(c),l=d._from?D:1-D,a=x+(v?d._from?l*l*l:1-l*l*l:1)*T,L?1!==D||!d._from&&"isFromStart"!==d.data?(i=h.slice(F).join(c),e=b?C(t).slice(0,a-(j?C(i):i).length+.5|0).join(""):t.substr(0,a-(j?C(i):i).length+.5|0),t=i):(e="",t=M.join(c)):(e=h.slice(0,F).join(c),E=(j?C(e):e).length,t=b?C(t).slice(E,a+.5|0).join(""):t.substr(E,a-E+.5|0)),O?(s=L?y:S,o=L?S:y,n=s&&0!==F,r=o&&F!==I,i=(n?"<span class='"+s+"'>":"")+e+(n?"</span>":"")+(r?"<span class='"+o+"'>":"")+c+t+(r?"</span>":"")):i=e+c+t,B[A]="&nbsp;"===_&&~i.indexOf("  ")?i.split("  ").join("&nbsp;&nbsp;"):i}};g.emojiSafeSplit=C,g.getText=F,n()&&e.registerPlugin(g);export default g;export{g as ScrambleTextPlugin};
