import "./style.css"
export const Lista = () => {
    const lista = [
        {
            nome: "Projeto Novo",
            responsavel: "Fernando Carlos",
            valor: 1200
        },
        {
            nome: "Projeto Mar",
            responsavel: "Carlos",
            valor: 4000
        },
        {
            nome: "Dog New",
            responsavel: "Fernando",
            valor: 400
        }
    ];
console.log(lista);

    return(
     <main className="lista">
        <section className="content-list">
            <h1>Lista</h1>
            <img src="http://lorempixel.com.br/500/400/?1" alt="" />

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt corporis excepturi dignissimos,
            eum vero hic sit nulla distinctio? Consequatur molestias voluptates, aperiam quidem hic unde corrupti repellat
            cumque beatae.
            </p>
        </section>

        <section className="list-name">
            <h1>Lista Nomes</h1>
                {lista.map((item, index) => {
                    return (
                        <div key={index} className="listagem">
                            <strong>Nome: </strong> <span> {item.nome} </span> <br />
                            <strong>Responsavel: </strong> <span> {item.responsavel} </span> <br />
                            <strong>Valor: </strong> <span> {item.valor} </span>
                        </div>
                    )
                })}
        </section>
     </main>
    )
}