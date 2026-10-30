# Sending order requests to Google Sheets

The "Order Now" form on each product sends the customer's phone number or email to a Google Sheet.
Until this is set up, the form opens an email to kenjigefarms@gmail.com instead.

## One-time setup (about 5 minutes)

1. Sign in to Google as the account that should own the data (e.g. kenjigefarms@gmail.com)
   and create a new Google Sheet, e.g. "Kenjige Coffee Orders".
2. In the sheet, open **Extensions → Apps Script**.
3. Delete what's in `Code.gs` and paste in the contents of [`Code.gs`](./Code.gs) from this folder. Click **Save**.
   - Optional: set `NOTIFY_EMAIL` to get an email for every new request.
4. Click **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, approve the permissions Google asks for, and copy the **Web app URL**
   (it looks like `https://script.google.com/macros/s/.../exec`).
6. Paste that URL into `source/src/config.js`:
   ```js
   export const SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/.../exec";
   ```
7. Rebuild the site (see `source/README.md`) and push.

Requests appear in an "Order Requests" tab with the time, product, price, phone/email and page.

If you later edit `Code.gs`, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
