import Card from './assets/card'
import Skills from './assets/skills'
import Footer from './assets/footer'

export default function Layout({ children }) {
    return (
        <div>
            <main>
                <Card />
                <Skills />
                <Footer />
                {children}
            </main>
        </div>
    )
} 