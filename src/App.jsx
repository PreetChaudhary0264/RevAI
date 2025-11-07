import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GetStarted from "./pages/GetStarted";
import NotFound from "./pages/NotFound";
import { ToastContainer } from 'react-toastify';
import Warmup from './pages/Warmup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/wake" element={<Warmup />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
