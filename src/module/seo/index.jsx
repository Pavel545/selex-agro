// components/SEO.jsx
import { useLayoutEffect  } from "react";

export default function SEO({ 
  title = "СИЛЕКС-АГРО", 
  description = "Контрактное производство микробных препаратов", 
  keywords = "сельское хозяйство, микробные препараты, СИЛЕКС-АГРО",
  ogImage = "/img/mainB.jpg",
  canonical = "",
  noindex = false 
}) {
  const siteTitle = "СИЛЕКС-АГРО";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  useLayoutEffect (() => {
    // Title
    document.title = fullTitle;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = "keywords";
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    // Open Graph
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = tag.content;
    });

    // Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    } else if (canonicalLink) {
      canonicalLink.remove();
    }

    // Robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = "robots";
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = "noindex, nofollow";
    } else if (metaRobots) {
      metaRobots.remove();
    }

    // Viewport (добавляем только если отсутствует)
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.name = "viewport";
      viewportMeta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(viewportMeta);
    }

    // Cleanup function - восстанавливаем исходные значения при размонтировании
    return () => {
      // Восстанавливаем предыдущий title (если нужно)
      // document.title = previousTitle;
      
      // Для остальных тегов можно либо оставить как есть,
      // либо реализовать более сложную логику восстановления
    };
  }, [title, description, keywords, ogImage, canonical, noindex, fullTitle]);

  return null; // Этот компонент не рендерит ничего в DOM
}