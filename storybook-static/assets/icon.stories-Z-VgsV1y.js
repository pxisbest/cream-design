import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BE9v4gsJ.js";import{I as n,a as d,b as x,c as l,d as h,e as o,g,f as a}from"./index-BlufA3De.js";import"./index-yjI3i6yx.js";const j={title:"Icon",tags:["autodocs"],component:n,parameters:{docs:{description:{component:`
提供了一套常用的图标集合，基于 [react-fontawesome](https://github.com/FortAwesome/react-fontawesome#basic)。

支持 \`react-fontawesome\` 的所有属性，可在官方文档查询。

支持 FontAwesome 的所有 \`free-solid-icons\`，可以在这里查看所有图标：
[FontAwesome 图标集合](https://fontawesome.com/icons?d=gallery&s=solid&m=free)

**引用方法：**
\`\`\`ts
import { Icon } from 'cream-design';
\`\`\`
        `}}},argTypes:{onClick:{action:"clicked"},theme:{description:"支持框架主题，根据主题显示不同的颜色。\n可选值：`primary` | `secondary` | `success` | `info` | `warning` | `danger` | `light` | `dark`",control:!1}}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(n,{icon:d,theme:"primary",size:"2x"}),e.jsx(n,{icon:x,theme:"success",size:"2x"}),e.jsx(n,{icon:l,theme:"warning",size:"2x"}),e.jsx(n,{icon:h,theme:"danger",size:"2x"}),e.jsx(n,{icon:o,theme:"info",size:"2x"}),e.jsx(n,{icon:g,theme:"dark",size:"2x"}),e.jsx(n,{icon:o,theme:"light",size:"2x"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[e.jsx(n,{icon:a,theme:"info",size:"3x",spin:!0}),e.jsx(n,{icon:a,theme:"warning",pulse:!0,size:"3x"})]})};var r,t,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center"
  }}>
      <Icon icon={faGhost} theme="primary" size="2x" />
      <Icon icon={faCheckCircle} theme="success" size="2x" />
      <Icon icon={faExclamationTriangle} theme="warning" size="2x" />
      <Icon icon={faFire} theme="danger" size="2x" />
      <Icon icon={faCoffee} theme="info" size="2x" />
      <Icon icon={faGamepad} theme="dark" size="2x" />
      <Icon icon={faCoffee} theme="light" size="2x" />
    </div>
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var m,f,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "32px",
    alignItems: "center"
  }}>
      <Icon icon={faSpinner} theme="info" size="3x" spin />
      <Icon icon={faSpinner} theme="warning" pulse size="3x" />
    </div>
}`,...(p=(f=i.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const w=["IconsWithDifferentThemes","IconsWithDifferentBehaviors"];export{i as IconsWithDifferentBehaviors,s as IconsWithDifferentThemes,w as __namedExportsOrder,j as default};
