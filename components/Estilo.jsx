export default function Estilo(props) {
    return (
        <div>
             <h1 sytle={{backgroundColor: props.numero > 0 ? "#2D2" : "#D22", color: props.color, }}>
             TEXTO
            </h1> 
        </div>
    )
}