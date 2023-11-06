import { useEffect, useState } from "react"
import styles from './Header.module.css'

const Header = () => {

    const [nome, setNome] = useState('')

    useEffect(() => {
        setNome(prompt('Digite seu nome'))
    }, [])

    return (
        <div className={styles.header}>
            <h1>Calculadora de IMC</h1>
            <h2>Bem-vindo <span className={styles.spanMessage}>{nome}</span></h2>
        </div>
    )
}

export default Header