import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Mock Supabase client for development without env variables
const createMockClient = () => {
  const mockUser = {
    id: 'test-user-123',
    email: 'test@example.com',
    aud: 'authenticated',
    role: 'authenticated',
    created_at: new Date().toISOString(),
    app_metadata: {},
    user_metadata: {},
  }

  const mockSession = {
    access_token: 'mock-token',
    refresh_token: 'mock-refresh',
    expires_in: 3600,
    token_type: 'bearer',
    user: mockUser,
  }

  return {
    auth: {
      getSession: async () => ({ data: { session: mockSession }, error: null }),
      onAuthStateChange: (callback: any) => {
        callback('SIGNED_IN', mockSession)
        return { data: { subscription: { unsubscribe: () => {} } } }
      },
      signUp: async (credentials: any) => ({
        data: { user: mockUser, session: mockSession },
        error: null
      }),
      signInWithPassword: async (credentials: any) => {
        // Test account: test@example.com / password
        if (credentials.email === 'test@example.com' && credentials.password === 'password') {
          return { data: { user: mockUser, session: mockSession }, error: null }
        }
        return { data: { user: null, session: null }, error: { message: 'Invalid credentials' } }
      },
      signOut: async () => ({ error: null }),
    },
  } as any
}

let supabase: any

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables - using mock authentication')
  console.info('Test account: test@example.com / password')
  supabase = createMockClient()
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
}

export { supabase }