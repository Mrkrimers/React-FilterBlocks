import { Routes, Route } from "react-router-dom"
import JobPage from "./Page/JobPage"
import VacancyPage from "./Page/VacancyPage/VacancyPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JobPage />}></Route>
        <Route path="/vacancy/:id" element={<VacancyPage />}></Route>
      </Routes>
    </>
  )
}

export default App
