import { WorkshopProvider } from './context/WorkshopContext'
import { useReveal } from './hooks/useReveal'
import { InkFilters } from './components/ui/Stamp'
import PrototypeBanner from './components/layout/PrototypeBanner'
import SiteHeader from './components/layout/SiteHeader'
import WorkshopDock from './components/layout/WorkshopDock'
import FeedbackPanel from './components/layout/FeedbackPanel'
import SiteFooter from './components/layout/SiteFooter'
import Hero from './sections/Hero'
import About from './sections/About'
import WhatWeDo from './sections/WhatWeDo'
import TinkHerHack from './sections/TinkHerHack'
import Events from './sections/Events'
import Community from './sections/Community'
import GetInvolved from './sections/GetInvolved'
import Partners from './sections/Partners'

function Page() {
  useReveal()
  return (
    <>
      <InkFilters />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <PrototypeBanner />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <WhatWeDo />
        <TinkHerHack />
        <Events />
        <Community />
        <GetInvolved />
        <Partners />
      </main>
      <SiteFooter />
      <WorkshopDock />
      <FeedbackPanel />
    </>
  )
}

export default function App() {
  return (
    <WorkshopProvider>
      <Page />
    </WorkshopProvider>
  )
}
