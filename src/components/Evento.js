import Button from "./Button"

function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, foi ativado o botão ${numero}`)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento')
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro evento" />
            <Button event={segundoEvento} text="Segundo evento" />
            <button onClick={meuEvento}>Botão {numero}</button>
        </>
    )
}

export default Evento