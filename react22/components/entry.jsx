export default function EN(props){
    return (
        <article>
            <div className="imgcont">
                <img src={props.img.src} alt={props.img.alt} />
            </div>
            <div>
                <span>{props.country}</span>
                <h2>{props.title}</h2>
                <p className="entrydate">{props.date}</p>
                <p className="entrytext">
                    {props.text}
                </p>
            </div>
        </article>
    )
}