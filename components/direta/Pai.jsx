import Filho from "./Filho"

export default function Pai(props) {
    return (
        <div>
            
           <Filho nome="Pedro"familia="Reis"/>
           <Filho nome="Joana"familia="Reis"/>
           <Filho nome="Gabriel"familia="Reis"/>
        </div>
    )
}