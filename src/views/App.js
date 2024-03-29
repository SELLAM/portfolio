import React from "react"
import { About, Banner, CaseStudy, Education, Footer, Header, Specilizing } from "../layout/index"
import { menus } from "../config"
import PortfolioProvider from "./portfolio.context"

function App(props) {
  console.log(props);
  return (
    <PortfolioProvider isKhalid={props.isKhalid}>
      <div className='counter-scroll background-wrap fixed counter-scroll home4 has-one-page'>
        <div id='mobile-menu-overlay' />
        <Header menus={menus} />
        <div id='content' className='content'>
          <div className='homepage-personal'>
            <Banner />
            <About />
            <Specilizing />
            {/* <Project /> */}
            <Education />
            <CaseStudy />
            <Footer menus={menus} />
          </div>
        </div>
      </div>
    </PortfolioProvider>
  )
}

export default App
