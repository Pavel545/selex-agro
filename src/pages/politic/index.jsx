import React from "react";
import "./css/style.css";

// Тип документа
const extIcon = (ext) =>
  ({
    pdf: "PDF",
    doc: "DOC",
    docx: "DOCX",
    xls: "XLS",
    xlsx: "XLSX",
    zip: "ZIP",
  })[ext?.toLowerCase?.()] || (ext || "FILE").toUpperCase();

/**
 * Компонент карточки документа
 */
const DocCard = ({ title, href, size, ext }) => (
  <article className="plc-card">
    <header className="plc-card__head">
      <span className={`plc-badge plc-badge--${(ext || "file").toLowerCase()}`}>
        {extIcon(ext)}
      </span>
      <h3 className="plc-card__title">{title}</h3>
    </header>
    <div className="plc-card__meta">
      {size && <span className="plc-card__size">{size}</span>}
    </div>
    <div className="plc-card__actions">
      <a className="plc-btn" href={href} download>
        <span>Скачать</span>
      </a>
      <a className="plc-link" href={href} target="_blank" rel="noreferrer">
        Открыть в браузере
      </a>
    </div>
  </article>
);

/**
 * Politic — блок из 4 документов.
 * Если не передавать пропсы, отрендерятся демо-данные.
 */
export default function Politic({ docs }) {
  const items = docs?.length
    ? docs
    : [
        {
          title: "Правила применения рекомендательных технологий",
          href: "/docs/Правила применения рекомендательных технологий.pdf",
          ext: "pdf",
        },
        {
          title: "Пользовательское соглашение",
          href: "/docs/ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ.pdf",
          ext: "pdf",
        },
        {
          title: "Политика обработки персональных данных",
          href: "/docs/Согласие на обработку персональных данных.pdf",
          ext: "pdf",
        },
        {
          title: "СОГЛАСИЕ НА ОБРАБОТКУ",
          href: "/docs/СОГЛАСИЕ НА ОБРАБОТКУ.pdf",
          ext: "pdf",
        },
        {
          title: "Согласие на рассылку",
          href: "/docs/Согласие на получение рассылки рекламно-информационных материалов.pdf",
          ext: "pdf",
        },
      ];

  return (
    <section className="plc" aria-label="Документы компании">
      <div className="container">
        <div className="plc__head">
          <h2 className="plc__title">Документы</h2>
          <p className="plc__lead">
            Собрали ключевые политики и договоры для скачивания и просмотра.
          </p>
        </div>

        <div className="plc__grid">
          {items.slice(0, 4).map((d, i) => (
            <DocCard key={i} {...d} />
          ))}
        </div>

        <div className="plc__note">
          Нажмите «Скачать» чтобы сохранить файл, или «Открыть в браузере» для
          быстрого просмотра.
        </div>
      </div>
    </section>
  );
}
