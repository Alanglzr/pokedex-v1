import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/Home';
import { Generation } from './routes/Generation';
import { Detalles } from './routes/Detalles';
import { Layout } from './Layout';
import './estilos.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="lista-pokemon/:generationId" element={<Generation/>}/>
        <Route path="Pokemon/:pokemonId" element={<Detalles/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
);

