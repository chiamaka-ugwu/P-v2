import React from 'react'
import Footer from '../components/footer/Footer'
import Nav from '../components/nav/Nav'
import MoreProjects from '../components/projects/MoreProjects'

const ProjectPage = () => {
  window.scroll(0,0);
  return (
    <>
      <Nav />
      <MoreProjects />
      <Footer />
    </>
  )
}

export default ProjectPage
