## Quick start

### Host the static files

the static files includes:

#### sdk/*

- **sdk.{version}.js**: support methods to render and update the trade UI, loaded by script tag
- **sdk.{version}.esm.js**: support methods to render and update the trade UI, imported by es module

#### static/*

- **um_futures.{version}.html**: the HTML file for iframe
- **\*.js**: the JS files for iframe
- **charting_library_next**: the static files of chart library
- **static/images**: the chart required images file

### Import SDK

- By script

```html
<script src="path/to/sdk.1.0.0.js"></script>
```

- By esmodule

```js
import FuturesSDK from "path/to/sdk.1.0.0.esm.js";
```

### Usage

```js
FuturesSDK.createTradeUI({
  container: document.getElementById("app"),
  config: {
    staticBaseUrl: "",
    futuresWsHost: 'wss://fstream.apollox.finance/compress',
    defaultFavoriteSymbols: ["BTCUSDT"],
    enableThemeToggle: false,
    headerConfig: {
      logoUrl: "https://static.apollox.com/cloud-futures/static/images/common/logo.svg",
      lpPairAddress: "0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c",
      lpBaseAddress: "0x78f5d389f5cdccfc41594abab4b0ed02f31398b3",
      lpQuoteAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
    },
    defaultTheme: 'light' // optional, default theme is 'dark'
  },
  state: {
    symbol: "BTCUSDT",
    lng: "en",
  },
});

FuturesSDK.eventListener.on("invalidSymbol", () => console.log('invalid symbol')) 
FuturesSDK.eventListener.on("startLoad", () => console.log('start load')) 
FuturesSDK.eventListener.on("loaded", () => console.log('loaded'))
FuturesSDK.eventListener.on("loadFailed", ({message}) => console.log(message)) 
FuturesSDK.eventListener.on("symbolChange", ({symbol}) => console.log(symbol))
FuturesSDK.eventListener.on("lngChange", ({lng}) => console.log(lng)) 
```

## Interface

```
FuturesSDK.createTradeUI({
   container: Container,
   config: Config,
   state: State
})
```

#### Container

The element that you want to append the iframe of futures trade page

#### Config

The static configuration that wont be changed anymore after you initialize it.

