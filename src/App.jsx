import SignUp from './components/SignUp'
import Login from './components/Login'
import './App.css'

function App() {
  let div1 =document.getElementById("div1")
  function open (){
    div1.classList.toggle("translate-x-full")
    
  }
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center'>
      <div id='div1' className='w-[400px] h-auto flex translate-x-full '>
      <SignUp/>
      <button onClick={open} className='ab' >login</button>
      
      </div>
      <div className='w-[400px] h-auto flex '>
      <Login/>
      
      </div>
      </div>
    
    </>
  )
}


export default App
