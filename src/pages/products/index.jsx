import { useParams } from "react-router-dom";
import "./css/style.css";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import MobMenu from "../../components/mobMenu";

const sorbentsStats = [
  { name: "Зеараленон", value: "99 %" },
  { name: "Афлатоксин (сумма)", value: "42 %" },
  { name: "Фумонизин", value: "39 %" },
  { name: "Охратоксин (сумма)", value: "25 %" },
  { name: "Т‑2 токсин", value: "5 %" },
];

const silexProps = [
  { k: "Массовая доля двуокиси кремния (SiO₂), %", v: "90,0" },
  { k: "Массовая доля водорастворимого SiO₂, мг/г", v: "30,0" },
  { k: "Средний размер частиц (D50), мкм", v: "5,0" },
  { k: "Массовая доля влаги, %", v: "2,0" },
  { k: "Пористость, %", v: "85,0" },
  { k: "Удельная поверхность, см²/г", v: "15 000" },
  { k: "pH водной вытяжки", v: "7" },
];

const blocks = {
  sorbents: {
    img: "/img/product/8.png",
    title: "Сорбенты микотоксинов по технологии SILEX®",
    lead: "Технология производства сорбентов для животных и птицы на основе диоксида кремния марки SILEX®.",
    sections: [
      {
        h: "Сорбционная ёмкость по микотоксинам",
        type: "kv",
        data: sorbentsStats,
      },
      {
        h: "Назначение",
        p: [
          "Повышение иммунного статуса и продуктивности сельскохозяйственных животных, сохранности поголовья, улучшение экологической чистоты и технологических свойств продукции.",
          "Может использоваться как источник водорастворимого кремния в составе премиксов, концентратов, всех видов кормов для сельскохозяйственных животных, птицы, пушных зверей и рыб.",
          "Содержание кремния оксид — не менее 90 %. Массовая доля водорастворимого кремния — не менее 30 мг/г.",
        ],
      },
      {
        h: "Результаты испытаний на цыплятах‑бройлерах",
        list: [
          "Иммунореактивный индекс: +10 %",
          "Сохранность поголовья: +7 %",
          "Среднесуточный привес: +10 %",
          "Эффективность использования кормов: +10 %",
        ],
      },
      {
        h: "Форма выпуска и упаковка",
        list: [
          "Форма выпуска — порошок.",
          "Упаковка: МКР 400 кг или бумажный мешок 15 кг.",
        ],
      },
    ],
  },
  silex: {
    img: "/img/product/9.png",
    title: "КРЕМНИЙ ДИОКСИД «SILEX»®",
    lead: "Тонкодисперсная двуокись кремния — пористый носитель для действующих веществ и микроорганизмов.",
    sections: [
      {
        h: "Области применения",
        p: [
          "Используется как вспомогательный пористый носитель для микроорганизмов, микроэлементов, кислот, витаминов и других действующих веществ при производстве удобрений, биопестицидов, пробиотиков, сорбентов микотоксинов, комплексных кормовых добавок, модификаторов и др. продуктов.",
          "В качестве микроорганизмов применяют: спорообразующие и неспорообразующие бактерии, актиномицеты, грибы (включая конидии, бластоспоры и мицелий), простейшие; Bacillus, Bradyrhizobium japonicum, Azotobacter, Pseudomonas, Beauveria, Trichoderma, Rhodococcus и др.",
        ],
      },
      {
        h: "Физико‑химические показатели (Таблица 1)",
        table: silexProps,
      },
      {
        h: "Примечание",
        p: [
          "По требованию клиента допускается выпуск «SILEX»® с другими характеристиками.",
        ],
      },
    ],
  },
};

function Title({ children }) {
  return <h2 className="pi__title">{children}</h2>;
}

function Lead({ children }) {
  return <p className="pi__lead">{children}</p>;
}

function KeyValueList({ data }) {
  return (
    <dl className="pi__kv">
      {data.map((row, i) => (
        <div className="pi__kv-row" key={i}>
          <dt>{row.name}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ProductsIts() {
  const { url } = useParams();
  const page = blocks[url] ?? blocks.sorbents; // fallback на sorbents

  return (
    <>
      <Banner
        bg
        img={page.img}
        title={page.title}
        description={page.lead}
        textBut={"Узнать больше"}
        link={"#pi"}
      />
      <section className="pi" aria-label={page.title}>
        <div className="container">
          <div className="pi__content">
            {page.sections.map((s, i) => (
              <article className="pi__block" key={i}>
                <h3 className="pi__h3">{s.h}</h3>
                {s.p &&
                  s.p.map((t, idx) => (
                    <p key={idx} className="pi__p">
                      {t}
                    </p>
                  ))}
                {s.list && (
                  <ul className="pi__list">
                    {s.list.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                )}
                {s.type === "kv" && <KeyValueList data={s.data} />}
                {s.table && (
                  <div className="pi__table-wrap">
                    <table className="pi__table">
                      <thead>
                        <tr>
                          <th>Наименование показателя</th>
                          <th>Значение</th>
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.map((row, rIdx) => (
                          <tr key={rIdx}>
                            <td>{row.k}</td>
                            <td>{row.v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="pi__footer">
            <div className="pi__note">
              Для уточнения характеристик и получения образцов свяжитесь с нами.
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobMenu />
    </>
  );
}
