/*
 * @Author: shiqi liziw2012@gmail.com
 * @Date: 2024-03-27 10:22:02
 * @LastEditors: shiqi liziw2012@gmail.com
 * @LastEditTime: 2024-03-29 16:39:29
 * @FilePath: /next-app/src/middleware.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  if (req.nextUrl.pathname.startsWith('/auth') && isAuthenticated) {
    return NextResponse.redirect(new URL('/', req.url))
  }


  const authMiddleware = await withAuth({
    pages: {
      signIn: req.nextUrl.pathname,
    },
  })

  // @ts-expect-error
  return authMiddleware(req, event)
}

export const config = {
  matcher: ['/auth/:path*'],
}
