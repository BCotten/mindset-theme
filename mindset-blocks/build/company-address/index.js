(()=>{"use strict";var e,o={145:()=>{const e=window.wp.blocks,o=window.wp.i18n,r=window.wp.blockEditor,s=window.wp.coreData,t=window.wp.components,n=window.ReactJSXRuntime,i=JSON.parse('{"UU":"mindset-blocks/company-address"}');(0,e.registerBlockType)(i.UU,{edit:function({attributes:e,setAttributes:i}){const[a,c]=(0,s.useEntityProp)("postType","page","meta",34),{company_address:l}=a,{svgIcon:d}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("address",{...(0,r.useBlockProps)(),children:[d&&(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",role:"img","aria-label":"Location Icon",children:(0,n.jsx)("path",{d:"M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z"})}),(0,n.jsx)(r.RichText,{placeholder:(0,o.__)("Enter address here...","mindset-blocks"),tagName:"p",value:l,onChange:e=>{return o="company_address",r=e,void c({...a,[o]:r});var o,r}})]}),(0,n.jsx)(r.InspectorControls,{children:(0,n.jsx)(t.PanelBody,{title:(0,o.__)("Settings","mindset-blocks"),children:(0,n.jsx)(t.PanelRow,{children:(0,n.jsx)(t.ToggleControl,{label:(0,o.__)("Show SVG Icon","mindset-blocks"),checked:d,onChange:e=>i({svgIcon:e}),help:(0,o.__)("Display an SVG icon next to the address.","mindset-blocks")})})})})]})}})}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return o[e](n,n.exports,s),n.exports}s.m=o,e=[],s.O=(o,r,t,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,t,n]=e[d],a=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(s.O).every((e=>s.O[e](r[c])))?r.splice(c--,1):(a=!1,n<i&&(i=n));if(a){e.splice(d--,1);var l=t();void 0!==l&&(o=l)}}return o}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,t,n]},s.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={762:0,190:0};s.O.j=o=>0===e[o];var o=(o,r)=>{var t,n,[i,a,c]=r,l=0;if(i.some((o=>0!==e[o]))){for(t in a)s.o(a,t)&&(s.m[t]=a[t]);if(c)var d=c(s)}for(o&&o(r);l<i.length;l++)n=i[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=globalThis.webpackChunkcopyright_date=globalThis.webpackChunkcopyright_date||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var t=s.O(void 0,[190],(()=>s(145)));t=s.O(t)})();