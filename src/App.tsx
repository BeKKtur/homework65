import './App.css';
import AppBar from "./components/AppBar/AppBar";
import {Route, Routes} from "react-router-dom";
import Fetch from "./components/Fetch/Fetch";
import Home from "./components/Home/Home";

function App() {

  return (
    <>
      <header>
        <AppBar/>
      </header>
      <main>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/blog" element={<Fetch/>}></Route>
              <Route path="/about" element={<Fetch/>} />
              <Route path="/contacts" element={<Fetch/>} />
              <Route path="/class" element={<Fetch/>} />
              <Route path="/play" element={<Fetch/>} />
              <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
      </main>
    </>
  )
}

export default App
