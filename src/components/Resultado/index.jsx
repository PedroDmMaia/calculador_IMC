import styles from './Resultado.module.css'

const Table = (resultado) => {
    if (resultado < 18.5) {
        return (
            <>

                <td>Abaixo do peso</td>
                <td>Abaixo de 18,5</td>

            </>
        )
    } else if (resultado > 18.4 && resultado < 25) {
        return (
            <>

                <td>Peso Normal</td>
                <td>18,5 - 24,9</td>

            </>
        )
    } else if (resultado > 24 && resultado < 30) {
        return (
            <>

                <td>Sobre Peso</td>
                <td>25 - 29,9</td>

            </>
        )
    } else if (resultado > 29 && resultado < 35) {
        return (
            <>

                <td>Obesidade Grau I</td>
                <td>30 - 34,9</td>

            </>
        )
    } else if (resultado > 34 && resultado < 40) {
        return (
            <>

                <td>Obesidade Grau II</td>
                <td>35 - 39,9</td>

            </>
        )
    } else {
        return (
            <>

                <td>Obesidade Grau III ou Móbida</td>
                <td>Maior ou igual a 40</td>

            </>
        )
    }
}

// eslint-disable-next-line react/prop-types
const Resultado = ({ resultado }) => {
    return (
        <>
            <div className={styles.resultado}>
                <h2>
                    Seu imc é de: <span className={styles.imcSpan}>{resultado}</span>
                </h2>
            </div>

            <table className={styles.tabela}>
                <thead className={styles.tabelaHeader}>
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    <tr>
                        {Table(resultado)}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Resultado