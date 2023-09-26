function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, foi ativado o botão ${numero}`)
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Botão {numero}</button>
        </>
    )
}

export default Evento