import AboutCategories from '@/components/About/AboutCategories'
import AboutCreators from '@/components/About/AboutCreators'
import AboutHero from '@/components/About/AboutHero'

const page = () => {
  return (
    <div
    style={{ fontFamily: 'var(--font-bricolage-grotesque)' }}>
    <AboutHero />
    <AboutCreators />
    <AboutCategories />
    </div>
  )
}

export default page