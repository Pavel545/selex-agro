import { MoveLeft } from "../../module/motion";
import CompaniCreate from "../companiCreate";
import "./css/style.css";

export default function Footer(params) {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="header-links flex">
          <a className="header-logo" href="/">
            <img src="/img/logo.png" alt="Логотип компании Селекс-агро" />
          </a>

          <nav className="flex header-links_items">
            <MoveLeft delays={0.1}>
              <a href="/" className="header-links_item ho-1">
                Главная
              </a>
            </MoveLeft>
            <MoveLeft delays={0.15}>
              <a href="/company" className="header-links_item ho-1">
                О компании
              </a>
            </MoveLeft>
            <MoveLeft delays={0.2}>
              <a href="/our_products" className="header-links_item ho-1">
                Товары
              </a>
            </MoveLeft>
            <MoveLeft delays={0.25}>
              <a href="/services" className="header-links_item ho-1">
                Услуги
              </a>
            </MoveLeft>
            <MoveLeft delays={0.3}>
              <a href="/contacts" className="header-links_item ho-1">
                Контакты
              </a>
            </MoveLeft>
            {/* <MoveLeft delays={0.35}>
              <a href="/stati" className="header-links_item ho-1">
                Статьи
              </a>
            </MoveLeft> */}
          </nav>

          <nav className="header-links_icons flex">
            <a
              href="https://t.me/+79372751295"
              className="header-links_icon ho-icon flex--center"
            >
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.9042 2.75473L25.3592 24.0322C25.0202 25.5307 24.1502 25.8682 22.8932 25.1917L16.0757 20.1637L12.7382 23.3542C12.4007 23.6932 12.0617 24.0322 11.2877 24.0322L11.8202 17.0197L24.5372 5.46373C25.0682 4.93123 24.3917 4.73773 23.7152 5.17423L7.90372 15.1342L1.08473 13.0552C-0.413764 12.5722 -0.413764 11.5552 1.42373 10.8802L27.9212 0.579738C29.2262 0.192739 30.3392 0.870737 29.9042 2.75473Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/79372751295"
              className="header-links_icon ho-icon flex--center"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0C23.2845 0 30 6.71549 30 15C30 23.2845 23.2845 30 15 30C12.3491 30.0045 9.74489 29.303 7.45502 27.9675L0.00602318 30L2.03402 22.548C0.69746 20.2574 -0.00462244 17.652 2.2903e-05 15C2.2903e-05 6.71549 6.71552 0 15 0ZM9.88801 7.94999L9.58801 7.96199C9.39405 7.97536 9.20454 8.0263 9.03001 8.11199C8.86738 8.20426 8.71886 8.31944 8.58902 8.45399C8.40902 8.62349 8.30702 8.77049 8.19752 8.91299C7.6427 9.63435 7.34398 10.52 7.34852 11.43C7.35152 12.165 7.54352 12.8805 7.84352 13.5495C8.45702 14.9025 9.46651 16.335 10.7985 17.6625C11.1195 17.982 11.4345 18.303 11.7735 18.6015C13.4287 20.0586 15.4009 21.1094 17.5335 21.6705L18.3855 21.801C18.663 21.816 18.9405 21.795 19.2195 21.7815C19.6563 21.7584 20.0827 21.6402 20.469 21.435C20.6653 21.3335 20.857 21.2234 21.0435 21.105C21.0435 21.105 21.107 21.062 21.231 20.97C21.4335 20.82 21.558 20.7135 21.726 20.538C21.852 20.408 21.957 20.257 22.041 20.085C22.158 19.8405 22.275 19.374 22.323 18.9855C22.359 18.6885 22.3485 18.5265 22.344 18.426C22.338 18.2655 22.2045 18.099 22.059 18.0285L21.186 17.637C21.186 17.637 19.881 17.0685 19.083 16.7055C18.9995 16.6691 18.91 16.6483 18.819 16.644C18.7164 16.6332 18.6126 16.6447 18.5148 16.6776C18.417 16.7104 18.3273 16.764 18.252 16.8345C18.2445 16.8315 18.144 16.917 17.0595 18.231C16.9973 18.3146 16.9115 18.3778 16.8132 18.4126C16.7149 18.4473 16.6085 18.452 16.5075 18.426C16.4097 18.3999 16.314 18.3668 16.221 18.327C16.035 18.249 15.9705 18.219 15.843 18.165C14.9818 17.7898 14.1847 17.2822 13.4805 16.6605C13.2915 16.4955 13.116 16.3155 12.936 16.1415C12.3459 15.5763 11.8316 14.937 11.406 14.2395L11.3175 14.097C11.2549 14.0007 11.2036 13.8975 11.1645 13.7895C11.1075 13.569 11.256 13.392 11.256 13.392C11.256 13.392 11.6205 12.993 11.79 12.777C11.955 12.567 12.0945 12.363 12.1845 12.2175C12.3615 11.9325 12.417 11.64 12.324 11.4135C11.904 10.3875 11.47 9.36699 11.022 8.35199C10.9335 8.15099 10.671 8.00699 10.4325 7.97849C10.3515 7.96849 10.2705 7.96049 10.1895 7.95449C9.98811 7.94294 9.78615 7.94494 9.58501 7.96049L9.88801 7.94999Z"
                  fill="white"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      <div className="footer-b container flex--sb">
        <nav className="footer-contact_box flex--fc">
          <a className="footer-contact ho-1" href="tel:+78424125855">
            +7 (842) 412-58-55
          </a>
          <a className="footer-contact ho-1" href="tel:+78005505872">
            +7 (800) 550-58-72
          </a>
          <a className="footer-contact ho-1" href="mailto:sales@silex-agro.ru">
            sales@silex-agro.ru
          </a>
        </nav>

        <a className="footer-politic ho-1" href="/politic">
          Политика обработки <br /> персональных данных
        </a>
      </div>
    </footer>
    <CompaniCreate/>
    </>
  );
}
