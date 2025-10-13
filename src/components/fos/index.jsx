import "./css/style.css";

export default function Fos({ img }) {

    return <></>

    return (
        <section className="fos" id="fos" style={{ "--bgf": `url(${img})` }}>
            <div className="container">
                <div className="fos-form">
                    <form action="">
                        <h2 className="h2">
                            Оставьте заявку
                        </h2>

                        <p className="text">
                            Заполните анкету в форме заявки и мы свяжемся с вами в течение рабочего дня.
                        </p>

                        <div className="fos-inputGroop flex--fc">
                            <label className="fos-input_box" htmlFor="name">
                                <input type="text" id="name" name="name" placeholder="ИМЯ" />
                            </label>
                            <label className="fos-input_box" htmlFor="kompani">
                                <input type="text" id="kompani" name="kompani" placeholder="КОМПАНИЯ" />
                            </label>
                            <label className="fos-input_box" htmlFor="tel">
                                <input type="text" id="tel" name="tel" placeholder="ТЕЛЕФОН" />
                            </label>

                            <label className="politic ho-1" htmlFor="politic">
                                <input type="checkbox" name="politic" id="politic" />
                                <span class="checkmark"></span>

                                <span>Даю согласие на обработку персональных данных</span>
                            </label>


                        </div>

                        <button className="button -t2 ">
                            <span>Отправить</span>
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}