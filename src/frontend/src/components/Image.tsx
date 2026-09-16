import './image.css';

type ImageInfo = {
    source: string;
    tags: string[];
    id: string;
    description: string;
    title: string;
    src: string;
}

export function Image({image}:{image:ImageInfo}) {
    return (
        // <h2>
        //     {image.source}
        //     <img src={image.src} alt={image.title}/>
        //     <p>
        //         {image.tags}
        //     </p>
        // </h2>
        <div id="imgCard">
            <img className="image" src={image.src} alt={image.title}/>
            <h4 className="imageTitle">{image.title}</h4>
            <h5 className="imageSource">{image.source}</h5>
        </div>
    )
}

