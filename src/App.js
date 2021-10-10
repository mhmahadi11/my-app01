import React from "react";
// import { Component } from "react/cjs/react.production.min";
import Card from './component/Card'
import Data from './data'
import { Component } from 'react'





// const App = () => {

//   const Address = Data.map((item, index) => <Card key={index} CountryName={item.CountryName} CapitalName={item.Capital} City={item.City} />)

//   return (
//     <div className='main'>
//       <h1 className='header'>React First App</h1>
//       {Address}

//     </div>
//   )
// }




class App extends Component {

  render() {

    const Address = Data.map((item, index) => <Card key={index} CountryName={item.CountryName} CapitalName={item.Capital} City={item.City} />)

    return (
      <div className='main'>
        <h1 className='header'>React First App</h1>
        {Address}

      </div>
    )
  }
}




export default App;