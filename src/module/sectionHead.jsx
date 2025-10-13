import {  SlideIn } from "./motion";

export default function SectionHead({ title, discription, content }) {

    return (
        <div className="sect-head">
           <SlideIn>
             <h2 className="h2">
                {title}
            </h2>
           </SlideIn>
            <SlideIn delays={0.2}>
                {discription && <p dangerouslySetInnerHTML={{ __html: discription }} className="-discription ">
            </p>}
            {content}
            </SlideIn>
        </div>
    )
}