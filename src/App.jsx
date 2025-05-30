import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import NotFoundPage from "./pages/NotFoundPage"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/movies/:id" element={<MoviePage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App
