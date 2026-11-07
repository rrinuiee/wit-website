/**
 * Shared feedback integration
 * ---------------------------
 * By default NO shared service is connected. Notes and slogan votes are kept
 * in the visitor's own browser (localStorage) and the UI says so plainly.
 *
 * To collect everyone's feedback in one place, set VITE_FEEDBACK_ENDPOINT in a
 * `.env` file (see `.env.example` and README.md → "Connecting shared feedback").
 *
 * The endpoint receives a standard form POST (application/x-www-form-urlencoded)
 * with these fields:
 *   id, createdAt, kind, section, slot, message, name, page
 * That format works with Formspree and with a Google Apps Script web app
 * without extra CORS configuration.
 */
export const FEEDBACK_ENDPOINT = (import.meta.env.VITE_FEEDBACK_ENDPOINT || '').trim()

export const IS_SHARED_FEEDBACK = FEEDBACK_ENDPOINT.length > 0
