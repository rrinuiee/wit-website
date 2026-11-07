import { WorkshopProvider } from './context/WorkshopContext'
import { useReveal } from './hooks/useReveal'
import { MARQUEE } from './content/wit'

import AnnouncementBar from './components/layout/AnnouncementBar'
import SiteHeader from './components/layout/SiteHeader'
import SiteFooter from './components/layout/SiteFooter'
import FloatingFeedback from './components/layout/FloatingFeedback'
import FeedbackPanel from './components/layout/FeedbackPanel'
import Marquee from './components/ui/Marquee'

import Hero from './sections/Hero'
import About from './sections/About'
import WhatWeDo from './sections/WhatWeDo'
import Learn from './sections/Learn'
import Initiatives from './sections/Initiatives'
import Events from './sections/Events'
import Stories from './sections/Stories'
import GetInvolved from './sections/GetInvolved'
import Contribute from './sections/Contribute'

/** The page, top to bottom. Each section lives in src/sections/. */
function Page() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <AnnouncementBar />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee items={MARQUEE} />
        <About />
        <WhatWeDo />
        <Learn />
        <Initiatives />
        <Events />
        <Stories />
        <GetInvolved />
        <Contribute />
      </main>
      <SiteFooter />
      <FloatingFeedback />
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
