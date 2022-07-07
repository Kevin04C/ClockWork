import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { ClockWork } from '../components/ClockWork'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/clockwork' element={<ClockWork />}/> 
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  )
}
