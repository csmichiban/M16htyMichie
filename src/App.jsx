import { useState } from 'react'
import './App.css'
import {data} from './constants'


function App() {
  const [currentData, setCurrentData] = useState(0)
  return (
    <div className="App">
      <img src={`${import.meta.env.BASE_URL}mcbn_alternate_logo.png`} width={150} />
      <div className='text-container'>
          <h1>{data[currentData].username}</h1>
          <p>{data[currentData].text}</p>
          <p className='pages'>{currentData} / {data.length - 1}</p>
      </div>
      <div className='btn-container'>
        <button className='btn' disabled={currentData === 0} onClick={() => setCurrentData(currentData - 1)}>Prev</button>
        <button className='btn' disabled={currentData === data.length - 1} onClick={() => setCurrentData(currentData + 1)}>Next</button>
      </div>
    </div>
  )
}

export default App
