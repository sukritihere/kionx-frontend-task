"use client";

import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "symbols": [
        [
          "BITSTAMP:BTCUSD|7D"
        ]
      ],
      "chartOnly": true,
      "width": "100%",
      "height": 400,
      "locale": "en",
      "colorTheme": "light",
      "autosize": true,
      "showVolume": false,
      "showMA": false,
      "hideDateRanges": true,
      "hideMarketStatus": true,
      "hideSymbolLogo": true,
      "scalePosition": "left",
      "scaleMode": "Normal",
      "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      "fontSize": "10",
      "noTimeScale": false,
      "valuesTracking": "1",
      "changeMode": "price-and-percent",
      "chartType": "area",
      "lineWidth": 2,
      "lineType": 0,
      "dateFormat": "dd MMM 'yy",
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "gridLineColor": "rgba(240, 240, 240, 1)",
      "lineColor": "rgba(41, 98, 255, 1)",
      "topColor": "rgba(41, 98, 255, 0.3)",
      "bottomColor": "rgba(41, 98, 255, 0)"
    }`;

    if (container.current) {
      container.current.innerHTML = "";
      container.current.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
