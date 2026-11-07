import { FEEDBACK_ENDPOINT, IS_SHARED_FEEDBACK } from '../config/feedback'
import { readJSON, writeJSON, removeKey } from './storage'

const LOCAL_KEY = 'wit-proto:feedback:v1'
const FIELDS = ['id', 'createdAt', 'kind', 'section', 'slot', 'message', 'name', 'page', 'delivered']

export function loadLocalFeedback() {
  const list = readJSON(LOCAL_KEY, [])
  return Array.isArray(list) ? list : []
}

export function clearLocalFeedback() {
  removeKey(LOCAL_KEY)
}

function makeId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

/**
 * Records a note (or slogan vote).
 * - Always keeps a copy on this device so it can be exported.
 * - Only sends it anywhere if VITE_FEEDBACK_ENDPOINT is configured.
 * Returns { record, delivered, shared, error }.
 */
export async function submitFeedback({ kind, section, slot = '', message, name = '' }) {
  const record = {
    id: makeId(),
    createdAt: new Date().toISOString(),
    kind,
    section,
    slot,
    message: message.trim(),
    name: name.trim(),
    page: typeof window !== 'undefined' ? window.location.href : '',
    delivered: false,
  }

  let error = null
  if (IS_SHARED_FEEDBACK) {
    try {
      const body = new URLSearchParams()
      FIELDS.filter((f) => f !== 'delivered').forEach((f) => body.append(f, record[f] ?? ''))
      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })
      record.delivered = res.ok
      if (!res.ok) error = `The shared form replied with an error (${res.status}).`
    } catch {
      error = 'Couldn’t reach the shared form (offline or blocked).'
    }
  }

  writeJSON(LOCAL_KEY, [...loadLocalFeedback(), record])
  return { record, delivered: record.delivered, shared: IS_SHARED_FEEDBACK, error }
}

function csvCell(value) {
  const s = String(value ?? '')
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

export function feedbackToCSV(list) {
  const rows = [FIELDS.join(',')]
  list.forEach((r) => rows.push(FIELDS.map((f) => csvCell(r[f])).join(',')))
  return rows.join('\n')
}

export function downloadFile(filename, text, type) {
  const blob = new Blob([text], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
