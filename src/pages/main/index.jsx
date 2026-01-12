import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Fos from "../../components/fos";
import Goods from "../../components/goods";
import MobMenu from "../../components/mobMenu";

export default function Main(params) {

    return <>
        <Banner
            img={"/img/mainB.jpg"}
            title={"СИЛЕКС-АГРО:"}
            description={"Контрактное производство микробных <br> препаратов"}
            textBut={"Свяжитесь с нами"}
            link={"mailto:info@silex-agro.ru"}

            seoTitle="СИЛЕКС-АГРО | Инжиниринг и контрактное производство препаратов"
            seoDescription="Разработка и производство препаратов на основе диоксида кремния для растениеводства и животноводства. Собственное производство с 2007 года."
            seoKeywords="диоксид кремния, SiO₂, биопрепараты, растениеводство, животноводство, контрактное производство"
            ogImage="/main-og.jpg"
            canonical="https://silex-agro.ru/"
        />
        <Goods  />
        <Fos img={"/img/fonFOS1.jpg"} />
<Footer />
      <MobMenu />

    </>
}