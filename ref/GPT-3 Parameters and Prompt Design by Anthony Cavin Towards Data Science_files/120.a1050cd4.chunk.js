(self.webpackChunklite=self.webpackChunklite||[]).push([[120],{92300:(e,a,i)=>{"use strict";i.d(a,{Z:()=>n});var r=i(24262),s=i(69119),t=i(13882),o=864e5;function n(e,a){(0,t.Z)(2,arguments);var i=(0,s.Z)(e),n=(0,s.Z)(a),u=i.getTime()-(0,r.Z)(i),l=n.getTime()-(0,r.Z)(n);return Math.round((u-l)/o)}},67803:(e,a,i)=>{"use strict";i.d(a,{Z:()=>n});var r=i(19013),s=i(92300),t=i(13882);function o(e,a){var i=e.getFullYear()-a.getFullYear()||e.getMonth()-a.getMonth()||e.getDate()-a.getDate()||e.getHours()-a.getHours()||e.getMinutes()-a.getMinutes()||e.getSeconds()-a.getSeconds()||e.getMilliseconds()-a.getMilliseconds();return i<0?-1:i>0?1:i}function n(e,a){(0,t.Z)(2,arguments);var i=(0,r.Z)(e),n=(0,r.Z)(a),u=o(i,n),l=Math.abs((0,s.Z)(i,n));i.setDate(i.getDate()-u*l);var c=u*(l-(o(i,n)===-u));return 0===c?0:c}},76972:(e,a,i)=>{"use strict";i.d(a,{Z:()=>o});var r=i(59910),s=i(13882),t=36e5;function o(e,a){(0,s.Z)(2,arguments);var i=(0,r.Z)(e,a)/t;return i>0?Math.floor(i):Math.ceil(i)}},59910:(e,a,i)=>{"use strict";i.d(a,{Z:()=>t});var r=i(19013),s=i(13882);function t(e,a){(0,s.Z)(2,arguments);var i=(0,r.Z)(e),t=(0,r.Z)(a);return i.getTime()-t.getTime()}},69119:(e,a,i)=>{"use strict";i.d(a,{Z:()=>t});var r=i(19013),s=i(13882);function t(e){(0,s.Z)(1,arguments);var a=(0,r.Z)(e);return a.setHours(0,0,0,0),a}},23450:function(e){e.exports=function(){var e=[],a=[],i={},r={},s={};function t(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(a[0],(function(i,r){var s,t,n=(s=a[1],t=arguments,s.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""})));return o(""===i?e[r-1]:i,n)}))}function u(e,a,r){if(!e.length||i.hasOwnProperty(e))return a;for(var s=r.length;s--;){var t=r[s];if(t[0].test(a))return n(a,t)}return a}function l(e,a,i){return function(r){var s=r.toLowerCase();return a.hasOwnProperty(s)?o(r,s):e.hasOwnProperty(s)?o(r,e[s]):u(s,r,i)}}function c(e,a,i,r){return function(r){var s=r.toLowerCase();return!!a.hasOwnProperty(s)||!e.hasOwnProperty(s)&&u(s,s,i)===s}}function h(e,a,i){return(i?a+" ":"")+(1===a?h.singular(e):h.plural(e))}return h.plural=l(s,r,e),h.isPlural=c(s,r,e),h.singular=l(r,s,a),h.isSingular=c(r,s,a),h.addPluralRule=function(a,i){e.push([t(a),i])},h.addSingularRule=function(e,i){a.push([t(e),i])},h.addUncountableRule=function(e){"string"!=typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):i[e.toLowerCase()]=!0},h.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),s[e]=a,r[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["whiskey","whiskies"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|tlas|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/(m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/(m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i,"$1"],[/(analy|ba|diagno|parenthe|progno|synop|the|empha|cri)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","alcohol","ammo","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","flounder","fun","gallows","garbage","graffiti","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","manga","news","pike","plankton","pliers","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","species","staff","swine","tennis","traffic","transporation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/120.a1050cd4.chunk.js.map