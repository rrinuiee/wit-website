import { useEffect, useState } from 'react'
import { readJSON, writeJSON } from '../lib/storage'

/** useState that remembers its value on this device (per-viewer convenience only). */
export function useStoredState(key, initial, validate = () => true) {
  const [value, setValue] = useState(() => {
    const stored = readJSON(key, initial)
    return validate(stored) ? stored : initial
  })
  useEffect(() => {
    writeJSON(key, value)
  }, [key, value])
  return [value, setValue]
}
