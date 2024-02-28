import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Main from "./pages/Main"
import SpeedNumber from "./pages/SpeedNumber"
import CheckNumber from './components/CheckNumber'
import SpeedNumberLook from "./components/SpeedNumber/SpeedNumberLock"
import { useSelector } from "react-redux"
import BinarNumberLook from "./components/BinarNumber/BinarNumberLook"
import BinarNumber from "./pages/BinarNumber"
import Face from "./pages/Face"
import FindCard from "./pages/FindCard"
import Login from "./pages/Login"
import { Account } from "./pages/Account"





function App() {


  const {numberTime}=useSelector(state=>state.number)
  const {isUser}=useSelector(state=>state.user)

  return (
    <>
    {localStorage.getItem('user')||isUser?
    <div className=" pointer-events-none">
    <Sidebar/>
    <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/account" element={<Account />} />
          <Route path="/speed-number" element={<SpeedNumber/>}/>
          <Route path="speed-number/look" element={<SpeedNumberLook time={numberTime}/>}/>
          <Route path="check-number" element={<CheckNumber/>} />
          <Route path="binar-number" element={<BinarNumber/>} />
          <Route path="binar-number/look" element={<BinarNumberLook time={numberTime}/>}/>
          <Route path="find-face" element={<Face/>} />
          <Route path="card" element={<FindCard/>} />
        </Route>
    </Routes>
    </div>
    :
    <Login/>
  }
    </>
  )
}

export default App
