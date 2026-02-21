/**
 * Search event tracking — writes to the same Firestore "search_events"
 * collection that the CRM dashboard reads from.
 *
 * Uses the REST API directly to avoid pulling in the full Firebase SDK.
 */

const PROJECT_ID = "mall-explorer-eb31b";
const API_KEY = "AIzaSyCGZB-S0AnYUM6YkZHwU5FyBFYS3dpji4c";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

interface SearchEvent {
  query: string;
  resultsCount: number;
  mallId: string;
  selectedStoreId?: string | null;
  selectedStoreName?: string | null;
}

/** Debounce timer so we only log after the user stops typing */
let _timer: ReturnType<typeof setTimeout> | null = null;
let _lastQuery = "";

/**
 * Log a search event to Firestore (debounced — waits 800ms after last keystroke).
 * Silently drops failures so it never breaks the UI.
 */
export function logSearch(event: SearchEvent) {
  const q = event.query.trim();
  if (!q || q === _lastQuery) return;

  if (_timer) clearTimeout(_timer);
  _timer = setTimeout(() => {
    _lastQuery = q;
    _writeEvent(event);
  }, 800);
}

/**
 * Log a store selection (immediate, no debounce).
 */
export function logStoreSelect(event: SearchEvent) {
  _writeEvent(event);
}

async function _writeEvent(event: SearchEvent) {
  try {
    const now = new Date().toISOString();
    const doc = {
      fields: {
        userId: { stringValue: "web_anonymous" },
        userEmail: { stringValue: "website" },
        query: { stringValue: event.query.trim() },
        resultsCount: { integerValue: String(event.resultsCount) },
        selectedStoreId: event.selectedStoreId
          ? { stringValue: event.selectedStoreId }
          : { nullValue: null },
        selectedStoreName: event.selectedStoreName
          ? { stringValue: event.selectedStoreName }
          : { nullValue: null },
        timestamp: { timestampValue: now },
        mallId: { stringValue: event.mallId },
        source: { stringValue: "website" },
      },
    };

    await fetch(`${BASE}/search_events?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(doc),
    });
  } catch {
    // Silently ignore — tracking should never break the user experience
  }
}
