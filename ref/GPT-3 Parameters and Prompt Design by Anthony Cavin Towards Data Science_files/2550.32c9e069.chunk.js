(self.webpackChunklite=self.webpackChunklite||[]).push([[2550],{98598:(e,n,t)=>{"use strict";t.d(n,{g:()=>l});var i=t(87329),o=t(84683),a=t(19308),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat((0,i.Z)(o.d.definitions),(0,i.Z)(a.I.definitions))}},18978:(e,n,t)=>{"use strict";t.d(n,{L:()=>m});var i=t(67294),o=t(71652),a=t(82405),l=t(77355),r=t(20113),d=t(87691),c=t(21372),m=function(e){var n=e.collection,t=e.buttonSize,m=e.buttonStyleFn,s=n.name,u=n.description;return i.createElement(l.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},i.createElement(l.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"neutral.primary",paddingBottom:"10px",marginBottom:"10px"},i.createElement(l.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},i.createElement(r.X6,{scale:"S"},s),i.createElement(d.F,{scale:"S"},u)),i.createElement(l.x,null,i.createElement(o.v,{collection:n,link:!0}))),i.createElement(l.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},i.createElement(d.F,{scale:"M"},"Followed by ",(0,c.pY)(n.subscriberCount||0)," people"),i.createElement(a.F,{collection:n,buttonSize:t,buttonStyleFn:m,susiEntry:"follow_card"})))}},14524:(e,n,t)=>{"use strict";t.d(n,{xO:()=>c});var i=t(87329),o=t(89748),a=t(8994),l=t(89080),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"ExpandablePostByline_user"}}]}}].concat((0,i.Z)(o.br.definitions),(0,i.Z)(a.A.definitions))},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"}}]}}].concat((0,i.Z)(o.We.definitions),(0,i.Z)(l.W.definitions))},c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewByLine_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_user"}}]}},{kind:"Field",name:{kind:"Name",value:"collection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_collection"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"CardByline_post"}}]}}].concat((0,i.Z)(r.definitions),(0,i.Z)(d.definitions),(0,i.Z)(o.yu.definitions))}},9842:(e,n,t)=>{"use strict";t.d(n,{G:()=>r});var i=t(67294),o=t(68717),a=t(36764),l=t(77355),r=function(e){var n=e.post,t=e.showAuthor,r=void 0===t||t,d=e.showCollectionName,c=void 0===d||d,m=e.marginBottom,s=n.collection||n.creator,u="User"===(null==s?void 0:s.__typename)&&n.collection?n.collection:n.creator;return r?i.createElement(l.x,{marginBottom:m,display:"flex"},n.creator?i.createElement(a.h,{author:n.creator,collection:c?n.collection:void 0,includeAvatar:!0,includeVerifiedAuthorBadge:!0}):u&&i.createElement(o.u,{publisher:u,publishedAt:void 0,post:n,isOneLine:!0})):null}},3105:(e,n,t)=>{"use strict";t.d(n,{J:()=>l});var i=t(87329),o=t(69724),a=t(4088),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PostPreviewContainer_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"isFullContent"}}]}},{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"Field",name:{kind:"Name",value:"pinnedAt"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostScrollTracker_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"usePostUrl_post"}}]}}].concat((0,i.Z)(o.k.definitions),(0,i.Z)(a.u.definitions))}},69935:(e,n,t)=>{"use strict";t.d(n,{V:()=>k});var i=t(96156),o=t(67294),a=t(25145),l=t(77355),r=t(66411),d=t(14646),c=t(68821),m=t(13663);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e){var n=e.post,t=e.index,i=e.presentationTrackerReferrerSource,s=e.children,p=e.isFullHeight,k=u(u({},(0,r.Lk)()),{},{index:t}),v=(0,a.D)()(n),f=o.useRef(null);(0,c.V)(f,n);var g=n.pinnedAt,S=n.extendedPreviewContent,w=!(null==S||!S.isFullContent),F=(0,d.I)(),N=p?"100%":void 0;return o.createElement(r.cW,{source:k},o.createElement("article",{className:F({height:N})},o.createElement(l.x,{boxSizing:"content-box",height:N},o.createElement(m.o,{post:u(u({},n),{},{previewContent:{isFullContent:w}}),presentationContext:"POST_PREVIEW",isDisplayingFullPost:w,suppressedEvents:w?"VIEWED":void 0,shouldReportClientViewed:!1,reportClientViewedOnFullPost:!0,postClientViewedContext:2,pinned:!!g,referrerSource:i},o.createElement(l.x,{ref:f,height:N},s({postUrl:v}))))))}var k=(0,o.memo)(p,(function(e,n){return e.post.id===n.post.id&&e.index===n.index}))},35558:(e,n,t)=>{"use strict";t.d(n,{w:()=>m});var i=t(87329),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreviewImage_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"StreamPostPreviewImage_imageMetadata"}}]}}]}}].concat((0,i.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreviewImage_imageMetadata"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ImageMetadata"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"focusPercentX"}},{kind:"Field",name:{kind:"Name",value:"focusPercentY"}},{kind:"Field",name:{kind:"Name",value:"alt"}}]}}]))},a=t(8607),l=t(14524),r=t(63009),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreviewContent_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"previewImage"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"Field",name:{kind:"Name",value:"extendedPreviewContent"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subtitle"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"StreamPostPreviewImage_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewFooter_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewByLine_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewInformation_post"}}]}}].concat((0,i.Z)(o.definitions),(0,i.Z)(a.m1.definitions),(0,i.Z)(l.xO.definitions),(0,i.Z)(r.u.definitions))},c=t(3105),m={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"StreamPostPreview_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"StreamPostPreviewContent_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PostPreviewContainer_post"}}]}}].concat((0,i.Z)(d.definitions),(0,i.Z)(c.J.definitions))}},26058:(e,n,t)=>{"use strict";t.d(n,{j:()=>P});var i=t(67294),o=t(66604),a=t.n(o),l=t(77355),r=t(93310),d=t(18634),c=t(52069),m=t(90586),s=t(87691),u=t(97480),p=t(31889),k=t(36001),v={S:"24px",M:"32px",L:"32px"};function f(e){var n=e.scales,t=e.dividerColor,o=(0,p.F)(),a=(0,k.L)(v,n);return i.createElement(u.E,{marginTop:a,borderColor:null!=t?t:o.colorTokens.border.neutral.primary.base})}var g=t(4381),S=t(46696),w=function(e){return{backgroundColor:e.colorTokens.background.neutral.tertiary.base,borderRadius:"2px"}},F={S:{height:53,width:80},M:{height:53,width:80},L:{height:107,width:160}},N=function(e){var n=e.post,t=e.postUrl,o=e.scales,a=(0,k.Il)(o),l=n.previewImage,c=n.title,m=null==l?void 0:l.id;if(!m)return null;var s=l.alt||c||"";return i.createElement(r.r,{href:t,"aria-label":s||"Post Preview Image"},Object.keys(a).map((function(e){var n=a[e];return n.length?i.createElement(d.y,{xs:n.includes("xs"),sm:n.includes("sm"),md:n.includes("md"),lg:n.includes("lg"),xl:n.includes("xl"),key:"stream-image-".concat(e)},i.createElement(g.UV,{alt:s,miroId:m,width:F[e].width,height:F[e].height,strategy:S._S.Crop,focusPercentX:l.focusPercentX,focusPercentY:l.focusPercentY,rules:w})):null})))},E=t(9842),h=t(55047),y=t(63254),x={S:{footerLocation:"bottom",showSubtitle:!1,subElementSpacing:"12px",titleScale:"XS",titleClamp:2,imageMarginLeft:"24px"},M:{footerLocation:"bottom",showSubtitle:!0,subElementSpacing:"16px",titleScale:"S",titleClamp:2,imageMarginLeft:"24px"},L:{footerLocation:"content",showSubtitle:!0,subElementSpacing:"20px",titleScale:"M",titleClamp:3,imageMarginLeft:"56px"}},C=function(e){var n,t,o,u,p=e.post,v=e.postUrl,g=e.scales,S=e.showDivider,w=e.showCollectionName,F=e.showAuthor,C=e.dividerColor,b=p.title,P=null==p||null===(n=p.extendedPreviewContent)||void 0===n?void 0:n.subtitle,_=null===(t=p.previewImage)||void 0===t?void 0:t.id,D=(0,k.L)(x,g),L=a()(D,(function(e){return e.subElementSpacing})),I=a()(D,(function(e){return e.titleScale})),T=a()(D,(function(e){return e.titleClamp})),O=a()(D,(function(e){return e.imageMarginLeft}));return i.createElement(l.x,null,i.createElement(E.G,{post:p,marginBottom:L,showCollectionName:w,showAuthor:F}),i.createElement(l.x,{display:"flex"},i.createElement(l.x,{flexGrow:"1",flexShrink:"1",wordBreak:"break-word"},i.createElement(r.r,{href:v},b&&i.createElement(c.Dx,{scale:I,clamp:T},b),P&&i.createElement(d.y,{xs:D.xs.showSubtitle,sm:D.sm.showSubtitle,md:D.md.showSubtitle,lg:D.lg.showSubtitle,xl:D.xl.showSubtitle,paddingTop:"8px"},i.createElement(m.QE,{scale:"S",clamp:(o=(null==b?void 0:b.length)||0,u=!!_,u?o>104?1:o>52?2:3:o>140?1:o>70?2:3)},P))),i.createElement(r.r,{href:v},i.createElement(s.F,{scale:"S",tag:"span"},i.createElement(l.x,{display:"flex",alignItems:"center",paddingTop:L},i.createElement(y.O,{post:p})))),i.createElement(d.y,{xs:"content"===D.xs.footerLocation,sm:"content"===D.sm.footerLocation,md:"content"===D.md.footerLocation,lg:"content"===D.lg.footerLocation,xl:"content"===D.xl.footerLocation,paddingTop:"24px"},i.createElement(h.u,{post:p,postUrl:v,scales:g}))),!!_&&i.createElement(l.x,{marginLeft:O},i.createElement(N,{post:p,postUrl:v,scales:g}))),i.createElement(d.y,{xs:"bottom"===D.xs.footerLocation,sm:"bottom"===D.sm.footerLocation,md:"bottom"===D.md.footerLocation,lg:"bottom"===D.lg.footerLocation,xl:"bottom"===D.xl.footerLocation,paddingTop:"16px"},i.createElement(h.u,{post:p,postUrl:v,scales:g})),S&&i.createElement(f,{scales:g,dividerColor:C}))},b=t(69935);function P(e){var n=e.post,t=e.index,o=e.presentationTrackerReferrerSource,a=e.scale,l=e.lastIndex,r=e.showCollectionName,d=e.showAuthor,c=e.dividerColor,m="string"==typeof a?(0,k.n0)(a):a;return i.createElement(b.V,{post:n,index:t,presentationTrackerReferrerSource:o},(function(e){var o=e.postUrl;return i.createElement(C,{post:n,postUrl:o,scales:m,showDivider:t!==l,showCollectionName:r,showAuthor:d,dividerColor:c})}))}},68427:(e,n,t)=>{"use strict";t.d(n,{B:()=>r,R:()=>d});var i=t(8575),o=t(67294),a=t(43487),l=t(78870),r=function(){var e=(0,a.v9)((function(e){return e.navigation.currentLocation})),n=(0,a.v9)((function(e){return e.config.authDomain})),t=(0,l.rp)();return(0,o.useCallback)((function(o){var a=o.id,l=o.domain,r=function(e){var n=e.id,t=e.slug;return t?"/".concat(t):"/c/".concat(n)}({id:a,domain:l,slug:o.slug});if(t)return"https://".concat(n).concat(r);var d=(0,i.parse)(e).port;return l?"https://".concat(l).concat(d?":".concat(d):""):"https://".concat(n).concat(r)}),[t])},d=function(e){return r()(e)}},84683:(e,n,t)=>{"use strict";t.d(n,{d:()=>a});var i=t(87329),o=t(68216),a={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionAvatar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}].concat((0,i.Z)(o.nf.definitions))}},71652:(e,n,t)=>{"use strict";t.d(n,{v:()=>s});var i=t(67294),o=t(68427),a=t(14818),l=t(4381),r=t(27323),d=t(29746),c=t(46696),m=function(e){return function(n){return{borderRadius:(0,d.a)(n.borderRadius.regular),width:(0,d.a)(e),height:(0,d.a)(e)}}},s=function(e){var n=e.circular,t=e.collection,d=e.size,s=void 0===d?60:d,u=e.link,p=(0,o.R)(t);if(!t||!t.avatar||!t.avatar.id)return null;var k=t.avatar.id,v=t.name||"Publication avatar",f=n?i.createElement(a.z,{miroId:k,alt:v,diameter:s,freezeGifs:!1}):i.createElement(l.UV,{rules:[m(s)],miroId:k,alt:v,width:s,height:s,strategy:c._S.Crop});return u?i.createElement(r.P,{href:p},f):f}},19308:(e,n,t)=>{"use strict";t.d(n,{b:()=>l,I:()=>r});var i=t(87329),o=t(68216),a=t(98007),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat((0,i.Z)(o.nf.definitions),(0,i.Z)(a.Os.definitions))}},82405:(e,n,t)=>{"use strict";t.d(n,{F:()=>E});var i=t(34699),o=t(21919),a=t(67294),l=t(51615),r=t(77520),d=t(20297),c=t(25550),m=t(25267),s=t(39727),u=t(26350),p=t(50563),k=t(93310),v=t(77355),f=t(47230),g=t(18627),S=t(66411),w=t(92661),F=t(43487),N=t(50458),E=function(e){var n,t=e.buttonSize,N=e.buttonStyleFn,E=e.collection,y=e.post,x=e.simpleLink,C=e.susiEntry,b=void 0===C?"follow_card":C,P=e.preventParentClick,_=(0,F.v9)((function(e){return e.config.authDomain})),D=(0,c.r)().viewerId,L=(0,g.A)(),I=(0,S.pK)(),T=(0,l.TH)(),O=(0,w.$B)(T.pathname),R=null==O||null===(n=O.route)||void 0===n?void 0:n.name,B=(0,s.g)(E),Z=B.viewerEdge,U=B.loading,A=function(e,n){var t=(0,o.D)(d.e),l=(0,i.Z)(t,1)[0];return a.useCallback((function(){return l({variables:{id:e.id},optimisticResponse:{followCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!0}}},update:function(t){t.modify({id:"User:".concat(n),fields:{missionControl:(0,p.im)("followedCollections",!0),followingCollectionConnection:(0,p.Hc)(e.id)}})}})}),[e.id])}(E,D),V=function(e,n){var t=(0,o.D)(d.X),l=(0,i.Z)(t,1)[0];return a.useCallback((function(){return l({variables:{id:e.id},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,p.im)("followedCollections",!1)}})}})}),[e.id])}(E,D),j=a.useCallback((function(e){P&&e.preventDefault(),L.event("collection.followed",{collectionId:E.id,followSource:I}),A()}),[E,P,I,L]),M=a.useCallback((function(e){P&&e.preventDefault(),L.event("collection.unfollowed",{collectionId:E.id,followSource:I}),V()}),[P,I,L]),z=!(null==Z||!Z.isFollowing),X=N?N(!!z):z?"OBVIOUS":"STRONG";return x?a.createElement(k.r,{onClick:z?M:j},a.createElement(v.x,{display:"flex",flexDirection:"row"},z?"Unfollow publication":"Follow publication")):a.createElement(m.I,null,(function(e){return e?a.createElement(f.zx,{size:t,onClick:z?M:j,buttonStyle:X,loading:U},z?"Following":"Follow"):a.createElement(u.R,{collection:E,buttonStyle:z?"OBVIOUS":"STRONG",isButton:!0,buttonSize:"REGULAR",operation:"register",actionUrl:h(_,E,y)||"",susiEntry:b,pageSource:(0,r.x)(R,"register")},z?"Following":"Follow")}))},h=function(e,n,t){return n.slug&&(t&&t.id?(0,N.TA)(e,n.slug,t.id):(0,N.Ll)(e,n.slug))}},89080:(e,n,t)=>{"use strict";t.d(n,{W:()=>l});var i=t(87329),o=t(68216),a=t(98598),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionLinkWithPopover_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}].concat((0,i.Z)(o.nf.definitions),(0,i.Z)(a.g.definitions))}},26700:(e,n,t)=>{"use strict";t.d(n,{q:()=>m});var i=t(67294),o=t(18978),a=t(68427),l=t(69992),r=t(93310),d=t(30020),c=t(87691),m=function(e){var n=e.collection,t=e.clamp,m=e.popoverPlacement,s=void 0===m?"bottom":m,u=e.scale,p=void 0===u?"M":u,k=e.testId,v=(0,a.R)(n);return i.createElement(l.$,{placement:s,targetDistance:10,mouseLeaveDelay:100,mouseEnterDelay:d.w,popoverRenderFn:function(){return i.createElement(o.L,{collection:n})}},i.createElement(r.r,{inline:!0,href:v,linkStyle:"SUBTLE",display:"flex",rules:{alignItems:"center"},"data-testid":k},i.createElement(c.F,{scale:p,color:"DARKER",clamp:t},n.name)))}},36764:(e,n,t)=>{"use strict";t.d(n,{h:()=>f});var i=t(67294),o=t(84739),a=t(65968),l=t(64238),r=t(26700),d=t(17193),c=t(28695),m=t(77355),s=t(69992),u=t(93310),p=t(30020),k=t(87691),v=function(e){var n=e.author;return(0,l.o)(n)?i.createElement(m.x,{marginLeft:"2px",marginTop:"2px"},i.createElement(a._,{size:"S"})):null},f=function(e){var n,t=(0,o.I)()(e.author),a=(0,i.useCallback)((function(){return e.author&&i.createElement(c.K,{user:e.author})}),[e.author]);return i.createElement(i.Fragment,null,e.includeAvatar&&i.createElement(m.x,{marginRight:"8px"},i.createElement(s.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:p.w,placement:"top",role:"tooltip",popoverRenderFn:a},i.createElement(u.r,{href:t},i.createElement(d.Yt,{scale:"XXXS",user:e.author,showHoverState:!0})))),i.createElement(m.x,{paddingRight:"4px"},i.createElement(s.$,{targetDistance:15,mouseLeaveDelay:100,mouseEnterDelay:p.w,placement:"top",role:"tooltip",popoverRenderFn:a},i.createElement(u.r,{href:t,linkStyle:"SUBTLE",inline:!0,display:"flex",rules:{alignItems:"center"}},i.createElement(k.F,{scale:"S",color:"DARKER",clamp:1},e.author.name),e.includeVerifiedAuthorBadge&&i.createElement(v,{author:e.author})))),(null===(n=e.collection)||void 0===n?void 0:n.name)&&i.createElement(i.Fragment,null,i.createElement(m.x,{paddingRight:"4px"},i.createElement(k.F,{scale:"S",color:"LIGHTER"},"in")),i.createElement(m.x,null,i.createElement(r.q,{collection:e.collection,clamp:1,popoverPlacement:"top",scale:"S"}))))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2550.32c9e069.chunk.js.map