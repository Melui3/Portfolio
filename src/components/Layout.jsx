import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-ink">
      <Header />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
