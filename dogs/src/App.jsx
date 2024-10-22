import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { UserStorage } from './UserContext';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';
import { User } from './Components/User/User';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='login/*' element={<Login />}></Route>
            <Route path='conta/*' element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>}>
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

{/* Ao adicionar a barra e asterisco em path, é indicado que a rota possui subrotas*/}

export default App;
