import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Rate limiting headers
  response.headers.set('X-RateLimit-Limit', '100')
  response.headers.set('X-RateLimit-Remaining', '99')

  // Additional security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // CORS headers (restrictive)
  const origin = request.headers.get('origin')
  const allowedOrigins = [
    'https://phantom-protocol.vercel.app',
    'https://www.phantom-protocol.vercel.app'
  ]
  
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  }

  // Block suspicious user agents
  const userAgent = request.headers.get('user-agent') || ''
  const suspiciousAgents = [
    'sqlmap',
    'nikto',
    'nmap',
    'masscan',
    'nessus',
    'openvas',
    'metasploit',
    'burpsuite',
    'w3af',
    'acunetix',
    'havij'
  ]

  if (suspiciousAgents.some(agent => userAgent.toLowerCase().includes(agent))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Block common attack patterns in URL
  const url = request.nextUrl.pathname
  const attackPatterns = [
    /\.\./,  // Directory traversal
    /<script/i,  // XSS
    /union.*select/i,  // SQL injection
    /exec\(/i,  // Code injection
    /eval\(/i,  // Code injection
    /base64_decode/i,  // Obfuscation
    /system\(/i,  // Command injection
    /passthru/i,  // Command injection
    /shell_exec/i,  // Command injection
    /phpinfo/i,  // Info disclosure
    /wp-admin/i,  // WordPress scanning
    /\.env/i,  // Environment file access
    /\.git/i,  // Git directory access
    /\.sql/i,  // SQL file access
    /\.bak/i,  // Backup file access
  ]

  if (attackPatterns.some(pattern => pattern.test(url))) {
    console.warn(`Blocked suspicious request: ${url}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Block requests with suspicious query parameters
  const searchParams = request.nextUrl.searchParams
  const suspiciousParams = ['cmd', 'exec', 'command', 'execute', 'ping', 'query', 'jump', 'code', 'reg', 'do', 'func', 'arg', 'option', 'load', 'process', 'step', 'read', 'function', 'call', 'get', 'post', 'request', 'shell', 'daemon']
  
  for (const param of suspiciousParams) {
    if (searchParams.has(param)) {
      const value = searchParams.get(param) || ''
      if (value.length > 100 || /[<>'"`;]/.test(value)) {
        console.warn(`Blocked suspicious parameter: ${param}=${value}`)
        return new NextResponse('Forbidden', { status: 403 })
      }
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}