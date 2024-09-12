import LoginSignup from './Components/LoginSingup/LoginSIngup';
import HomePage from './Components/HomePage/HomePage'

// Componente principal da aplicação
const App = () => {
  return (
    <div>
      {/* Renderiza o componente LoginSignup */}
      <HomePage />
    </div>
  )
}

// Exporta o componente App para uso em outras partes da aplicação
export default App;