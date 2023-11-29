export default function ContadorDisplay(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            heigth: "50px",
            width: "50px",
            borderRadius: "200px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "2rem",
            margin: "20px",
            padding: "10"
        }}>
            {props.numero}
        </div>
    )
}