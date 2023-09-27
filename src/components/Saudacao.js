function Saudacao({ nomeState }) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
        <>
            {nomeState && <p> { gerarSaudacao(nomeState) }</p>}
        </>
    )
}

export default Saudacao