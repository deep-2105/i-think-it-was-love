import { createClient } from '@supabase/supabase-js'

const getSupabaseConfig = () => ({
  url: import.meta.env.VITE_SUPABASE_URL?.trim(),
  key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim(),
})

export const isSupabaseConfigured = (() => {
  const { url, key } = getSupabaseConfig()
  return Boolean(url && key)
})()

let client = null
let clientAttempted = false

const getClient = () => {
  if (client) return client
  if (clientAttempted) return null

  clientAttempted = true
  const { url, key } = getSupabaseConfig()

  if (!url || !key) return null

  try {
    client = createClient(url, key)
    return client
  } catch {
    client = null
    return null
  }
}

// Keep the existing SecretTerminal contract, but create the client lazily at
// the moment it is actually used in the browser. This avoids a module-level
// null snapshot and makes production runtime initialization deterministic.
export const supabase = {
  rpc: (...args) => {
    const activeClient = getClient()

    if (!activeClient) {
      return Promise.reject(new Error('Supabase client unavailable'))
    }

    return activeClient.rpc(...args)
  },
}
