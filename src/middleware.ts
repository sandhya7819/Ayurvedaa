import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'hi']
let defaultLocale = 'en'

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Ignore static files and api
    if (
        pathname.includes('/_next/') ||
        pathname.includes('/images/') ||
        pathname.includes('/favicon.ico') ||
        pathname.includes('/logo.png') ||
        pathname.includes('/header-bg.jpg') ||
        pathname.includes('/hero-bg.jpg') ||
        pathname.includes('/api/')
    ) {
        return
    }

    if (pathnameIsMissingLocale) {
        const locale = defaultLocale

        // e.g. incoming request is /products
        // The new URL is now /en/products
        return NextResponse.redirect(
            new URL(`/${locale}${pathname}`, request.url)
        )
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/)
        // '/'
    ],
}
