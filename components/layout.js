import Card from './assets/card'
import Experience from './assets/experience'
import Footer from './assets/footer'

export default function Layout({ children }) {
    return (
        <div>
            <main>
                <Card />
                <Experience />
                <Footer />
                {children}
            </main>
        </div>
    )
} 
