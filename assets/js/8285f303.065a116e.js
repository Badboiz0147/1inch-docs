"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[1068],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45079:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={sidebar_position:1},l="Introduction",s={unversionedId:"limit-order-protocol/introduction",id:"limit-order-protocol/introduction",isDocsHomePage:!1,title:"Introduction",description:"1inch limit order protocol is a set of smart contracts, that can work on any EVM based blockchains (Ethereum, Binance Smart Chain, Polygon, etc.). Key features of the protocol is extreme flexibility and high gas efficiency that achieved by using two different order types - regular Limit Order and RFQ Order.",source:"@site/docs/limit-order-protocol/introduction.md",sourceDirName:"limit-order-protocol",slug:"/limit-order-protocol/introduction",permalink:"/docs/limit-order-protocol/introduction",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/limit-order-protocol/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quote params",permalink:"/docs/aggregation-protocol/api/quote-params"},next:{title:"Quick start",permalink:"/docs/limit-order-protocol/guide/quick-start"}},p=[{value:"Limit Order",id:"limit-order",children:[]},{value:"RFQ order",id:"rfq-order",children:[]},{value:"Supported tokens",id:"supported-tokens",children:[]},{value:"More resources",id:"more-resources",children:[]}],d={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://app.1inch.io/assets/images/logo.svg",width:"200",alt:"1inch network"})),(0,i.kt)("p",null,"1inch limit order protocol is a set of smart contracts, that can work on any EVM based blockchains (Ethereum, Binance Smart Chain, Polygon, etc.). Key features of the protocol is ",(0,i.kt)("strong",{parentName:"p"},"extreme flexibility")," and high ",(0,i.kt)("strong",{parentName:"p"},"gas efficiency")," that achieved by using two different order types - regular ",(0,i.kt)("em",{parentName:"p"},"Limit Order")," and ",(0,i.kt)("em",{parentName:"p"},"RFQ Order"),"."),(0,i.kt)("p",null,"Smart Contract allows users to place limit orders and RFQ Orders, that later could be filled on-chain.\nBoth type of orders is a data structure created off-chain and signed according to ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712"),"."),(0,i.kt)("h2",{id:"limit-order"},"Limit Order"),(0,i.kt)("p",null,"1inch users can place their limit orders via 1inch ",(0,i.kt)("a",{parentName:"p",href:"https://app.1inch.io/#/1/limit-order/WETH/DAI"},"dApp"),".\nAnyone can fetch this signed orders using REST API endpoint (",(0,i.kt)("a",{parentName:"p",href:"https://limit-orders.1inch.exchange/swagger/ethereum/"},"Ethereum"),", ",(0,i.kt)("a",{parentName:"p",href:"https://limit-orders.1inch.exchange/swagger/binance/"},"BSC"),", ",(0,i.kt)("a",{parentName:"p",href:"https://limit-orders.1inch.exchange/swagger/polygon/"},"Polygon"),") to perform trade by filling order on-chain.\nTo do that he or she pass signed order to the ",(0,i.kt)("inlineCode",{parentName:"p"},"fillOrder")," method on the contract (",(0,i.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x3ef51736315f52d568d6d2cf289419b9cfffe782"},"Ethereum"),", ",(0,i.kt)("a",{parentName:"p",href:"https://bscscan.com/address/0xe3456f4ee65e745a44ec3bcb83d0f2529d1b84eb"},"BSC"),", ",(0,i.kt)("a",{parentName:"p",href:"https://polygonscan.com/address/0xb707d89d29c189421163515c59e42147371d6857"},"Polygon"),").\n",(0,i.kt)("em",{parentName:"p"},"Note: trades buyer and seller should approve their asset to be used by 1inch limit order contract.")),(0,i.kt)("p",null,"Pathfinder algorithm use limit orders placed via ",(0,i.kt)("inlineCode",{parentName:"p"},"dApp")," and REST API, as a liquidity source, and make it available to fill to any 1inch user.\nSo, 1inch limit orders are integrated into the DeFi ecosystem from the day one."),(0,i.kt)("p",null,"Limit orders are extremely ",(0,i.kt)("strong",{parentName:"p"},"flexible")," limit order, can be configured with:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Order execution predicate.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Typical usage is checking that certain time stamp or block number. With this you can set certain expiration time."),(0,i.kt)("li",{parentName:"ul"},"You can specify construct any predicate that you want, for example check that certain price is higher than oracle price, to implement stop loss or take profit stategies"))),(0,i.kt)("li",{parentName:"ol"},"Helper function for asset price evaluation.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Function that will allow to extract assets price from arbitrary on-chain source"))),(0,i.kt)("li",{parentName:"ol"},"Callback, for to notify maker on order execution.")),(0,i.kt)("h2",{id:"rfq-order"},"RFQ order"),(0,i.kt)("p",null,"RFQ orders has different use case, and dedicated to market makers at first place. Typical scenario is following:\nMarket maker create a bunch of RFQ Orders, and expose it via API.\nTrading or platform / algorithm ask market maker quotes, and if it match his needs, he receives signed RFQ order from market maker."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Gas optimized order")," with restricted capabilities suitable ",(0,i.kt)("strong",{parentName:"p"},"for market makers")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support expiration time"),(0,i.kt)("li",{parentName:"ul"},"Support cancelation by order id"),(0,i.kt)("li",{parentName:"ul"},"RFQ Order could be filled only once"),(0,i.kt)("li",{parentName:"ul"},"Partial Fill is possible (once)")),(0,i.kt)("h2",{id:"supported-tokens"},"Supported tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ERC 20"),(0,i.kt)("li",{parentName:"ul"},"ERC 721"),(0,i.kt)("li",{parentName:"ul"},"ERC 1155"),(0,i.kt)("li",{parentName:"ul"},"Other token standards could be supported via external extension")),(0,i.kt)("h2",{id:"more-resources"},"More resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can use it right in ",(0,i.kt)("a",{parentName:"li",href:"https://app.1inch.io/#/1/limit-order/WETH/DAI"},"1inch dApp")),(0,i.kt)("li",{parentName:"ul"},"Smart Contracts ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/1inch/limit-order-protocol/"},"repository")),(0,i.kt)("li",{parentName:"ul"},"Utils library ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/1inch/limit-order-protocol-utils/"},"repository"))))}u.isMDXComponent=!0}}]);