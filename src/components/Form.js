import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} cadastrado com a senha ${password}!`)
        console.log("Cadastrou o usuário")
    }

    const [name, setName] = useState('Nome default')
    const [password, setPassword] = useState()

    return (
        <div>
            <h4>Meu cadastro</h4>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite o seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form