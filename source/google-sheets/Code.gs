/**
 * Kenjige Coffee — order requests to Google Sheets.
 * Deploy it as a web app (see README.md in this folder), either from the Sheet's
 * Extensions → Apps Script, or as a standalone project at script.google.com.
 */
// Standalone project only: the ID from your Sheet's address,
// https://docs.google.com/spreadsheets/d/THIS_PART/edit
const SHEET_ID = '';
const SHEET_NAME = 'Order Requests';
// Set to an address (e.g. 'kenjigefarms@gmail.com') to also get an email for every request.
const NOTIFY_EMAIL = '';

function doPost(e) {
  const p = (e && e.parameter) || {};
  // Hidden "website" field is only filled in by spam bots.
  if (p.website) return json_({ ok: true });

  const contact = clean_(p.contact);
  if (!contact) return json_({ ok: false, error: 'missing contact' });

  const row = [new Date(), clean_(p.product), clean_(p.price), contact, clean_(p.contactType), clean_(p.page)];

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Received', 'Product', 'Price', 'Phone / Email', 'Type', 'Page']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, 'New order request: ' + row[1], 'Product: ' + row[1] + ' (' + row[2] + ')\nContact: ' + contact);
  }
  return json_({ ok: true });
}

// Trim, cap length, and stop values like "=..." or "+1..." being read as formulas.
function clean_(value) {
  const s = String(value || '').trim().slice(0, 200);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
