export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={() => props.funcao("Passe")}>Falar com o Pai</button>
        </div>
    )
}