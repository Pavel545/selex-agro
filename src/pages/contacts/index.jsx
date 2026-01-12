import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Fos from "../../components/fos";
import InfoLocation from "../../components/infoLocation";
import Map from "../../components/map";
import MobMenu from "../../components/mobMenu";

export default function Contacts(params) {
  return (
    <>
      <Banner
        img={"/img/contacts.jpg"}
        title={"Наши контакты"}
        content={<InfoLocation />}
        // SEO настройки
        seoTitle="Контакты СИЛЕКС-АГРО | Связаться с производителем"
        seoDescription="Контактная информация СИЛЕКС-АГРО. Производитель препаратов на основе диоксида кремния для сельского хозяйства."
        seoKeywords="контакты СИЛЕКС-АГРО, связаться с производителем, заказать биопрепараты"
        ogImage="/img/contacts.jpg"
        canonical="https://silex-agro.ru/contacts"
      />
      <Map />
      <Fos img={"/img/fonFOS3.jpg"} />
      <Footer />
      <MobMenu />
    </>
  );
}
