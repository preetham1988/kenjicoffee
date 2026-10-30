# Sending order requests to Google Sheets

The "Order" form on each product sends the customer's phone number or email to a Google Sheet.
Until this is set up, the form opens an email to kenjigefarms@gmail.com instead.

## One-time setup (about 5 minutes)

1. Sign in to Google as the account that should own the data (e.g. kenjigefarms@gmail.com)
   and create a new Google Sheet, e.g. "Kenjige Farms Orders". Copy the long ID from its address:
   `https://docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`
2. Go to **https://script.google.com** (signed in as the same account) and click **New project**.
3. Delete what's in `Code.gs`, paste in the contents of [`Code.gs`](./Code.gs) from this folder,
   and put the Sheet ID between the quotes: `const SHEET_ID = 'THIS_PART';`. Click **Save**.
   - Optional: set `NOTIFY_EMAIL` to get an email for every new request.
4. Click **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, approve the permissions Google asks for (if you see "Google hasn't verified this app",
   click **Advanced → Go to … (unsafe)**; it's your own script), and copy the **Web app URL**
   (it looks like `https://script.google.com/macros/s/.../exec`).
6. Paste that URL into `source/src/config.js`:
   ```js
   export const SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/.../exec";
   ```
7. Rebuild the site (see `source/README.md`) and push.

Requests appear in an "Order Requests" tab with the time, product, price, frequency (one-time or every month), phone/email and page.

If you later edit `Code.gs`, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## "Sorry, unable to open the file at this time"

This happens when the browser is signed in to more than one Google account: Apps Script opens
under your first (default) account, which doesn't own the Sheet. Either:

- follow the steps above at script.google.com, checking the account picture (top right) is the Sheet's owner, or
- open the Sheet in a private/incognito window signed in to only that account, then use **Extensions → Apps Script**
  (in that case you can leave `SHEET_ID` empty).
