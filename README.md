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

## Catatan

- Website menggunakan TradingView Symbol Overview widget
- Theme: Dark mode
- Exchange: Binance (default)
- Pair: USDT (default)

