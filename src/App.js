import { useState } from 'react'; // função importada do react
import './app.css';


export default function App() {
  const [peso, setPeso] = useState('') //useState recebe a info no input, 'setPeso' muda no formulario 
  const [altura, setAltura] = useState('')
  const [mensagem, setMensagem] = useState('');

  function calculoIMC() {

    const alt = altura / 100;
    const imc = peso / (alt * alt)

    if (imc < 18.5) {
      setMensagem('VOCÊ ESTÁ COM MAGREZA, SEU IMC: ' + imc.toFixed(2)) //toFixed(2) deixa 2 casas apos a virgula
    } else if (imc >= 18.6 && imc <= 24.9) {
      setMensagem('VOCÊ ESTÁ COM O PESO NORMAL, SEU IMC: ' + imc.toFixed(2))
    } else if (imc >= 25 && imc <= 29.9) {
      setMensagem('VOCÊ ESTÁ COM SOBREPESO, SEU IMC: ' + imc.toFixed(2))
    } else if (imc >= 30 && imc <= 34.9) {
      setMensagem('VOCÊ ESTÁ COM OBESIDADE I, SEU IMC: ' + imc.toFixed(2))
    } else if (imc >= 35 && imc <= 40) {
      setMensagem('VOCÊ ESTÁ COM OBESIDADE II, SEU IMC: ' + imc.toFixed(2))
    } else if (imc > 40) {
      setMensagem('VOCÊ ESTÁ COM OBESIDADE III, SEU IMC: ' + imc.toFixed(2))
    }
  }

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <span>Calcule seu IMC</span>

      <div className="input-app" >

        <input type="text"
          placeholder="Digite seu peso em (KG)"
          value={peso} // valor atrelado ao input
          onChange={(e) => setPeso(e.target.value)} //seta o valor e muda 
        />
        <input type="text"
          placeholder="Digite sua Altura em (CM)"
          value={altura}// valor atrelado ao input
          onChange={(e) => setAltura(e.target.value)}//seta o valor e muda 
        />

        <button onClick={calculoIMC}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )

}