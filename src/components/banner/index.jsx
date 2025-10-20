import { SlideIn } from "../../module/motion";
import SEO from "../../module/seo";
import Header from "../header";
import "./css/style.css";

export default function Banner({
  img,
  title,
  description,
  link,
  textBut,
  content = null,
  bg = null,
  // SEO пропсы
  seoTitle,
  seoDescription,
  seoKeywords,
  ogImage,
  canonical,
  noindex
}) {

  return (
    <>
      {/* SEO компонент */}
      <SEO
        title={seoTitle || title}
        description={seoDescription || description}
        keywords={seoKeywords}
        ogImage={ogImage}
        canonical={canonical}
        noindex={noindex}
      />

      <div className={bg ? "banner -dark" : "banner"} style={{ "--bg": `url(${img})` }}>
        <Header />
        <div className="container">
          <div className={content ? "banner-content flex -max" : "banner-content flex "}>
            <SlideIn>
              <h1 className="h1">
                {title}
              </h1>
            </SlideIn>


            {content ?
              content :
              <>
               <SlideIn delays={0.2}>
                 <p dangerouslySetInnerHTML={{ __html: description }} className="banner-description">
                </p>
               </SlideIn>

                <SlideIn delays={0.3}>
                  <a href={link} className="button -t1">
                  {/* <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%" />
                  </svg> */}
                  <span>
                    {textBut}
                  </span>
                </a>
                </SlideIn>
              </>
            }
          </div>
        </div>
      </div>
    </>
  )
}