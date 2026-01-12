import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Fos from "../../components/fos";
import Goods from "../../components/goods";
import MobMenu from "../../components/mobMenu";

export default function OurProducts(params) {
  return (
    <>
      <Banner
        img={"/img/OurProducts.jpg"}
        title={"НАША ПРОДУКЦИЯ"}
        description={
          "Решает главные задачи АПК: от здоровья растений и <br class='br-desk'> урожайности до благополучия животных и кормовой<br class='br-desk'> безопасности."
        }
        textBut={"Перейти к товарам"}
        link={"#goods"}
        seoTitle="Продукция СИЛЕКС-АГРО | Биопрепараты для АПК"
        seoDescription="Биофунгициды, биоинсектициды, биостимуляторы роста, пробиотики для животных. Технология SILEX® с диоксидом кремния."
        seoKeywords="биофунгициды, биоинсектициды, биостимуляторы, пробиотики, сорбенты микотоксинов"
        ogImage="/img/OurProducts.jpg"
        canonical="https://silex-agro.ru/our_products"
      />
      <Goods all />
      <Fos img={"/img/fonFOS2.jpg"} />
      <Footer />
      <MobMenu />
    </>
  );
}
