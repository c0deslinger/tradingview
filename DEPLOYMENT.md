# Deployment Guide - TradingView Website

## Masalah X-Frame-Options

Website TradingView yang di-deploy di Vercel sebelumnya tidak bisa di-embed dalam iframe karena error `X-Frame-Options: deny`.

## Solusi yang Diterapkan

### 1. Konfigurasi Vercel (`vercel.json`)

File `vercel.json` sudah dibuat untuk mengatur HTTP headers yang mengizinkan iframe embedding:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "Content-Security-Policy",
          "value": "frame-ancestors 'self' *"
        }
      ]
    }
  ]
}
```

### 2. Meta Tag di HTML

Meta tag ditambahkan di `index.html` sebagai backup:

```html
<meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
```

### 3. Error Handling di Dialog

Dialog whitepaper sudah diperbaiki untuk:
- Mendeteksi error X-Frame-Options
- Menampilkan pesan error yang jelas
- Menyediakan tombol "Open in New Tab" sebagai fallback
- Menyediakan tombol "Retry" untuk mencoba lagi

## Cara Deploy

1. Pastikan file `vercel.json` ada di root folder `tradingview-website`
2. Deploy ke Vercel:
   ```bash
   cd tradingview-website
   vercel --prod
   ```
3. Setelah deploy, test dengan membuka URL di iframe

## Testing

Setelah deploy, test dengan:
1. Buka website di browser langsung - harus berfungsi normal
2. Coba embed di iframe - harus bisa di-embed tanpa error
3. Test dari extension - dialog harus bisa menampilkan chart

## Catatan

- `X-Frame-Options: SAMEORIGIN` mengizinkan embedding dari domain yang sama
- `frame-ancestors 'self' *` di CSP mengizinkan embedding dari domain mana pun
- Jika masih ada masalah, pastikan Vercel sudah membaca `vercel.json` dengan benar

