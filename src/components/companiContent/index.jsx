import React from "react";
import "./css/style.css";
import { SlideIn, FadeIn, MoveRight } from "../../module/motion";

const List = ({ items }) => (
    <ul className="cc__list">
    {items.map((t, i) => (
      <li key={i} className="cc__li">
        {t}
      </li>
    ))}
  </ul>
);

const Block = ({ title, children, accent }) => (
  <FadeIn delays={0.2}>
    <section className={`cc__block ${accent ? "cc__block--accent" : ""}`}>
    <h3 className="cc__block-title">{title}</h3>
    <div className="cc__block-body">{children}</div>
  </section>
  </FadeIn>
);

const ServiceItem = ({ n, title, text }) => (
  <SlideIn>
    <li className="cc__service">
    <div className="cc__service-num">{n}</div>
    <div className="cc__service-body">
      <div className="cc__service-title">{title}</div>
      <p className="cc__service-text">{text}</p>
    </div>
  </li>
  </SlideIn>
);

export default function CompaniContent() {
  return (
    <section className="cc" id="cc" aria-label="О компании СИЛЕКС-АГРО">
      <div className="container">
        <div className="cc__head">
          <SlideIn>
            <h2 className="cc__title">СИЛЕКС‑АГРО: технологии сухих форм</h2>
          </SlideIn>
          <SlideIn delays={0.1}>
            <p className="cc__lead">
            С 2007 года разрабатываем и производим эффективные препараты для
            растениеводства и животноводства на основе диоксида кремния(SiO₂).
          </p>
          </SlideIn>
          <SlideIn delays={0.2}>
            <p className="cc__lead">
            От идеи до готовой партии — быстрее, точнее, выгоднее.
          </p>
          </SlideIn>
        </div>

        {/* Ключевые преимущества */}
          <Block title="Наши ключевые преимущества" accent>
          <List
            items={[
              "Уникальные запатентованные технологии сухих форм, исключающие энергозатратные этапы сушки и помола.",
              "Полный цикл: от собственного производства SiO₂ до лаборатории и готового продукта.",
              "Гибкие формы выпуска: порошок, микрогранулы, гранулы.",
              "Работа под ваши нужды: от быстрого выпуска опытной партии до оптимизации рецептур.",
            ]}
          />
        </Block>

        {/* Производственные возможности */}
        <Block title="Производственные возможности">
          <div className="cc__grid">
            <SlideIn className={"cc__card"}>
              <h4 className="cc__card-title">Формы выпуска</h4>
              <List
                items={[
                  "Порошок (5–20 мкм)",
                  "Микрогранулы (0,1–1 мм)",
                  "Гранулы (4–6 мм)",
                ]}
              />
            </SlideIn>
            <SlideIn delays={0.2} className="cc__card">
              <h4 className="cc__card-title">Инфраструктура</h4>
              <List
                items={[
                  "Собственная современная лаборатория",
                  "Производственные линии полного цикла",
                ]}
              />
            </SlideIn>
          </div>
        </Block>

        {/* Услуги для партнёров */}
        <Block title="Услуги для партнёров" accent>
          <ol className="cc__services">
            <ServiceItem
              n={1}
              title="Контрактная разработка"
              text="Научное сопровождение, доработка и оптимизация рецептур под задачи заказчика."
            />
            <ServiceItem
              n={2}
              title="Контрактное производство"
              text="Быстрый выпуск опытных и промышленных партий."
            />
            <ServiceItem
              n={3}
              title="Готовые решения"
              text="Использование проверенных рецептур на основе действующего вещества заказчика."
            />
          </ol>
        </Block>

        {/* Сильные стороны */}
        <Block title="Сильные стороны компании «СИЛЕКС‑АГРО»">
          <ol className="cc__strong">
            <li className="cc__strong-item">
              <h5>1. Вертикальная интеграция</h5>
              <p>
                Собственный завод по производству диоксида кремния — контроль
                качества, себестоимости и логистики ключевого сырья.
              </p>
            </li>
            <li className="cc__strong-item">
              <h5>2. Уникальная технология</h5>
              <p>
                Запатентованный способ производства сухих форм исключает
                энергозатратные процессы (сушка, помол) и снижает себестоимость
                для клиента.
              </p>
            </li>
            <li className="cc__strong-item">
              <h5>3. Гибкость и клиентоориентированность</h5>
              <p>
                Услуги «под ключ»: от разработки рецептуры до научного
                сопровождения — для компаний любого масштаба, включая стартапы.
              </p>
            </li>
            <li className="cc__strong-item">
              <h5>4. Широкий спектр форм выпуска</h5>
              <p>
                От мелкого порошка до крупных гранул — под задачи удобрений, СЗР
                и кормовых добавок.
              </p>
            </li>
            <li className="cc__strong-item">
              <h5>5. Опыт и репутация</h5>
              <p>
                На рынке с 2007 года, сотрудничество с лидерами отрасли
                подтверждает надёжность и экспертизу.
              </p>
            </li>
          </ol>
        </Block>

        {/* Слоган */}
        <MoveRight className="cc__cta">
          <blockquote className="cc__quote">
            «Наши решения снижают ваши издержки и дают гарантированный
            результат. От идеи до готовой партии — с нами быстрее и выгоднее».
          </blockquote>
        </MoveRight>
      </div>
    </section>
  );
}
