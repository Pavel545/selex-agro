// src/pages/stati/index.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./css/styles.css";
import { NEWS } from "../../shared/news";
import { htmlToPlain } from "../../utils/sanitize";
import Banner from "../banner";

const PAGE_SIZE = 9;

// адаптер: из массива блоков -> html-строка
const blocksToHtml = (blocks = []) =>
  blocks
    .map((b) => {
      if (!b || !b.type) return "";
      if (b.type === "paragraph") return `<p>${b.text || ""}</p>`;
      if (b.type === "heading") {
        const lvl = Math.min(Math.max(b.level ?? 2, 2), 4);
        return `<h${lvl}>${b.text || ""}</h${lvl}>`;
      }
      if (b.type === "list") {
        const items = (b.items || []).map((it) => `<li>${it}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      return "";
    })
    .join("");

// краткий текст для карточки
const getExcerpt = (content, maxLen = 220) => {
  const html = Array.isArray(content) ? blocksToHtml(content) : String(content || "");
  return htmlToPlain(html, maxLen);
};

const byFilter = (items, filter) => {
  const now = new Date();
  const from = new Date(now);
  if (filter === "week") from.setDate(now.getDate() - 7);
  else if (filter === "month") from.setMonth(now.getMonth() - 1);
  else if (filter === "year") from.setFullYear(now.getFullYear() - 1);
  else return items; // all
  return items.filter((it) => new Date(it.dateISO) >= from);
};

export default function Stati() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("f") || "all");
  const pageFromUrl = parseInt(searchParams.get("p") || "1", 10);
  const [page, setPage] = useState(isNaN(pageFromUrl) ? 1 : pageFromUrl);

  useEffect(() => {
    setSearchParams({ f: filter, p: String(page) }, { replace: true });
  }, [filter, page, setSearchParams]);

  const filtered = useMemo(() => byFilter(NEWS, filter), [filter]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(start, start + PAGE_SIZE);

  const go = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <>
      <Banner
        img={"/img/stati.jpg"}
        title={"НАШИ СТАТЬИ"}
        description={"Здесь вы найдете ответы на актуальные<br> вопросы и инструменты для повышения<br> эффективности вашего предприятия."}
        textBut={"Узнать больше"}
        link={"#articles"}
        ogImage="/img/stati.jpg"
        canonical="https://silex-agro.ru/stati"
      />

      <section className="stati sect" id="articles">
        <div className="container">
          <div className="stati__content">
            <div className="stati__menu">
              {[
                ["week", "За неделю"],
                ["month", "За месяц"],
                ["year", "За год"],
                ["all", "Все новости"],
              ].map(([code, label]) => (
                <button
                  key={code}
                  className={filter === code ? `button -t2` : "button -t1"}
                  onClick={() => { setFilter(code); setPage(1); }}
                >
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="stati__grid">
              {pageItems.map((n) => (
                <article className="stati-card" key={n.id}>
                  <Link to={`/stati/${n.url}`} className="stati-card__imgwrap" aria-label={n.title}>
                    <img src={n.img} alt={n.title} loading="lazy" />
                  </Link>
                  <div className="stati-card__body">
                    <time className="stati-card__date" dateTime={n.dateISO}>
                      {new Date(n.dateISO).toLocaleDateString("ru-RU")}
                    </time>
                    <h3 className="stati-card__title">
                      <Link to={`/stati/${n.url}`}>{n.title}</Link>
                    </h3>
                    <p className="stati-card__excerpt">{getExcerpt(n.content)}</p>
                    <div className="stati-card__more">
                      <Link to={`/stati/${n.url}`} className="link-btn">Читать</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Пагинация */}
            <div className="stati__pagination" role="navigation" aria-label="Пагинация">
              <button className="pag-btn" disabled={currentPage === 1} onClick={() => go(currentPage - 1)}>Назад</button>
              <div className="pag-pages">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1;
                  return (
                    <button
                      key={p}
                      className={p === currentPage ? "pag-num is-active" : "pag-num"}
                      onClick={() => go(p)}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
              <button className="pag-btn" disabled={currentPage === totalPages} onClick={() => go(currentPage + 1)}>Вперёд</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
