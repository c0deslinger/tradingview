// Function to get URL parameter
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to convert ticker to TradingView symbol format
function getTradingViewSymbol(ticker) {
  if (!ticker) {
    return "BINANCE:BTCUSDT"; // Default to BTC
  }

  // Convert to uppercase and add USDT pair
  const upperTicker = ticker.toUpperCase();

  // For crypto, use BINANCE exchange
  return `BINANCE:${upperTicker}USDT`;
}

// Function to get display name for ticker
function getTickerDisplayName(ticker) {
  if (!ticker) {
    return "BTC/USDT";
  }
  return `${ticker.toUpperCase()}/USDT`;
}

// Main function to load TradingView widget
function loadTradingViewWidget() {
  // Get ticker from URL parameter
  const ticker = getUrlParameter("ticker") || "BTC";
  const symbol = getTradingViewSymbol(ticker);

  // Update copyright link
  const tradingViewLink = document.getElementById("tradingview-link");
  const symbolText = document.getElementById("tradingview-symbol-text");
  if (tradingViewLink && symbolText) {
    // Convert symbol to TradingView URL format (BINANCE:BTCUSDT -> BINANCE-BTCUSDT)
    const urlSymbol = symbol.replace(/:/g, "-");
    tradingViewLink.href = `https://www.tradingview.com/symbols/${urlSymbol}/`;
    symbolText.textContent = `${ticker.toUpperCase()} chart`;
  }

  // Get container
  const container = document.getElementById("tradingview-widget-container");
  if (!container) {
    console.error("TradingView container not found");
    return;
  }

  // Clear any existing widget
  const widgetDiv = container.querySelector(
    ".tradingview-widget-container__widget"
  );
  if (widgetDiv) {
    widgetDiv.innerHTML = "";
  }

  // Remove existing script if any
  const existingScript = container.querySelector(
    'script[src*="embed-widget-advanced-chart"]'
  );
  if (existingScript) {
    existingScript.remove();
  }

  // Create and configure script
  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
  script.type = "text/javascript";
  script.async = true;
  script.innerHTML = JSON.stringify({
    allow_symbol_change: true,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: "D",
    locale: "en",
    save_image: true,
    style: "1",
    symbol: symbol,
    theme: "dark",
    timezone: "Etc/UTC",
    backgroundColor: "#0F0F0F",
    gridColor: "rgba(242, 242, 242, 0.06)",
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    autosize: true,
  });

  // Append script to container
  container.appendChild(script);
}

// Load widget when page loads
document.addEventListener("DOMContentLoaded", loadTradingViewWidget);

// Reload widget if URL changes (for single-page navigation)
window.addEventListener("popstate", loadTradingViewWidget);
