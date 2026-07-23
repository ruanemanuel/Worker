import './index.css'
import View from "./View"
function App() {

  if(document.startViewTransition()){
    document.startViewTransition(() => {
      return (
        <>
          <View />
        </>
      )
    })
  }

  return(
    <>
    <View />
    </>
  )
}

export default App
