export default function mouse() {
    const estilo = {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }
    return (
        <div style={estilo}>
            <span>Eixo X: ?</span>
            <span>Eixo Y: ?</span>
        </div>
    )
}