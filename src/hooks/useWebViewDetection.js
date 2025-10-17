// hooks/useWebViewDetection.js
import { useState, useEffect } from 'react';

export const useWebViewDetection = () => {
  const [isWebView, setIsWebView] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const detectWebView = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      // Паттерны для определения WebView
      const webViewPatterns = [
        /wv/, // Android WebView
        /webview/, // Прямое упоминание WebView
        /mobileapp/, // Ваше кастомное приложение
        /Selex Agro/, // Замените на имя вашего приложения
        /android.*version\/[0-9]/, // Android WebView pattern
      ];

      // Проверяем все паттерны
      const detected = webViewPatterns.some(pattern =>
        pattern.test(userAgent)
      );

      // Дополнительная проверка для iOS
      const isIOSWebView = /iphone|ipad|ipod/.test(userAgent) &&
        !/safari/.test(userAgent) &&
        /applewebkit/.test(userAgent);

      setIsWebView(detected || isIOSWebView);
      setIsChecking(false);
    };

    detectWebView();
  }, []);

  return { isWebView, isChecking };
};