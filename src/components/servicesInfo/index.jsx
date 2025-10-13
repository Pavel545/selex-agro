import { MoveLeft, MoveRight } from "../../module/motion";
import SectionHead from "../../module/sectionHead";
import "./css/style.css"

export default function ServicesInfo(params) {


    return (
        <>
            <section className="services-info-al">
                <div className="container ">
                    <SectionHead
                        title={" "}
                        discription={"Мы предоставляем полный цикл услуг по переработке вашего давальческого сырья из жидкой формы в сухую, получению готового продукта, его фасовке и отгрузки."}
                    />
                    <div className="services-info-al_content">
                        <div className="services-info-al_content_item">
                            <h3>
                                Прием и хранение
                            </h3>

                            <ul>
                                <li>
                                    <b>
                                        Приемка и складирование давальческого сырья</b> гарантируем сохранность и правильный учет ваших материалов (работаем по форме МХ-15 с предоставлением отчета).
                                </li>

                            </ul>
                        </div>

                        <div className="services-info-al_content_item">
                            <h3>
                                Производственные операции
                            </h3>

                            <ul>
                                <li>
                                    <b>
                                        Смешивание сухих и жидких компонентов   </b> точное дозирование и однородное смешивание по вашим рецептурам.
                                </li>
                                <li>
                                    <b>
                                        Гранулирование сухих и жидких компонентов
                                    </b> превращение сыпучих материалов в удобные для использования гранулы.
                                </li>
                                <li>
                                    <b>
                                        Сушка и классификация готовой продукции
                                    </b> доведение продукта до требуемых кондиций и калибровка.
                                </li>
                            </ul>
                        </div>

                        <div className="services-info-al_content_item">
                            <h3>
                                Упаковка и фасовка
                            </h3>

                            <ul>
                                <li>
                                    <b>
                                        Крупная фасовка</b> фасовка в мешки «Биг-Бег» или бумажные мешки.
                                </li>
                                <li>
                                    <b>
                                        Мелкоштучная фасовка для маркетплейсов (под ключ) 
                                    </b> пластиковая банка 200 мл с крышкой, этикетирование банки, упаковка в гофрокоробку

                                </li>

                            </ul>
                        </div>

                        <div className="services-info-al_content_item">
                            <h3>
                                Контроль качества и логистика
                            </h3>

                            <ul>
                                <li>
                                    <b>
                                        Контроль качества готовой продукции в лаборатории   </b> обеспечение соответствия вашим стандартам.
                                </li>
                                <li>
                                    <b>
                                        Хранение продукции в закрытых складских помещениях    </b> безопасное хранение до момента отгрузки (собственные складские помещения площадью 5000 м2).
                                </li>
                                <li>
                                    <b>
                                        Отгрузка готовой продукции авто и ж/д транспортом 
                                    </b> организация отправки продукции любым видом транспорта.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            <section className="services-info">
                <div className="container">
                    <SectionHead
                        title={"НАШИ УСЛУГИ"}
                        discription={"Наша компания предлагает полный цикл услуг, идеально подходящий для производителей биопрепаратов, химических ингредиентов, продуктов для АПК (кормовых добавок, удобрений, средств защиты) и товаров для маркетплейсов. "}
                    />

                    <div className="services-info-grid">

                        <MoveLeft className="services-info-item -left -i1" style={{ "--bg": `url(/img/services/1.jpg)` }}>
                            <h3>
                                Приемка и складирование давальческого сырья
                            </h3>
                            <p>

                                Эффективное управление и хранение вашего сырья на всех этапах
                            </p>
                        </MoveLeft>

                        <MoveRight className="services-info-item -right -i2" style={{ "--bg": `url(/img/services/2.jpg)` }}>
                            <h3>
                                Смешивание сухих и жидких компонентов
                            </h3>
                            <p>

                                Эффективное управление и хранение вашего сырья на всех этапах
                            </p>
                        </MoveRight>

                        <MoveLeft className="services-info-item -left -i3" style={{ "--bg": `url(/img/services/3.jpg)` }}>
                            <h3>
                                Гранулирование сухих и жидких компонентов
                            </h3>
                            <p>

                                Преобразование ваших продуктов в удобные гранулы для применения.
                            </p>
                        </MoveLeft>

                        <MoveRight className="services-info-item -right -i4" style={{ "--bg": `url(/img/services/4.jpg)` }}>
                            <h3>
                                Сушка и классификация готовой продукции
                            </h3>
                            <p>

                                Обеспечение оптимальной влажности и точного размера частиц вашей продукции.
                            </p>
                        </MoveRight>

                        <MoveLeft className="services-info-item -left -i5" style={{ "--bg": `url(/img/services/5.jpg)` }}>
                            <h3>
                                Фасовка (в мешки «Биг-Бег» или бумажные мешки)
                            </h3>
                            <p>

                                Профессиональная упаковка продукции в крупные и стандартные мешки.
                            </p>
                        </MoveLeft>

                        <MoveRight className="services-info-item -right -i6" style={{ "--bg": `url(/img/services/6.jpg)` }}>
                            <h3>
                                Мелкоштучная фасовка для маркетплейсов
                            </h3>
                            <p>

                                Полный цикл упаковки: пластиковая банка 200 мл с крышкой, этикетирование, упаковка в гофрокоробку.
                            </p>
                        </MoveRight>

                        <MoveLeft className="services-info-item -left -i7" style={{ "--bg": `url(/img/services/7.jpg)` }}>
                            <h3>
                                Контроль качества в микробиологической лаборатории
                            </h3>
                            <p>

                                Строгий контроль и анализ вашей продукции для подтверждения высоких стандартов.
                            </p>
                        </MoveLeft>

                        <MoveRight className="services-info-item -right -i8" style={{ "--bg": `url(/img/services/8.jpg)` }}>
                            <h3>
                                Отгрузка продукции авто и Ж/Д транспортом
                            </h3>
                            <p>

                                Своевременная доставка продукции любым видом наземного транспорта.
                            </p>
                        </MoveRight>
                    </div>
                </div>
            </section>

        </>
    )
}