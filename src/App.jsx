import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout    from './components/Layout'
import Home      from './pages/Home'
import Projects  from './pages/Projects'
import Creations from './pages/Creations'
import About     from './pages/About'
import Contact   from './pages/Contact'
import Legal     from './pages/Legal'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/"                element={<Home />}      />
          <Route path="/projets"         element={<Projects />}  />
          <Route path="/creations"       element={<Creations />} />
          <Route path="/apropos"         element={<About />}     />
          <Route path="/contact"         element={<Contact />}   />
          <Route path="/mentions-legales" element={<Legal />}    />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
