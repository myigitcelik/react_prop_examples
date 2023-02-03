
import TravelCard from "./TravelCard"
import travel from "./travels"
import './Content.css'

export default function Content(){
    const cards = travel.map(item => {
        return (
            <TravelCard
                item={item}
            />
        )
    })   
    return (
        <div className="content--col">
            {cards}
            <hr />
        </div>
    )
}