(self.webpackChunklite=self.webpackChunklite||[]).push([[2295],{8607:(e,n,i)=>{"use strict";i.d(n,{v0:()=>d,m1:()=>r});var t=i(87329),a=i(10654),o=i(93403),l=i(36579),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewFooterSocial_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MultiVote_post"}},{kind:"Field",name:{kind:"Name",value:"allowResponses"}},{kind:"Field",name:{kind:"Name",value:"isLimitedState"}},{kind:"Field",name:{kind:"Name",value:"postResponses"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"}}]}}]}}].concat((0,t.Z)(a.x.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewFooterMenu_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"BookmarkButton_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostCardOverflowButton_post"}}]}}].concat((0,t.Z)(o.z.definitions),(0,t.Z)(l.D.definitions))},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewFooter_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewFooterSocial_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewFooterMenu_post"}}]}}].concat((0,t.Z)(d.definitions),(0,t.Z)(s.definitions))}},55047:(e,n,i)=>{"use strict";i.d(n,{A:()=>v,u:()=>N});var t=i(66604),a=i.n(t),o=i(67294),l=i(50455),d=i(78060),s=i(56804),r=i(38160),m=i(6443),c=i(77355),u=i(75221),k=i(78870),p=i(36001);function v(e){var n,i=e.post,t=e.postUrl,a=(0,k.Rk)(t,{responsesOpen:"true",sortBy:u.sV.REVERSE_CHRON});return o.createElement(o.Fragment,null,o.createElement(s.S,{post:i,buttonStyle:"SUBTLE_MARGIN",hasDialog:!0,susiEntry:"clap_footer",buttonColor:"LIGHTER",countScale:"S",shouldHideClapsText:!0,shouldShowResponsiveLabelText:!0}),o.createElement(c.x,{marginLeft:"20px"},o.createElement(r.c,{href:a,responsesCountScale:"S",trackingData:{postId:i.id},responsesCount:(null===(n=i.postResponses)||void 0===n?void 0:n.count)||null,isLimitedState:i.isLimitedState,isPublished:i.isPublished,allowResponses:i.allowResponses,countStylesOverride:{marginLeft:"4px",marginTop:"0px"}})))}function f(e){var n,i,t=e.post,a=(0,m.H)().value,s=t.collection||t.creator,r=null!==(n=null==s?void 0:s.__typename)&&void 0!==n?n:null===(i=t.creator)||void 0===i?void 0:i.__typename;return o.createElement(c.x,{alignItems:"center",display:"flex",justifyContent:"flex-end",flexShrink:"0",flexBasis:"0"},o.createElement(l.e,{post:t,susiEntry:"bookmark_preview",targetDistance:15}),r&&a&&o.createElement(c.x,{paddingLeft:"24px"},o.createElement(d.u,{post:t,publisherContext:r})))}var S={S:{flexBasis:"0",maxWidth:"56%"},M:{flexBasis:"0",maxWidth:"56%"},L:{flexBasis:"auto",maxWidth:"unset"}},N=function(e){var n=e.post,i=e.postUrl,t=e.scales,l=(0,p.L)(S,t),d=a()(l,(function(e){return e.flexBasis})),s=a()(l,(function(e){return e.maxWidth}));return o.createElement(c.x,{display:"flex",justifyContent:"space-between"},o.createElement(c.x,{alignItems:"center",display:"flex",flexGrow:"1",flexShrink:"0",padding:"0",flexBasis:d,maxWidth:s},o.createElement(v,{post:n,postUrl:i})),o.createElement(f,{post:n}))}},63009:(e,n,i)=>{"use strict";i.d(n,{u:()=>o});var t=i(87329),a=i(82864),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewInformation_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"pinnedAt"}},{kind:"Field",name:{kind:"Name",value:"latestPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"firstPublishedAt"}},{kind:"Field",name:{kind:"Name",value:"readingTime"}},{kind:"Field",name:{kind:"Name",value:"isLocked"}},{kind:"FragmentSpread",name:{kind:"Name",value:"Star_post"}}]}}].concat((0,t.Z)(a.W.definitions))}},63254:(e,n,i)=>{"use strict";i.d(n,{O:()=>s});var t=i(67294),a=i(35989),o=i(17311),l=i(48342),d=i(73279);function s(e){var n=e.post,i=n.pinnedAt&&n.latestPublishedAt?n.latestPublishedAt:n.firstPublishedAt,s=n.readingTime,r=n.isLocked,m=[];return r&&m.push(t.createElement(a.U,{post:n,hideLabelDesktop:!0,showLabelMobile:!1})),s&&m.push(t.createElement(l.K,{readingTime:s})),i&&m.push(t.createElement(o.h,{timestamp:i})),t.createElement(t.Fragment,null,m.map((function(e,n){return t.createElement(t.Fragment,{key:"post-preview-info-".concat(n)},e,n<m.length-1&&t.createElement(d.O,{margin:"0 8px"}))})))}},36001:(e,n,i)=>{"use strict";i.d(n,{Il:()=>o,L:()=>l,n0:()=>d});var t=i(67294),a=i(21755);function o(e){return t.useMemo((function(){return Object.keys(e).reduce((function(n,i){var t=e[i];return n[t]&&n[t].push(i),n}),{S:[],M:[],L:[]})}),[e])}function l(e,n){return{xs:e[n.xs],sm:e[n.sm],md:e[n.md],lg:e[n.lg],xl:e[n.xl]}}function d(e){var n={};for(var i in a.j)n[i]=e;return n}},9272:(e,n,i)=>{"use strict";i.d(n,{n:()=>C});var t=i(96156),a=i(67294),o=i(93310),l=i(30020),d=i(87691),s=i(18627),r=i(66411),m=i(14646);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},c.apply(this,arguments)}var u=a.createElement("path",{d:"M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"});const k=function(e){return a.createElement("svg",c({width:24,height:24,viewBox:"0 0 24 24"},e),u)};function p(){return p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},p.apply(this,arguments)}var v=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.47 20.27a6.08 6.08 0 0 1-4.06-1.55c-.74.2-1.51.3-2.29.3-4.48 0-8.12-3.35-8.12-7.48 0-4.15 3.64-7.5 8.12-7.5 4.48 0 8.12 3.35 8.12 7.48 0 1.98-.81 3.83-2.3 5.23.02.17.05.34.1.53.2.66.52 1.33 1 1.96a.66.66 0 0 1-.53 1.04h-.04z"});const f=function(e){return a.createElement("svg",p({width:24,height:24,viewBox:"0 0 24 24"},e),v)};function S(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function N(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?S(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var g=function(e,n){return"LIGHTER"===n?e.colorTokens.foreground.neutral.primary.hover:e.colorTokens.foreground.neutral.secondary.base},b=function(e,n){return function(i){return{cursor:n?"not-allowed":"pointer",border:0,opacity:1,padding:"4px 0",display:"flex",alignItems:"center",fill:"LIGHTER"===e?i.colorTokens.foreground.neutral.secondary.base:i.baseColor.fill.light,":hover":n?void 0:{fill:g(i,e),"& p":{color:g(i,e)}}}}},y=function(e){return{cursor:"not-allowed",fill:e.colorTokens.foreground.neutral.secondary.base,opacity:.25}},F=function(e){var n=e.disabled,i=e.handleClick,t=e.href,l=e.children,d=e.responsesCountColor,s=e.testId,r=(0,m.I)();return t?a.createElement(o.r,{onClick:i,href:t,rules:b(d,n),"aria-label":"responses",disabled:n,"data-testid":s},l):a.createElement("button",{onClick:i,className:r(b(d,n)),"aria-label":"responses",disabled:n,"data-testid":s},l)},h=function(e){var n=e.disabled,i=e.iconStylesOverride,t=(0,m.I)();return n?a.createElement(f,{className:t([y])}):a.createElement(k,{className:t([i])})},C=function(e){var n=e.disabled,i=e.disabledTooltipText,t=void 0===i?"":i,o=e.responsesCount,c=e.handleClick,u=e.trackingData,k=e.iconStylesOverride,p=e.countStylesOverride,v=e.responsesCountColor,f=void 0===v?"LIGHTER":v,S=e.responsesCountScale,g=void 0===S?"M":S,b=e.href,y=(0,m.I)(),C=(0,s.A)(),E=(0,r.pK)(),w=!n&&o,x=(0,a.useCallback)((function(e){null==c||c(e),C.event("responses.viewAllClicked",N(N({},u),{},{source:E}))}),[C,c,u,E]);return a.createElement(l._,{tooltipText:n?t:"Respond",targetDistance:15},a.createElement(F,{handleClick:n?void 0:x,responsesCountColor:f,disabled:n,href:b},a.createElement(h,{disabled:n,iconStylesOverride:k}),!!w&&a.createElement(d.F,{scale:g,color:f},a.createElement("span",{className:"pw-responses-count ".concat(y([p]))},o))))}},38160:(e,n,i)=>{"use strict";i.d(n,{c:()=>l});var t=i(22122),a=i(67294),o=i(9272),l=function(e){var n=!e.allowResponses||e.isLimitedState||!e.isPublished,i=(0,a.useMemo)((function(){return e.isPublished?e.allowResponses?e.isLimitedState?"This feature is temporarily disabled":void 0:"Responses hidden":"You cannot respond to a draft"}),[e.isPublished,e.allowResponses,e.isLimitedState]);return a.createElement(o.n,(0,t.Z)({},e,{disabled:n,disabledTooltipText:i}))}},39727:(e,n,i)=>{"use strict";i.d(n,{g:()=>l});var t=i(64718),a=i(87329),o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"collectionId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Collection_viewerEdge"}}]}}]}}]}}]}}].concat((0,a.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"Collection_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CollectionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"canEditOwnPosts"}},{kind:"Field",name:{kind:"Name",value:"canEditPosts"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMuting"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToLetters"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToMediumNewsletter"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToEmails"}},{kind:"Field",name:{kind:"Name",value:"isWriter"}}]}}]))},l=function(e){var n,i,a=(0,t.a)(o,{variables:{collectionId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),l=a.loading,d=a.error,s=a.data;return l?{loading:l}:d?{error:d}:{viewerEdge:null==s||null===(i=s.collection)||void 0===i?void 0:i.viewerEdge}}},98007:(e,n,i)=>{"use strict";i.d(n,{Os:()=>o,qU:()=>l,Vm:()=>d,GB:()=>s});var t=i(87329),a=i(20121),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_collection"}}]}}].concat((0,t.Z)(a.Hr.definitions))},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_post"}}]}}].concat((0,t.Z)(a.qt.definitions))},d=([{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_topic"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Topic"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_topic"}}]}}].concat((0,t.Z)(a.Uh.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_user"}}]}}].concat((0,t.Z)(a.Zd.definitions))}),s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_newsletterV3"}}]}}].concat((0,t.Z)(a.gs.definitions))};[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SusiClickableAccountTokenQuery"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_query"}}]}}].concat((0,t.Z)(a.Zz.definitions))},27048:(e,n,i)=>{"use strict";i.d(n,{W:()=>o});var t=i(87329),a=i(68216),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserAvatar_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"Field",name:{kind:"Name",value:"membership"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tier"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat((0,t.Z)(a.$m.definitions))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2295.fc4d4022.chunk.js.map