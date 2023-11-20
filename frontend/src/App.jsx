import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <>
     <Header />
     <ToastContainer />
     <Container className='my-2'>
        <Outlet />
     </Container>
    </>
  )
}

export default App
