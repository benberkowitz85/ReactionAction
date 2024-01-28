// importing components
import Header from '.\components\Header'
import Footer from '.\components\Footer'
import MainPage from '.\components\MainPage'
import Nav from '.\components\Nav'
import { useLocation } from 'react-router-dom'
import 'src\App.css'

function App() {
  // useLocation() is a hook that returns the location object that represents the current URL. Used to determine which page is currently being viewed.
  const currentPage = useLocation().pathname;

  return (
    <div className="App">
      <Header >
        {/* Nav passed as a property in header component*/}
      <Nav currentPage={currentPage} />
      </Header>
      <main>
      <MainPage currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  )
}

export default App