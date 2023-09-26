import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <Item marca="Toyota" ano_lancamento={2000} />
                <Item marca="Fiat" ano_lancamento={1990} />
                
                <p>Utilizando default props</p>
                <Item />
            </ul>
        </>
    )
}

export default List