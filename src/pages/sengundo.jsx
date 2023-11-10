export default function jsx() {
    const subtitulo = "Estou no Javascript"
    return (
        <div>
            <h1>Intregação JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h2> {3 * 3} </h2>
            <h4> {Math.max(19, 39)}</h4>
            <h5>{entre(30, 1, 10)}</h5>

        </div>
    )
}

function entre(valor, min, max) {
    if (valor > min && valor < max) {
        return "sim"
    } else {
        return "não"
    }
}