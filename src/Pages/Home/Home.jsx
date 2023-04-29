import './Home.css'
import { useSelector } from 'react-redux'

export default function Home() {
const user = useSelector((state) => {console.log(state.user)})

  return (
    <>
    this is the home page that is used basically as a splash page where is allows you to sign in and login
    </>
  )
}


