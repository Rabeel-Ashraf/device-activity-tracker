import { NextRequest, NextResponse } from 'next/server';

// This function is the core of your Next.js middleware
export function middleware(request: NextRequest) {
  // 1. --- LOGIC HERE (Optional) ---
  // You can inspect the request, check for cookies/headers, etc.
  
  // Example: Log the request path (helpful for debugging)
  // console.log('Middleware running for:', request.nextUrl.pathname);

  // 2. --- RETURN A RESPONSE ---
  
  // If the request should proceed normally, return NextResponse.next()
  return NextResponse.next();

  // If you need to redirect a user (e.g., for authentication):
  // if (!isAuthenticated) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
}

// Optional: Configuration to control which paths the middleware runs on
// This is highly recommended to prevent the middleware from running on static files.
export const config = {
  // Match all paths except:
  // - API routes (starts with /api)
  // - Next.js internal files (_next)
  // - Static files (files with extensions, e.g., .ico, .png)
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
