import Item from "../../../components/item";
import Lista from "../../../components/lista";

export default function componenteComFilho() {
    return (
        <div>
       <Lista>
        <Item conteudo="Item #01" />
        <Item conteudo="Item 02" />
        <Item conteudo="Item 10" />
        <Item conteudo="Item 15" />
        </Lista>
        </div>
    
    )
}