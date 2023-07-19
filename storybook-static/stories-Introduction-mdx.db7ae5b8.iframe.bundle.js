"use strict";(globalThis.webpackChunkqingfeng_ui=globalThis.webpackChunkqingfeng_ui||[]).push([[799],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);const MDXContext=react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0___default().useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/stories/Introduction.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Introduction});__webpack_require__("./node_modules/react/index.js");var jsx_dev_runtime=__webpack_require__("./node_modules/react/jsx-dev-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d71f1a3ba28d2461481dce689b.svg";const colors=__webpack_require__.p+"static/media/colors.a4bd0486703b41f28ac9ef49d8046942.svg";const comments=__webpack_require__.p+"static/media/comments.a38590896b951b65e7ada9af32d6915d.svg";const direction=__webpack_require__.p+"static/media/direction.b770f9af5f20abac0352e73b4676bba2.svg";const flow=__webpack_require__.p+"static/media/flow.edad2ac1b0bb28e0ce513d5b7a65f8fe.svg";const assets_plugin=__webpack_require__.p+"static/media/plugin.d494b22808806ebe8ff4c5b276819e72.svg";const repo=__webpack_require__.p+"static/media/repo.6d4963229d067828d1326ea3f60f5136.svg";const stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb33e1e5daf57e0cf575f818e65.svg";function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_dev_runtime.jsxDEV)(jsx_dev_runtime.Fragment,{children:[(0,jsx_dev_runtime.jsxDEV)(dist.h_,{title:"Component/Introduction"},void 0,!1,{fileName:"<source.js>",lineNumber:11,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)("style",{children:"\n    .subheading {\n      --mediumdark: '#999999';\n      font-weight: 700;\n      font-size: 13px;\n      color: #999;\n      letter-spacing: 6px;\n      line-height: 24px;\n      text-transform: uppercase;\n      margin-bottom: 12px;\n      margin-top: 40px;\n    }\n\n    .link-list {\n      display: grid;\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n      row-gap: 10px;\n    }\n\n    @media (min-width: 620px) {\n      .link-list {\n        row-gap: 20px;\n        column-gap: 20px;\n        grid-template-columns: 1fr 1fr;\n      }\n    }\n\n    @media all and (-ms-high-contrast:none) {\n    .link-list {\n        display: -ms-grid;\n        -ms-grid-columns: 1fr 1fr;\n        -ms-grid-rows: 1fr 1fr;\n      }\n    }\n\n    .link-item {\n      display: block;\n      padding: 20px;\n      border: 1px solid #00000010;\n      border-radius: 5px;\n      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n      color: #333333;\n      display: flex;\n      align-items: flex-start;\n    }\n\n    .link-item:hover {\n      border-color: #1EA7FD50;\n      transform: translate3d(0, -3px, 0);\n      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n    }\n\n    .link-item:active {\n      border-color: #1EA7FD;\n      transform: translate3d(0, 0, 0);\n    }\n\n    .link-item strong {\n      font-weight: 700;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .link-item img {\n      height: 40px;\n      width: 40px;\n      margin-right: 15px;\n      flex: none;\n    }\n\n    .link-item span,\n    .link-item p {\n      margin: 0;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .tip {\n      display: inline-block;\n      border-radius: 1em;\n      font-size: 11px;\n      line-height: 12px;\n      font-weight: 700;\n      background: #E7FDD8;\n      color: #66BF3C;\n      padding: 4px 12px;\n      margin-right: 10px;\n      vertical-align: top;\n    }\n\n    .tip-wrapper {\n      font-size: 13px;\n      line-height: 20px;\n      margin-top: 40px;\n      margin-bottom: 40px;\n    }\n\n    .tip-wrapper code {\n      font-size: 12px;\n      display: inline-block;\n    }\n  "},void 0,!1,{fileName:"<source.js>",lineNumber:13,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)(_components.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"},void 0,!1,{fileName:"<source.js>",lineNumber:119,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:["Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",(0,jsx_dev_runtime.jsxDEV)(_components.strong,{children:"stories"},void 0,!1,{fileName:"<source.js>",lineNumber:122,columnNumber:77},this)," to revisit during development, testing, or QA."]},void 0,!0,{fileName:"<source.js>",lineNumber:121,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:["Browse Component stories now by navigating to them in the sidebar.\nView their code in the ",(0,jsx_dev_runtime.jsxDEV)(_components.code,{children:"stories"},void 0,!1,{fileName:"<source.js>",lineNumber:125,columnNumber:24},this)," directory to learn how they work.\nWe recommend building UIs with a ",(0,jsx_dev_runtime.jsxDEV)(_components.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_dev_runtime.jsxDEV)(_components.strong,{children:"component-driven"},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:35},this)},void 0,!1,{fileName:"<source.js>",lineNumber:126,columnNumber:34},this)," process starting with atomic components and ending with pages."]},void 0,!0,{fileName:"<source.js>",lineNumber:124,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)("div",{className:"subheading",children:"Configure"},void 0,!1,{fileName:"<source.js>",lineNumber:128,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)("div",{className:"link-list",children:[(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:assets_plugin,alt:"plugin"},void 0,!1,{fileName:"<source.js>",lineNumber:136,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"Presets for popular tools"},void 0,!1,{fileName:"<source.js>",lineNumber:138,columnNumber:7},this),"\nEasy setup for TypeScript, SCSS and more."]},void 0,!0,{fileName:"<source.js>",lineNumber:138,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:137,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:131,columnNumber:3},this),(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:stackalt,alt:"Build"},void 0,!1,{fileName:"<source.js>",lineNumber:147,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"Build configuration"},void 0,!1,{fileName:"<source.js>",lineNumber:149,columnNumber:7},this),"\nHow to customize webpack and Babel"]},void 0,!0,{fileName:"<source.js>",lineNumber:149,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:148,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:142,columnNumber:3},this),(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:colors,alt:"colors"},void 0,!1,{fileName:"<source.js>",lineNumber:158,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"Styling"},void 0,!1,{fileName:"<source.js>",lineNumber:160,columnNumber:7},this),"\nHow to load and configure CSS libraries"]},void 0,!0,{fileName:"<source.js>",lineNumber:160,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:159,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:153,columnNumber:3},this),(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:flow,alt:"flow"},void 0,!1,{fileName:"<source.js>",lineNumber:169,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"Data"},void 0,!1,{fileName:"<source.js>",lineNumber:171,columnNumber:7},this),"\nProviders and mocking for data libraries"]},void 0,!0,{fileName:"<source.js>",lineNumber:171,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:170,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:164,columnNumber:3},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:130,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)("div",{className:"subheading",children:"Learn"},void 0,!1,{fileName:"<source.js>",lineNumber:177,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)("div",{className:"link-list",children:[(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:repo,alt:"repo"},void 0,!1,{fileName:"<source.js>",lineNumber:181,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"Storybook documentation"},void 0,!1,{fileName:"<source.js>",lineNumber:183,columnNumber:7},this),"\nConfigure, customize, and extend"]},void 0,!0,{fileName:"<source.js>",lineNumber:183,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:182,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:180,columnNumber:3},this),(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:direction,alt:"direction"},void 0,!1,{fileName:"<source.js>",lineNumber:192,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"In-depth guides"},void 0,!1,{fileName:"<source.js>",lineNumber:194,columnNumber:7},this),"\nBest practices from leading teams"]},void 0,!0,{fileName:"<source.js>",lineNumber:194,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:193,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:187,columnNumber:3},this),(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:code_brackets,alt:"code"},void 0,!1,{fileName:"<source.js>",lineNumber:203,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"GitHub project"},void 0,!1,{fileName:"<source.js>",lineNumber:205,columnNumber:7},this),"\nView the source and add issues"]},void 0,!0,{fileName:"<source.js>",lineNumber:205,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:204,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:198,columnNumber:3},this),(0,jsx_dev_runtime.jsxDEV)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[(0,jsx_dev_runtime.jsxDEV)("img",{src:comments,alt:"comments"},void 0,!1,{fileName:"<source.js>",lineNumber:210,columnNumber:5},this),(0,jsx_dev_runtime.jsxDEV)("span",{children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("strong",{children:"Discord chat"},void 0,!1,{fileName:"<source.js>",lineNumber:212,columnNumber:7},this),"\nChat with maintainers and the community"]},void 0,!0,{fileName:"<source.js>",lineNumber:212,columnNumber:7},this)},void 0,!1,{fileName:"<source.js>",lineNumber:211,columnNumber:5},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:209,columnNumber:3},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:179,columnNumber:1},this),"\n",(0,jsx_dev_runtime.jsxDEV)("div",{className:"tip-wrapper",children:(0,jsx_dev_runtime.jsxDEV)(_components.p,{children:[(0,jsx_dev_runtime.jsxDEV)("span",{className:"tip",children:"Tip"},void 0,!1,{fileName:"<source.js>",lineNumber:219,columnNumber:3},this),"Edit the Markdown in"," ","\n",(0,jsx_dev_runtime.jsxDEV)("code",{children:"stories/Introduction.stories.mdx"},void 0,!1,{fileName:"<source.js>",lineNumber:220,columnNumber:3},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:219,columnNumber:3},this)},void 0,!1,{fileName:"<source.js>",lineNumber:218,columnNumber:1},this)]},void 0,!0,{fileName:"<source.js>",lineNumber:1,columnNumber:1},this)}const Introduction=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_dev_runtime.jsxDEV)(MDXLayout,Object.assign({},props,{children:(0,jsx_dev_runtime.jsxDEV)(_createMdxContent,props,void 0,!1,{fileName:"<source.js>"},this)}),void 0,!1,{fileName:"<source.js>"},this):_createMdxContent(props)}}}]);