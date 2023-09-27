function SeuNome({ setNomeState }) {
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input
                type="text"
                placeholder="Qual é o seu nome?"
                onChange={(e) => setNomeState(e.target.value)}
            />
        </div>
    )
}

export default SeuNome