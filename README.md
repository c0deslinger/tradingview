# TradingView Website

Website sederhana untuk menampilkan embed TradingView chart berdasarkan ticker cryptocurrency.

## Cara Menggunakan

1. Buka `index.html` di browser
2. Tambahkan parameter `ticker` di URL untuk menampilkan chart tertentu

## Contoh Penggunaan

- **BTC**: `index.html?ticker=BTC` - Menampilkan chart BTC/USDT
- **ETH**: `index.html?ticker=ETH` - Menampilkan chart ETH/USDT
- **BNB**: `index.html?ticker=BNB` - Menampilkan chart BNB/USDT
- **Tanpa parameter**: `index.html` - Default menampilkan BTC/USDT

## Format Symbol

Website ini menggunakan format TradingView:
- Ticker akan dikonversi menjadi format `BINANCE:{TICKER}USDT`
- Contoh: `BTC` → `BINANCE:BTCUSDT`

## File Structure

- `index.html` - Halaman utama
- `style.css` - Styling website
- `script.js` - Logic untuk membaca parameter dan embed widget
- `README.md` - Dokumentasi ini
- `vercel.json` - Konfigurasi Vercel untuk headers dan routing
- `_headers` - Konfigurasi headers alternatif untuk Netlify/Vercel
- `.htaccess` - Konfigurasi Apache untuk X-Frame-Options (opsional)

## Deployment di Vercel

Website ini sudah dikonfigurasi untuk deployment di Vercel.

### Cara Deploy:

1. **Install Vercel CLI** (opsional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI**:
   ```bash
   cd tradingview-website
   vercel
   ```

3. **Atau deploy via Vercel Dashboard**:
   - Push code ke GitHub/GitLab/Bitbucket
   - Import project di Vercel dashboard
   - Vercel akan otomatis detect dan deploy

### Konfigurasi Vercel:

File `vercel.json` sudah dikonfigurasi dengan:
- `X-Frame-Options: GOFORIT` - Mengizinkan embedding dalam iframe
- `Content-Security-Policy: frame-ancestors *;` - Policy modern untuk iframe
- `Access-Control-Allow-Origin: *` - CORS untuk cross-origin requests

## X-Frame-Options

Website ini dikonfigurasi dengan `X-Frame-Options: GOFORIT` untuk mengizinkan embedding dalam iframe dari domain manapun.

**Konfigurasi:**
- `vercel.json` - Konfigurasi utama untuk Vercel (HTTP headers)
- Meta tag di `index.html` - Fallback client-side
- `_headers` - Alternatif untuk Netlify/Vercel
- `.htaccess` - Untuk Apache server (jika tidak menggunakan Vercel)

**Catatan:** Vercel akan otomatis menggunakan `vercel.json` untuk mengatur HTTP headers. Pastikan file `vercel.json` ada di root folder saat deploy.

## Catatan

- Website menggunakan TradingView Advanced Chart widget
- Theme: Dark mode
- Exchange: Binance (default)
- Pair: USDT (default)
- Dapat di-embed dalam iframe dari domain manapun

