import React from "react";
import Card from './component/Card'
import Data from './data'





const App = () => {

  const Address = Data.map((item, index) => <Card key={index} CountryName={item.CountryName} CapitalName={item.Capital} City={item.City} />)

  return (
    <div className='main'>
      <h1 className='header'>React First App</h1>
      {Address}

    </div>
  )
}



export default App;