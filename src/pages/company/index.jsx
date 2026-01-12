import Banner from "../../components/banner";
import CompaniContent from "../../components/companiContent";
import CompaniInfo from "../../components/companiInfo";
import Footer from "../../components/footer";
import MobMenu from "../../components/mobMenu";

export default function Company(params) {
  return (
    <>
      <Banner
        img={"/img/company.jpg"}
        title={"О НАШЕЙ КОМПАНИИ"}
        description={
          "«СИЛЕКС-АГРО» – Инжиниринг и контрактное производство препаратов на основе диоксида кремния <br> "
        }
        textBut={"Читать далее"}
        link={"#cc"}
        seoTitle="О компании СИЛЕКС-АГРО | Производитель препаратов на основе SiO₂"
        seoDescription="СИЛЕКС-АГРО - российский производитель с собственной технологией производства диоксида кремния. Вертикальная интеграция с 2007 года."
        seoKeywords="производитель диоксида кремния, SiO₂ производство, биопрепараты Россия, сельское хозяйство"
        ogImage="/img/company.jpg"
        canonical="https://silex-agro.ru/company"
      />
      <CompaniContent />
      <CompaniInfo />
      <Footer />
      <MobMenu />
    </>
  );
}
