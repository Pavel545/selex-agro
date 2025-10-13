import SectionHead from "../../module/sectionHead";

export default function Map(params) {
    

    return (
        <section className="map sect">
            <div className="container">
                <SectionHead
                    title={"КАК ДОБРАТЬСЯ "}
                />
                

                <div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2ce28912fca734571eacaf42499463bf0912e7d9aa8d7113e3e52229ea8be2b6&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
                </div>
            </div>
        </section>
    )
}