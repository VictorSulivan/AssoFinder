import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout.tsx'
import './index.css'
import HomeView from './pages/HomeView.tsx'
import SearchView from './pages/SearchView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<HomeView/>} />
            <Route path='search' element={<SearchView/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
