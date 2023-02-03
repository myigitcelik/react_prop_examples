import './TravelCard.css'

export default function TravelCard(props){
    return(
         <div className="tc">
            <img className="tc--cover" src={props.item.coverImg} alt=""></img>
            <div className ="tc--text-col">
                <div className="tc--country-row"> 
                    <img className="tc--pinpoint" src="./images/map-locator.png"></img>
                    <p className="tc--country">{props.item.country}</p>
                </div>
                <p className="tc--title">{props.item.title}</p>
                <p className="tc--description">{props.item.description}</p>
                
            </div>
        </div>
    )
}