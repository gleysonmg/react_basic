function ListaItens({ itens }) {
    return (
        <>
            <h4>Tecnologias para estudo:</h4>
            {itens.length > 0 ? (
                itens.map((item, index) => 
                    <p key={index}>{ item }</p>
            )) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}

export default ListaItens