import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{h as b}from"./index-BlufA3De.js";import{I as n}from"./input-D0X5Jajn.js";import"./iframe-BE9v4gsJ.js";import"./index-yjI3i6yx.js";const A={title:"Input",component:n,decorators:[r=>e.jsx("div",{style:{width:300,padding:20,border:"1px dashed #eee"},children:e.jsx(r,{})})],tags:["autodocs"],parameters:{docs:{description:{component:`
Input 输入框，通过鼠标或键盘输入内容，是最基础的表单域的包装，支持 HTMLInput 的所有基本属性。

---

A basic Input element.
## 引用方法 ｜ Usage

\`\`\`js
import { Input } from 'cream-design'
\`\`\`


`}}},argTypes:{onChange:{action:"changed"},size:{control:{type:"radio",options:["sm",void 0,"lg"]}},disabled:{control:{type:"boolean"},description:"是否禁用输入框"},icon:{control:{type:"text"},description:"输入框前的图标，使用 FontAwesome 图标库"},prepend:{control:{type:"text"},description:"输入框前缀，可以是文本或 React 元素"},append:{control:{type:"text"},description:"输入框后缀，可以是文本或 React 元素"}}},s={args:{placeholder:"Type something..."}},t={args:{placeholder:"禁用状态",disabled:!0}},o={args:{placeholder:"带图标输入",icon:b},parameters:{docs:{description:{story:"通过 `icon` 属性传入图标 (FontAwesome) "}}}},a={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,size:"sm",placeholder:"小号输入",style:{marginBottom:16}}),e.jsx(n,{...r,placeholder:"默认输入",style:{marginBottom:16}}),e.jsx(n,{...r,size:"lg",placeholder:"大号输入"})]}),args:{},parameters:{docs:{description:{story:"可以通过 `size` 属性设置输入框的大小 (sm / lg) "}}}},p={render:r=>e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,prepend:"@",placeholder:"用户名",style:{marginBottom:16}}),e.jsx(n,{...r,append:".00",placeholder:"价格"})]}),args:{},parameters:{docs:{description:{story:"使用 `prepend` 和 `append` 属性设置前缀和后缀"}}}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Type something..."
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    placeholder: "禁用状态",
    disabled: true
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,I;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: "带图标输入",
    icon: faSearch
  },
  parameters: {
    docs: {
      description: {
        story: "通过 \`icon\` 属性传入图标 (FontAwesome) "
      }
    }
  }
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var x,y,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <>
        <Input {...args} size="sm" placeholder="小号输入" style={{
      marginBottom: 16
    }} />
        <Input {...args} placeholder="默认输入" style={{
      marginBottom: 16
    }} />
        <Input {...args} size="lg" placeholder="大号输入" />
      </>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "可以通过 \`size\` 属性设置输入框的大小 (sm / lg) "
      }
    }
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,S,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <>
        <Input {...args} prepend="@" placeholder="用户名" style={{
      marginBottom: 16
    }} />
        <Input {...args} append=".00" placeholder="价格" />
      </>,
  args: {},
  parameters: {
    docs: {
      description: {
        story: "使用 \`prepend\` 和 \`append\` 属性设置前缀和后缀"
      }
    }
  }
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};const T=["DefaultInput","DisabledInput","InputWithIcon","InputWithDifferentSizes","InputWithPrefixSuffix"];export{s as DefaultInput,t as DisabledInput,a as InputWithDifferentSizes,o as InputWithIcon,p as InputWithPrefixSuffix,T as __namedExportsOrder,A as default};
