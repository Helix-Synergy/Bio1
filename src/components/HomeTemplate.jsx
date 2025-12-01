import React from 'react'
import AboutUs from './AboutUs'
// import PanelMembers from './PanelMembers'
import Orators from './orators/Orators'
// import EventSchedule from './EventSchedule'
import Partners from './Partners'
import Tracks from './Tracks'
import EventSchedule from './EventSchedule'
import Carousel from './BannersCarousel'
import Epms_about from './Epms_about'
import Venue from './Venue'
// import Epms from './epms/Epms'


const HomeTemplate = () => {
  return (
    <>
    <AboutUs />
    <Carousel />
      <Epms_about />
      <Tracks />
      <Orators />
      <EventSchedule height={50} name="View Full Schedule" link='/event_schedule' />
      <Venue />
      <Partners />
    </>
  )
}

export default HomeTemplate
