import React from 'react'
import { Route, Routes } from "react-router";
import Home from './pages/Home'
import About from './pages/About'
import CreateUser from './components/CreateUser';
import Update from './components/Update';

const App = () => {
  return (
    <div>
<Routes>
  <Route index element={<Home />} />
  <Route path="/about" element={<About />} />
 <Route path="/createuser" element={<CreateUser />} />
 <Route path="/update/:id" element={<Update />} />
</Routes>
    </div>
  )
}

export default App
