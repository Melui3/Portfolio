import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout    from './components/Layout'
import ClarityConsent from './components/ClarityConsent'
import Seo       from './components/Seo'
import Home      from './pages/Home'
import Projects  from './pages/Projects'
import Services  from './pages/Services'
import Creations from './pages/Creations'
import About     from './pages/About'
import Contact   from './pages/Contact'
import Legal     from './pages/Legal'
import Privacy   from './pages/Privacy'
import Cookies   from './pages/Cookies'
import Terms     from './pages/Terms'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Seo />
      <Layout>
        <Routes>
          <Route path="/"                element={<Home />}      />
          <Route path="/projets"         element={<Projects />}  />
          <Route path="/services"        element={<Services />}  />
          <Route path="/creations"       element={<Creations />} />
          <Route path="/apropos"         element={<About />}     />
          <Route path="/contact"         element={<Contact />}   />
          <Route path="/mentions-legales" element={<Legal />}    />
          <Route path="/politique-confidentialite" element={<Privacy />} />
          <Route path="/cookies"         element={<Cookies />}   />
          <Route path="/conditions-prestation" element={<Terms />} />
        </Routes>
      </Layout>
      <ClarityConsent />
    </BrowserRouter>
  )
}
