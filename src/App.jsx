import { useEffect, useState } from "react"
import Header from "./components/header"
import Resultado from "./components/Resultado"
import './app.css'

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [resultadoVisivel, setResultadoVisivel] = useState(false)

  const ImcCalc = () => {
    const Imc = peso / (altura * altura)
    return setResultado(Imc.toFixed(2))
  }

  useEffect(() => {
    resultado > 0 ? setResultadoVisivel(true) : setResultadoVisivel(false)
  }, [resultado])

  return (
    <div className="container">

      <div className="box">

        <Header />

        <form>
          <div>
            <label htmlFor="Altura">Altura em metros <span className="span">(Por exemplo: 1,70)</span></label>
            <input id="Altura" type="number" placeholder="Sua Altura" onBlur={({ target }) => parseInt(setAltura(target.value))} />
          </div>
          <div>
            <label htmlFor="Peso">Peso em kg <span className="span">(Por exemplo: 75)</span></label>
            <input id="Peso" type="number" placeholder="Seu Peso" onBlur={({ target }) => parseInt(setPeso(target.value))} />
          </div>
          <button type="button" onClick={ImcCalc}>Calcular</button>
        </form>

      </div>

      {resultadoVisivel && (
        <Resultado resultado={resultado} />
      )}

    </div>
  )
}

export default App
