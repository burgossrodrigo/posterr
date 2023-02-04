import { Posts, Users } from './data'
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePage from './pages';




function App() {

  useEffect(() => {
    if(localStorage.Posts === undefined){
      localStorage.setItem('Posts', JSON.stringify(Posts))
    }

    if(localStorage.Users === undefined){
      localStorage.setItem('Users', JSON.stringify(Users))
    }
    console.log(localStorage.Users)

  }, [])



  return (
    <BrowserRouter>
      <Routes>        
        <Route path="/" element={<SinglePage />} />
        <Route path="/following" element={<SinglePage />} />
        <Route path="/user/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
