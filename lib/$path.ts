export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  Images: {
    FV_png: '/Images/FV.png',
    Frame_png: '/Images/Frame.png',
    Framer0_png: '/Images/Framer0.png',
    button_png: '/Images/button.png',
    catch_png: '/Images/catch.png',
    company_png: '/Images/company.png',
    flow_png: '/Images/flow.png',
    inner_png: '/Images/inner.png',
    line_png: '/Images/line.png',
    logo_png: '/Images/logo.png',
    onayami_png: '/Images/onayami.png',
    title_png: '/Images/title.png',
    tokutyo_png: '/Images/tokutyo.png',
    word_png: '/Images/word.png',
    解決_png: '/Images/解決.png'
  },
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
