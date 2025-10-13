import React from "react";
import "./css/style.css"; // SCSS from the next block
import { FadeIn, SlideIn } from "../../module/motion";

const SectionTitle = ({ title, subtitle }) => (
  <FadeIn>
    <header className="production__section-header">
      <h2 className="production__section-title">{title}</h2>
      {subtitle && <p className="production__section-sub">{subtitle}</p>}
    </header>
  </FadeIn>
);

const ProductItem = ({ title, note }) => (
  <li className="product-item">
    <div className="product-item__title">{title}</div>
    {note && <p className="product-item__note">{note}</p>}
  </li>
);

const ProductGroup = ({ groupTitle, items }) => (
  <SlideIn className="product-card">
    <FadeIn>
      <h4 className="product-card__title">{groupTitle}</h4>
    </FadeIn>
    <ul className="product-card__list">
      {items.map((it, idx) => (
        <ProductItem key={idx} title={it.title} note={it.note} />
      ))}
    </ul>
  </SlideIn>
);

export default function Production() {
  return (
    <section className="production" aria-label="Производственная линейка">
      <div className="container">
        {/* Header */}
        <div className="production__head">
          <h2 className="production__title">Производственные направления</h2>
          <p className="production__lead">
            Научно обоснованные биорешения для почвы, растений и здоровья
            животных.
          </p>
        </div>

        {/* Direction 1 */}
        <article className="production__section">
          <SectionTitle
            title="Направление 1: Растениеводство и защита растений"
            subtitle="Комплексное биологическое решение для повышения урожайности и здоровья почвы"
          />

          <div className="production__grid">
            <ProductGroup
              groupTitle="Для здоровья почвы"
              items={[
                {
                  title: "Биодеструкторы пожнивных остатков",
                  note: "Эффективное решение для утилизации соломы и стерни. Ускоряют разложение, обогащают почву органикой, предотвращают развитие патогенов.",
                },
                {
                  title: "Биоудобрения и мелиоранты (гранула)",
                  note: "Восстанавливают плодородие почвы, улучшают её структуру и влагоудерживающую способность. Альтернатива или дополнение к химическим удобрениям.",
                },
              ]}
            />

            <ProductGroup
              groupTitle="Для защиты растений"
              items={[
                {
                  title: "Биофунгициды (порошок)",
                  note: "Безопасная защита от грибных и бактериальных заболеваний. Не накапливаются в растениях и почве, нет резистентности.",
                },
                {
                  title: "Биоинсектициды (порошок)",
                  note: "Целенаправленное воздействие на вредителей без вреда для полезной энтомофауны и пчёл.",
                },
              ]}
            />

            <ProductGroup
              groupTitle="Для повышения продуктивности"
              items={[
                {
                  title: "Биостимуляторы роста (порошок)",
                  note: "Активируют естественный потенциал растения. Повышают всхожесть, стрессоустойчивость к засухе и заморозкам, улучшают качество урожая.",
                },
                {
                  title:
                    "Био‑модификаторы минеральных удобрений и биоминеральные удобрения",
                  note: "Уникальные комплексы, усиливающие усвоение питательных веществ из почвы и удобрений. Повышают эффективность минерального питания.",
                },
              ]}
            />
          </div>
        </article>

        {/* Direction 2 */}
        <article className="production__section">
          <SectionTitle
            title="Направление 2: Животноводство и птицеводство"
            subtitle="Биопрепараты для здоровья животных, продуктивности и гигиены без антибиотиков"
          />

          <div className="production__grid">
            <ProductGroup
              groupTitle="Для здоровья ЖКТ и продуктивности"
              items={[
                {
                  title: "Пребиотики в сухой форме (порошок)",
                  note: "Стимулируют рост полезной микрофлоры кишечника. Улучшают переваримость и усвоение корма, укрепляют иммунитет.",
                },
                {
                  title: "Нейтрализаторы микотоксинов (порошок, микрогранула)",
                  note: "Надёжная защита от скрытой угрозы. Связывают токсины в корме, защищая печень и здоровье животных.",
                },
              ]}
            />

            <ProductGroup
              groupTitle="Для управления стрессом"
              items={[
                {
                  title: "Адаптогены для профилактики стрессов",
                  note: "Снижают негативные последствия от транспортировки, вакцинации, перегруппировок. Повышают сохранность поголовья.",
                },
              ]}
            />

            <ProductGroup
              groupTitle="Для гигиены и содержания"
              items={[
                {
                  title: "Присыпки",
                  note: "Эффективное средство для обработки ран, профилактики инфекций. Безопасны при применении.",
                },
                {
                  title: "Осушители подстилок",
                  note: "Создают сухую и здоровую среду, подавляя развитие бактерий и аммиака. Улучшают условия содержания, снижают заболеваемость.",
                },
              ]}
            />
          </div>
        </article>

        {/* Summary / Catalog */}
        <article className="production__section production__section--catalog">
          <SectionTitle title="Каталог продукции (сухие формы)" />
          <div className="catalog">
            <SlideIn className="catalog__block">
              <h4 className="catalog__title">
                1. Биоудобрения и био СЗР в сухой форме
              </h4>
              <ul className="catalog__list">
                <li>Биофунгициды (порошок)</li>
                <li>Биоинсектициды (порошок)</li>
                <li>Биостимуляторы роста (порошок)</li>
                <li>Биоудобрения и мелиоранты (гранула)</li>
                <li>Биодеструкторы пожнивных остатков</li>
              </ul>
            </SlideIn>
            <SlideIn className="catalog__block">
              <h4 className="catalog__title">
                2. Модификаторы и биоминеральные удобрения
              </h4>
              <ul className="catalog__list">
                <li>Модификаторы минеральных удобрений</li>
                <li>Биоминеральные удобрения</li>
              </ul>
            </SlideIn>
            <SlideIn className="catalog__block">
              <h4 className="catalog__title">
                3. Биопрепараты для животных и птицы
              </h4>
              <ul className="catalog__list">
                <li>Пребиотики в сухой форме (порошок)</li>
                <li>Нейтрализаторы микотоксинов (порошок, микрогранула)</li>
                <li>Адаптогены для профилактики стрессов</li>
                <li>Присыпки</li>
                <li>Осушители подстилок</li>
              </ul>
            </SlideIn>
            <SlideIn className="catalog__block">
              <h4 className="catalog__title">4. Диоксид кремния «SILEX»®</h4>
              <ul className="catalog__list">
                <li>
                  Техническая добавка для сорбции влаги и стабилизации формул
                </li>
              </ul>
            </SlideIn>
          </div>
        </article>
      </div>
    </section>
  );
}