```ts
type Config = {
  staticBaseUrl: string
  apiBaseUrl: string
  i18nBaseUrl: string
  configBaseUrl: string
  darkPalette?: Partial<PaletteInterface>
  lightPalette?: Partial<PaletteInterface>
  defaultFavoriteSymbols?: string[]
  enableThemeToggle?: boolean
  isTestnet?: boolean
  headerConfig: HeaderConfig
  footerConfig: FooterConfig
  supportNetworks: Array<'bnb' | 'eth'>
  orderTypeInfoUrl?:
  | string
  | {
      limit: string
      market: string
      stopLimit: string
      stopMarket: string
      trailingStop: string
      postOnly: string
    }
  loadingImage?: LoadingImage
  notificationPosition?: NotificationPosition
  defaultTheme?: 'dark' | 'light'
  fontFamily?: string
  fontUrl?: string
  proGridLayoutMargin?: Array<number>
  variants?: Variants
}
```
- staticBaseUrl: the base url of your static files, for example: the complete url of um_futures.{version}.html would be: `${staticBaseUrl}um_futures.{version}.html`
- apiBaseUrl: the base url of the api calls, for example: `${apiBaseUrl}/fapi/v1/exchangeInfo`
- i18nBaseUrl: the i18n base url
- configBaseUrl: the config base url
- lightPalette, darkPalette: we support theme styles, you can customize the colors for light mode or dark mode,
- defaultFavoriteSymbols: the default favorites symbol
- enableToggleTheme: whether user can change the theme.
- headerConfig: the config to set up header
- supportNetworks: default is ['bnb', 'eth']
- footer: the config to set up footer
- orderTypeInfoUrl: the info url of order types
- loadingImage: the loading image config, it will show before the trade page render
- notificationPosition: the position of all notification toast
- defaultTheme: to configure the initial theme value, theme value will then be stored in cookies with key 'theme'
- fontFamily: same as https://www.w3schools.com/cssref/pr_font_font-family.asp
- fontUrl: the url of the custom font
- proGridLayoutMargin: margin between each widget in px, format as [x, y] 
- variants: experimental feature, for customized style, see [Variants](#variants)

**PaletteInterface**

```ts
type PaletteInterface = {
  modalBg: string;
  popupBg: string;
  inputBg: string;
  bg1: string; // default backgroud; dropdown backgroud; tooltip backgroud
  bg2: string;
  bg3: string; // disable/hover backgroud; disable line
  bg4: string;
  bg5: string; // navigation backgroud; mask backgroud
  bg6: string; // shadow
  alertYellowBg: string;
  badgeYellowBg: string;
  primaryHover: string;
  primary: string;
  toastFailBg: string;
  depthSellBg: string;
  sellHover: string;
  sell: string;
  toastSuccessBg: string;
  depthBuyBg: string;
  buyHover: string;
  buy: string;
  overallBg: string;
  moduleBg: string;
  newLine: string;
  t: {
    primary: string;
    secondary: string;
    third: string;
    disabled: string;
    yellow: string;
    sell: string;
    buy: string;
    white: string;
    emphasize: string;
  },
  slider: {
    line: string
    disabledBar: string
    progressBar: string
    tooltipText: string
    tooltipBg: string
    radioButtonBg: string
    radioButtonBorderColor: string
    stepperBg: string
    stepperBorderColor: string
  }
};
```

**HeaderConfig**

```ts
type HeaderConfig = {
  disable?: boolean // hide header
  logoUrl?: string
  swapUrl?: string
  customerServiceUrl?: string
  mobileDarkLogoUrl?: string
  mobileLightLogoUrl?: string
  desktopDarkLogoUrl?: string
  desktopLightLogoUrl?: string
  // price
  priceUrl?: string // the href url on the icon
  priceLogoUrl?: string // the logo image url of the coin
  lpPairAddress?: string // the contract address of the pair in liquidity pool, for example: https://bscscan.com/address/0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c is the address of APX/BUSD in pancake pool 
  lpBaseAddress?: string // the base asset address in the lp pair
  lpQuoteAddress?: string // the quote asset address in the lp pair
  pricePrecision: number // the precision u want to display 
  tokenNetwork?: 'bnb' | 'eth' | 'arb1'
}
```

**FooterConfig**

```ts
type FooterConfig = {
  disable?: boolean // hide footer
}
```

**Notification**

```ts
type NotificationPosition = {
  horizontal: 'left' | 'right'
  vertical: 'top' | 'bottom'
}
```

**LoadingImage**

```ts
type LoadingImage = {
  url: string
  width?: number
  backgroundColor?: string
}
```


**Variants**

This is an experimental feature, may be changed in the feature.

```ts
type Variants = {
  widget: Record<string, CSSProperties>
}
```

example

```js
variants: {
  widget: {
    default: {
      borderRadius: '16px',
      border: '1px solid',
      borderColor: 'primary'
    }
  },
  button: {
    default: {
      borderRadius: '16px'
    }
  },
  orderform: {
    inputWrapper: {
      borderRadius: '16px',
    }
  }
}
```


### State

the inital state of your trade UI, these state can be changed by the methods we support

```ts

{
  symbol?:  string, // 'BTCUSDT',
	lng?: string, //'en',
}

```

- symbol: default `BTCUSDT`, you can find all symbols in `https://fapi.binance.com/fapi/v1/exchangeInfo`
- lng: default `en` , can be one of `'en'|'de'|'uk-UA'|'ru'|'fr'|'zh-CN'|'ko'|'zh-TW'|'pt-BR'|'es'|'es-LA'|'th'|'ja'|'pl'|'tr'`

### Methods

there are four methods used to update the state

| name        | type                                 | description                                                                                                                                                      |
| ----------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setSymbol   | `(symbol: string) => void` | To update the current symbol. Usually, you don't have to call this method, the trade UI will handle the change symbol when user click symbol in the market list. |
| setTheme | `(theme: 'dark' \| 'light') => void` |  |
| setLanguage | `(lng: string) => void`||
| setWidgetVisible | `(widget: Widget, visible: boolean) => void`|Widget: `'market' \| 'chart' \| 'verticalDepth' \| 'orderbook' \| 'trades' \| 'userinfo' \| 'favorite' \| 'assetsCard' \| 'marginRatio' \| 'orderform'`|
|resetLayouts|`() => void`|reset to default layouts|

**for examples**

```ts
FuturesSDK.setTheme("dark");
```

### Events

You can listen events by `FuturesSDK.eventListener.on`

```ts
// usage
FuturesSDK.eventListener.on(Event, () => {});
```

| Event (string) | description                                                 |
| -------------- | ----------------------------------------------------------- |
| symbolChange   | triggered when the symbol changes                           |
| lngChange      | triggered when the lng changes                              |
| invalidSymbol  | triggered when the passed symbol is  invalid                |
| startLoad      | triggered when the sdk start                                |
| loaded         | triggered when the js executed and required data is fetched |
| loadFailed     | triggered when the loading process failed                   |

## Development

In development, the domain `http://localhost:port` won't pass verify API, please use chrome extension https://chrome.google.com/webstore/detail/ajax-proxy/jbikjaejnjfbloojafllmdiknfndgljo to mock the response.

```
verify api : `https://www.apollox.finance/bapi/futures/v1/public/future/common/broker-whitelist`
mocked response: {"code":"000000","message":null,"messageDetail":null,"data": true,"success":true}
```
