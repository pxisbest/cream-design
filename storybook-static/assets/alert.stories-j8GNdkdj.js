import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./iframe-BufI18ru.js";import{c as _}from"./index-DKS16l0K.js";const b=v=>{const{className:j,title:w,type:n="default",description:o,closable:S=!0,onClose:i}=v,[T,h]=E.useState(!0),q=_("alert",j,{[`alert-${n}`]:n}),C=()=>{h(!1),i&&i()};return T?e.jsxs("div",{className:q,children:[e.jsx("span",{className:"alert-title",children:w}),o&&e.jsx("p",{className:"alert-description",children:o}),S&&e.jsx("span",{className:"alert-close",onClick:C,children:"×"})]}):null};b.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"success" | "danger" | "warning" | "default"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"default"'}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const I={title:"Alert",component:b,tags:["autodocs"],parameters:{docs:{description:{component:`
页面中最常用的警告元素

---

A commonly used button element for important messages.
## 引用方法 ｜ Usage

\`\`\`js
import { Alert } from 'cream-design'
\`\`\`


`}}},argTypes:{type:{control:{type:"select"},options:["success","default","warning","error"],description:"设置 Alert 的类型"},closable:{control:{type:"boolean"},description:"是否可关闭"},onClose:{action:"closed"},className:{type:"string"}}},r={args:{title:"默认 Alert",description:"这是一个默认的 Alert 示例"}},s={args:{title:"成功 Alert",type:"success",description:"这是一个成功的 Alert 示例"}},t={args:{title:"警告 Alert",type:"warning",description:"这是一个警告的 Alert 示例"}},a={args:{title:"错误 Alert",type:"danger",description:"这是一个错误的 Alert 示例"}};var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: "默认 Alert",
    description: "这是一个默认的 Alert 示例"
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: "成功 Alert",
    type: "success",
    description: "这是一个成功的 Alert 示例"
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "警告 Alert",
    type: "warning",
    description: "这是一个警告的 Alert 示例"
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,x,N;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: "错误 Alert",
    type: "danger",
    description: "这是一个错误的 Alert 示例"
  }
}`,...(N=(x=a.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};const O=["Default","Success","Warning","Error"];export{r as Default,a as Error,s as Success,t as Warning,O as __namedExportsOrder,I as default};
