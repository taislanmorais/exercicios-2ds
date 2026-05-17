export default function Profile({ foto, nome, idade, profissao }) {
    return(
        <>
            <div className="fotoNome">
                <img src={foto} />
                <h1>{nome}</h1>
            </div>

            <div className="idadeProfissao">
                <p>Idade: {idade} anos</p>
                <p>Profissão: {profissao}</p>
            </div>
        </>
    )
}