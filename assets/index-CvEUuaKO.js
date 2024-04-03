import{o as t,c as r,a as o,r as T,d as h,F as m,b as C,n as y,e as R,t as i,f,s as V,g as L,h as g,i as b,u as _,j as k,k as N,l as B,m as S,p as v,w,q as P}from"./index-bjcj1r9E.js";import{_ as M}from"./InputDefault.vue_vue_type_script_setup_true_lang-G6OYz5Fb.js";const j=(l,e)=>{const s=l.__vccOpts||l;for(const[a,c]of e)s[a]=c;return s},z={},D={class:"w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right"},F={class:"bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"};function A(l,e){return t(),r("table",D,[o("thead",F,[T(l.$slots,"thead")]),o("tbody",null,[T(l.$slots,"tbody")])])}const I=j(z,[["render",A]]),O=h({__name:"TableHeadColumns",props:{columns:{}},setup(l){return(e,s)=>(t(),r("tr",null,[(t(!0),r(m,null,C(e.columns,(a,c)=>(t(),r("th",{key:c,class:y([a.classTh,"px-6 py-3"]),style:R(a.styleTh),scope:"col"},i(a.title),7))),128))]))}}),U=h({__name:"TextCell",props:{text:{default:""}},setup(l){return(e,s)=>(t(),r("div",null,[o("span",null,i(e.text),1)]))}}),Z={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#00ffbf",viewBox:"0 0 24 24"},q=o("path",{fill:"#00ffbf","fill-rule":"evenodd",d:"M12 7a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L12 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 7Z","clip-rule":"evenodd"},null,-1),E=[q];function H(l,e){return t(),r("svg",Z,[...E])}const G={render:H},J={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#e0005a",transform:"rotate(180)",viewBox:"0 0 24 24"},K=o("path",{fill:"#e0005a","fill-rule":"evenodd",d:"M12 7a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L12 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 7Z","clip-rule":"evenodd"},null,-1),Q=[K];function W(l,e){return t(),r("svg",J,[...Q])}const X={render:W},Y=h({__name:"ComparedRateCell",props:{currentValue:{default:0},previousValue:{default:0}},setup(l){const e=l,s=f(()=>V(e.currentValue,e.previousValue,6)),a=f(()=>s.value>0),c=f(()=>s.value<0);return(d,p)=>(t(),r("div",null,[o("div",{class:y(["flex items-center justify-between space-x-2",{"text-red-500":c.value,"text-green-500":a.value}])},[L(i(s.value)+" ",1),(t(),g(b(a.value?_(G):_(X)),{class:"w-[20px]"}))],2)]))}}),ee=h({__name:"CurrencyRateCell",props:{nominal:{default:0},value:{default:0},charCodeLeft:{default:""},charCodeRight:{default:""}},setup(l){return(e,s)=>(t(),r("div",null,[o("div",null,i(e.nominal)+" "+i(e.charCodeLeft)+" - "+i(e.value)+" "+i(e.charCodeRight),1)]))}}),te={class:"border-b bg-white dark:border-gray-700 dark:bg-gray-800"},ae=h({__name:"TableRow",props:{columns:{},item:{},getCellValue:{type:Function,default:()=>({})}},setup(l){const e={TextCell:U,ComparedRateCell:Y,CurrencyRateCell:ee},s=a=>e[a]??e.TextCell;return(a,c)=>(t(),r("tr",te,[(t(!0),r(m,null,C(a.columns,(d,p)=>(t(),r("td",{key:p,class:y([d.classTd,"px-6 py-4"]),style:R(d.styleTd),scope:"row"},[(t(),g(b(s(d.component)),k(N(a.getCellValue(p,a.item))),null,16))],6))),128))]))}}),le={class:"relative overflow-x-auto p-[20px] w-full"},re={class:"relative overflow-x-auto w-full"},oe=h({__name:"CurrencyListPage",setup(l){const e=B(""),s=u=>e.value=u,a=S(),c=f(()=>e.value?d.value.filter(u=>u.Name.toLowerCase().includes(e.value.toLowerCase())||u.CharCode.toLowerCase().includes(e.value.toLowerCase())):d.value),d=f(()=>Object.values(a.getCurrencies)),p={currencyCode:{title:"code",classTh:[],styleTh:{},classTd:["font-medium","text-gray-900","dark:text-white"],styleTd:{},component:"TextCell"},currencyName:{title:"name",classTh:[],styleTh:{},classTd:["font-medium","text-gray-900","dark:text-white"],styleTd:{},component:"TextCell"},currencyRate:{title:"rate",classTh:[],styleTh:{},classTd:[],styleTd:{},component:"CurrencyRateCell"},currencyRateReversed:{title:"",classTh:[],styleTh:{},classTd:[],styleTd:{},component:"CurrencyRateCell"},exchangeRate:{title:"Compare",classTh:[],styleTh:{},classTd:[],styleTd:{},component:"ComparedRateCell"}},$=(u,n)=>{switch(u){case"currencyCode":return{text:n.CharCode};case"currencyName":return{text:n.Name};case"currencyRate":return{nominal:n.Nominal,value:n.Value,charCodeLeft:n.CharCode,charCodeRight:"RUB"};case"currencyRateReversed":return{nominal:1,value:P(n.Nominal,n.Value,4),charCodeLeft:"RUB",charCodeRight:n.CharCode};case"exchangeRate":return{currentValue:n.Value,previousValue:n.Previous};default:return{text:String(n[u])}}};return(u,n)=>(t(),r(m,null,[o("div",le,[v(_(M),{placeholder:"Search currency",value:e.value,onInput:s},null,8,["value"])]),o("div",re,[v(_(I),null,{thead:w(()=>[v(_(O),{columns:p})]),tbody:w(()=>[(t(!0),r(m,null,C(c.value,x=>(t(),g(_(ae),{key:x.ID,item:x,columns:p,getCellValue:$},null,8,["item"]))),128))]),_:1})])],64))}});export{oe as default};
