import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-BE9v4gsJ.js";import{I as P,f as z}from"./index-BlufA3De.js";import{I as U}from"./input-D0X5Jajn.js";import{c as Y}from"./index-yjI3i6yx.js";const Z=(t,r=300)=>{const[n,o]=a.useState(t);return a.useEffect(()=>{const l=setTimeout(()=>{o(t)},r);return()=>{clearTimeout(l)}},[t,r]),n},F=(t,r)=>{a.useEffect(()=>{const n=o=>{!t.current||t.current.contains(o.target)||r(o)};return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}},[t,r])},E=t=>{const{fetchSuggestions:r,onSelect:n,value:o,renderOption:l,...R}=t,[S,y]=a.useState(()=>typeof o=="string"?o:""),[i,u]=a.useState([]),[k,v]=a.useState(!1),[m,b]=a.useState(-1),h=a.useRef(!1),w=a.useRef(null);F(w,()=>{u([])});const f=Z(S,500);a.useEffect(()=>{if(f&&h.current){const e=r(f);e instanceof Promise?(v(!0),e.then(c=>{v(!1),u(c)})):u(e)}else u([]);b(-1)},[f]);const q=e=>{const c=e.target.value.trim();y(c),h.current=!0},T=e=>{y(e.value),u([]),n&&n(e.value),h.current=!1},D=e=>{e<0&&(e=0),e>=i.length&&(e=i.length-1),b(e)},G=e=>{switch(e.key){case"Enter":T(i[m]);break;case"ArrowUp":D(m-1);break;case"ArrowDown":D(m+1);break;case"Escape":u([]);break}},N=e=>l?l(e):e.value,V=()=>s.jsx("ul",{className:"cream-suggestion-list",children:i.map((e,c)=>{const _=Y("suggestion-item",{"is-active":c===m});return s.jsx("li",{className:_,onClick:()=>T(e),children:N(e)},c)})});return s.jsxs("div",{className:"cream-auto-complete",ref:w,children:[s.jsx(U,{value:S,onChange:q,onKeyDown:G,...R}),k&&s.jsx("ul",{className:"cream-suggestion-list",children:s.jsx("li",{className:"suggstions-loading-icon",children:s.jsx(P,{icon:z,spin:!0})})}),i.length>0&&V()]})};E.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{value:{required:!1,tsType:{name:"string"},description:""},fetchSuggestions:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  str: string
) => DataSourceType<T>[] | Promise<DataSourceType<T>[]>`,signature:{arguments:[{type:{name:"string"},name:"str"}],return:{name:"union",raw:"DataSourceType<T>[] | Promise<DataSourceType<T>[]>",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType<T>[]"},{name:"Promise",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType<T>[]"}],raw:"Promise<DataSourceType<T>[]>"}]}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: string) => void",signature:{arguments:[{type:{name:"string"},name:"item"}],return:{name:"void"}}},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType<T>) => React.ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:""}},composes:["Omit"]};const p={args:{placeholder:"输入水果名",fetchSuggestions:t=>["apple","banana","cherry","tangerine","grape","lemon"].filter(n=>n.toLowerCase().includes(t.toLowerCase())).map(n=>({value:n}))}},g={args:{placeholder:"搜索 Glass Animals 的歌曲",fetchSuggestions:t=>[{value:"Heat Waves",album:"Dreamland"},{value:"Gooey",album:"ZABA"},{value:"Youth",album:"How to Be a Human Being"},{value:"Your Love (Déjà Vu)",album:"Dreamland"},{value:"Life Itself",album:"How to Be a Human Being"},{value:"Hazey",album:"ZABA"}].filter(n=>n.value.toLowerCase().includes(t.toLowerCase())),renderOption:t=>s.jsxs("div",{style:{padding:"4px 0"},children:[s.jsx("strong",{children:t.value}),s.jsxs("p",{style:{margin:0,fontSize:"12px",color:"#888"},children:["专辑：",t.album]})]})}},ee={title:"AutoComplete",component:E,tags:["autodocs"],parameters:{docs:{description:{component:`
输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择

---

AutoComplete input field.
Use it when you need to suggest options based on user input.
Supports both synchronous and asynchronous suggestions.
Inherits all props from the Input component.
Supports keyboard selection.
## 引用方法 ｜ Usage

\`\`\`js
import { Autocomplete } from 'cream-design'
\`\`\`


`}}}},K=t=>fetch(`https://api.github.com/search/users?q=${t}`).then(r=>r.json()).then(({items:r})=>r.slice(0,10).map(n=>({value:n.login,login:n.login,url:n.html_url,avatar_url:n.avatar_url}))),W=t=>s.jsxs("div",{style:{padding:"4px 0"},children:[s.jsx("strong",{children:t.value}),s.jsx("p",{style:{margin:0,fontSize:"12px",color:"#888"},children:t.url})]}),d={args:{placeholder:"搜索 GitHub 用户",fetchSuggestions:K,renderOption:W}};var j,x,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: "输入水果名",
    fetchSuggestions: query => {
      const fruits = ["apple", "banana", "cherry", "tangerine", "grape", "lemon"];
      return fruits.filter(item => item.toLowerCase().includes(query.toLowerCase())).map(str => ({
        value: str
      }));
    }
  }
}`,...(A=(x=p.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var C,L,H;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: "搜索 Glass Animals 的歌曲",
    fetchSuggestions: (query: string) => {
      const songs = [{
        value: "Heat Waves",
        album: "Dreamland"
      }, {
        value: "Gooey",
        album: "ZABA"
      }, {
        value: "Youth",
        album: "How to Be a Human Being"
      }, {
        value: "Your Love (Déjà Vu)",
        album: "Dreamland"
      }, {
        value: "Life Itself",
        album: "How to Be a Human Being"
      }, {
        value: "Hazey",
        album: "ZABA"
      }];
      return songs.filter(item => item.value.toLowerCase().includes(query.toLowerCase()));
    },
    renderOption: item => <div style={{
      padding: "4px 0"
    }}>
        <strong>{item.value}</strong>
        <p style={{
        margin: 0,
        fontSize: "12px",
        color: "#888"
      }}>
          专辑：{item.album}
        </p>
      </div>
  }
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var O,B,I;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    placeholder: "搜索 GitHub 用户",
    fetchSuggestions: handleFetch,
    renderOption
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const te=["BasicSearch","CustomRenderSearch","GithubUserSearch"];export{p as BasicSearch,g as CustomRenderSearch,d as GithubUserSearch,te as __namedExportsOrder,ee as default};
