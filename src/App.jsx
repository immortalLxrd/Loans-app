import { useState } from 'react'
import './styles/App.scss'
import Loans from './components/Loans'

const App = () => {
  const [userBalance, setUserBalance] = useState(238.456)

  return (
    <div className="App">
      <Loans userBalance={userBalance} setUserBalance={setUserBalance}/>
    </div>
  )
}

export default App
