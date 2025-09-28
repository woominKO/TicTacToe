import { useState } from 'react'
import "./App.css"


function App() {
  
  function Square(){
    return(
      <tr>
      <td></td>
      <td></td>
      <td></td>
      </tr>
    )
  }

  return (
    <>
      <table border="1">
        <Square/>
        <Square/>
        <Square/>
        
      </table>
    </>
  )
}

export default App
