import{j as m}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BE9v4gsJ.js";import{c as E}from"./index-yjI3i6yx.js";const S=N=>{const{className:_,disabled:a=!1,size:i,btnType:e="default",children:c,href:p,...l}=N,d=E("btn",_,{[`btn-${e}`]:e,[`btn-${i}`]:i,disabled:e==="link"&&a});return e==="link"&&p?m.jsx("a",{className:d,href:p,...l,children:c}):m.jsx("button",{className:d,disabled:a,...l,children:c})};S.__docgenInfo={description:"",methods:[],displayName:"Button"};const A={title:"Button",component:S,tags:["autodocs"],parameters:{docs:{description:{component:"\n页面中最常用的按钮元素，适合用于完成特定的交互，支持 HTML `<button>` 和 `<a>` 链接的所有属性。\n\n---\n\nA commonly used button element for performing specific interactions.  Supports all properties of HTML `<button>` and `<a>` elements.\n## 引用方法 ｜ Usage\n\n```js\nimport { Button } from 'cream-design'\n```\n\n\n"}}},argTypes:{btnType:{control:{type:"select"},options:["primary","default","danger","link"],description:"设置 Button 的类型"},size:{control:{type:"select"},options:["lg","sm"]},disabled:{control:{type:"boolean"}},href:{control:{type:"text"}},children:{control:{type:"text"}},onClick:{action:"clicked"}}},r={args:{btnType:"primary",size:"lg",children:"Primary Button"},parameters:{docs:{description:{story:"一个基础的 Primary 按钮示例。"}}}},t={args:{btnType:"default",size:"sm",children:"Default Button"}},n={args:{btnType:"danger",children:"Danger Button"}},s={args:{btnType:"link",href:"https://storybook.js.org",children:"Link Button"}},o={args:{btnType:"link",href:"https://storybook.js.org",disabled:!0,children:"Disabled Link"}};var u,y,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    btnType: "primary",
    size: "lg",
    children: "Primary Button"
  },
  parameters: {
    docs: {
      description: {
        story: "一个基础的 Primary 按钮示例。"
      }
    }
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,f,h;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    btnType: "default",
    size: "sm",
    children: "Default Button"
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var k,T,B;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    btnType: "danger",
    children: "Danger Button"
  }
}`,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var D,L,j;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    btnType: "link",
    href: "https://storybook.js.org",
    children: "Link Button"
  }
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var x,P,z;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    btnType: "link",
    href: "https://storybook.js.org",
    disabled: true,
    children: "Disabled Link"
  }
}`,...(z=(P=o.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};const C=["Primary","Default","Danger","Link","DisabledLink"];export{n as Danger,t as Default,o as DisabledLink,s as Link,r as Primary,C as __namedExportsOrder,A as default};
