import { createClient } from '@supabase/supabase-js'

// These are intentionally client-side values: Supabase publishable/anon keys
// are designed to be used by browser applications. The actual secret check
// remains protected by the database function/RLS configuration.
const SUPABASE_URL = 'https://actvukimaohnadmeyyql.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_B21UvAehH7QpLg-qWeDMtw_9-Z0ReEt'

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY)

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
