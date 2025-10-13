// src/pages/stati/StatiIts.jsx
import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./css/style.css";
import { NEWS, sanitizeHtmlNoImg } from "../../shared/news";
import Banner from "../../components/banner";

function ContentRenderer({ blocks = [] }) {
  return (
    <div className="statiits__content">
      {blocks.map((b, i) => {
        if (b.type === "heading") {
          const lvl = Math.min(Math.max(b.level ?? 2, 2), 4);
          const Tag = `h${lvl}`;
          return (
            <Tag key={i} className={`statiits__h statiits__h--h${lvl}`}>
              {b.text}
            </Tag>
          );
        }
        if (b.type === "paragraph") {
          return (
            <p
              key={i}
              dangerouslySetInnerHTML={{ __html: sanitizeHtmlNoImg(b.text) }}
            />
          );
        }
        if (b.type === "list") {
          return (
            <ul key={i}>
              {Array.isArray(b.items) &&
                b.items.map((it, j) => (
                  <li
                    key={j}
                    dangerouslySetInnerHTML={{ __html: sanitizeHtmlNoImg(it) }}
                  />
                ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}

export default function StatiIts() {
  const { url } = useParams();
  const nav = useNavigate();

  const article = useMemo(() => NEWS.find((n) => n.url === url), [url]);

  if (!article) {
    return (
      <section className="statiits">
        <div className="container">
          <div className="statiits__notfound">
            <h1>Статья не найдена</h1>
            <button onClick={() => nav(-1)} className="link-btn">
              Вернуться
            </button>
          </div>
        </div>
      </section>
    );
  }

  // NEWS уже отсортирован по дате (новые сверху).
  const idx = NEWS.findIndex((n) => n.id === article.id);
  const prev = idx >= 0 ? NEWS[idx + 1] : undefined; // более старая
  const next = idx >= 0 ? NEWS[idx - 1] : undefined; // более новая

  return (
    <>
      <Banner
        link="#statiits"
        bg
        img={article.img}
        title={article.title}
        description={new Date(article.dateISO).toLocaleDateString("ru-RU")}
        textBut="Читать больше"
      />

      <section
        className="statiits"
        id="statiits"
        aria-label={article.title}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="container">
          <nav className="statiits__crumbs" aria-label="Хлебные крошки">
            <Link to="/stati" className="statiits__crumb">
              Статьи
            </Link>
            <span className="statiits__crumb">/</span>
            <span
              className="statiits__crumb statiits__crumb--current"
              itemProp="headline"
            >
              {article.title}
            </span>
          </nav>

          <header className="statiits__head">
            <h1 className="statiits__title">{article.title}</h1>
            <time
              className="statiits__date"
              itemProp="datePublished"
              dateTime={article.dateISO}
            >
              {new Date(article.dateISO).toLocaleDateString("ru-RU")}
            </time>
          </header>

          {/* Контент из блоков */}
          <ContentRenderer blocks={article.content} />

          <footer className="statiits__footer">
            <div className="statiits__nav">
              {prev ? (
                <Link to={`/stati/${prev.url}`} className="statiits__navlink">
                  ← {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link to={`/stati/${next.url}`} className="statiits__navlink">
                  {next.title} →
                </Link>
              ) : (
                <span />
              )}
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
