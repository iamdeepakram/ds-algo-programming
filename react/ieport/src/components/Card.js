import './Card.css'

function Card({children}){
    return <div className='card' >
        {children}
    </div>
}


function CardWithImage({src, children}){
    return <Card>
        <div className='card-img' >
            <img src={src} />
        </div>
        <div>{children}</div>
    </Card>
}


function CardWithATitle({title, children}){
    return <Card>
        <h3>{title}</h3>
        <div>
            {children}
        </div>
    </Card>
}
export {
    Card,
    CardWithImage,
    CardWithATitle
}