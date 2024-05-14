import { createServerClient } from '@supabase/ssr'
import { type APIRoute } from 'astro'

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') || '/'

  if (code) {
    const supabase = createServerClient(
      import.meta.env.PUBLIC_SUPABASE_URL,
      import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(key) {
            return cookies.get(key)?.value
          },
          set(key, value, options) {
            cookies.set(key, value, options)
          },
          remove(key, options) {
            cookies.delete(key, options)
          },
        },
      }
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return redirect(next)
    }
  }

  // return the user to an error page with instructions
  return redirect('/auth/auth-code-error')
}