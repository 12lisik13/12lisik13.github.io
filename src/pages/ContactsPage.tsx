import { siteData } from '../content/siteData'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function ContactsPage() {
  return (
    <main>
      <Testimonials items={siteData.testimonials} />
      <Contact data={siteData.contact} />
    </main>
  )
}

