export const pagesPath = {
  "atFirst": {
    $url: (url?: { hash?: string }) => ({ pathname: '/atFirst' as const, hash: url?.hash })
  },
  "contact": {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "news": {
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash }),
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/news/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "result": {
    $url: (url?: { hash?: string }) => ({ pathname: '/result' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  $1_jpeg: '/1.jpeg',
  $2_jpeg: '/2.jpeg',
  $3_jpeg: '/3.jpeg',
  $4_jpeg: '/4.jpeg',
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
