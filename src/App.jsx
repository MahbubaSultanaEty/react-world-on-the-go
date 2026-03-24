
import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'


const countriesPromise= fetch("https://openapi.programming-hero.com/api/all").then(res=> res.json())

function App() {
 

  return (
    <>    
        
        <div>
        <Suspense fallback={<p>Page Loading</p>}>
          <Countries countriesPromise={countriesPromise}></Countries>
        </Suspense>
        </div> 
     
    </>
  )
}

export default App
