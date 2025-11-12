import Banner from "../../components/banner";
import Production from "../../components/production";
import ServicesInfo from "../../components/servicesInfo";
import Footer from '../../components/footer';
import MobMenu from '../../components/mobMenu';

export default function Services(params) {
  return (
    <>
      <Banner
        img={"/img/services.jpg"}
        title={"наши услуги"}
        description={
          "Объединяем современное производство и <br> широкий спектр услуг для агропромышленного <br> комплекса."
        }
        textBut={"Узнать больше"}
        link={"#production"}
        // SEO настройки
        seoTitle="Услуги контрактного производства | СИЛЕКС-АГРО"
        seoDescription="Контрактное производство биопрепаратов: смешивание, гранулирование, сушка, фасовка. Полный цикл услуг для производителей АПК."
        seoKeywords="контрактное производство, давальческое сырье, фасовка, гранулирование, смешивание компонентов"
        ogImage="/img/services.jpg"
        canonical="https://silex-agro.ru/services"
      />

      <Production />
      {/* <BioproductsInfo/> */}
      <ServicesInfo />
      <Footer />
      <MobMenu />
    </>
  );
}
