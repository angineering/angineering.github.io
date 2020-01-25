import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portrait from "../images/angelabranaes.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Angela Branaes" />

    <div style={{
      backgroundColor: '#F9E4F0',
      height: '100vh',
      width: '100vw'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}>
        <h1>Angela</h1>
        <h4>Kristine Juvet</h4>
        <h1>Branaes</h1>
      </div>
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        bottom: '0',
        textAlign: 'center'
      }}>
        <h4>Product. Founder.</h4>
        <FontAwesomeIcon icon={faCaretDown} size='2x'/>
      </div>
    </div>
    <section id="intro">
      <img src={Portrait} alt="Angela Branaes"/>
      <p>
        Founder and product manager with a passion for creating the future, and working in the intersection between technology and people.
      </p>
      <p>
        BEng in Computing from Imperial College London.
      </p>
      <div style={{
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between'
      }}>
        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
        <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
        <FontAwesomeIcon icon={faMedium} size='2x'/>
      </div>
    </section>
    <section>
      <h2>Product</h2>
      <h4>Proximistyle</h4>
      <p>
      For any outfit, Proximistyle lets you see which stores have it in stock, in your size nearby.

- Built 100+ partnerships with leading brands including Harvey Nichols, Michael Kors and Coach.
- Created and launched iPhone app and web app. Built out the full product myself, from design of logo and collateral to UX, UI, backend, AWS and App store launch.
- Ran 20+ IDEO style user interviews and design sprints with kanbans to drive product roadmap and market positioning. Used Sketch, InVision and Expo to rapid prototype.

Part of the CFE startup programme winter 2019, sponsored by The London College of Fashion and the EU Regional Development Fund.

Did YC Startup School 2018 and won the $10,000 equity free grant (Top 1% of startups picked). Interviewed with YC in the Bay Area.
      </p>
      <h4>Baudoin & Lange</h4>
    </section>
    <section>
      <h2>Teaching</h2>
      <p>
      One of my great passions outside of Proximistyle is the belief that tech literacy is as important as being able to write an essay or do maths.
      Tech is the education path that give you the highest intersection of creativity, problem solving and employability.
      I try my best to lower the perceived barrier to entry by teaching the intro to web development class at Flatiron School, tutoring teenagers in programming, speaking at conferences about this and writing articles on how to easily get started. Along the way I also hope to show some other girls and women that being a woman and knowing how to code is perfectly normal.
      </p>
      <p>
        I am passionate about spreading the joy of being able to make an idea come to life through technology.
        Through workshops, conference speaking and teaching I try to give back to the community. I love inspiring beginners
        to try coding, even if it's just to better understand the technological world they live in.
      </p>
      <h4>Conferences</h4>
      EuroPython (2017), PyConLT (2018), Python + Finance (2016)

      <h4>Workshops</h4>
      TENK Tech Camp for girls, Flatiron School

      <h4>Teaching and Tutoring</h4>
      Flatiron School, Bonas McFarlane
    </section>
    <section>
      <h2>Community</h2>
      <h4>Nora i London, Board Member (2018 - 2020)</h4>
      <p>
        The Nora network is a way for Norwegian women in London to meet and create new connections.
      </p>
      <p>
        As a board member I got the amazing opportunity to organise events and grow our community.
        A highlight of 2019 was organising a panel event at The Conduit on entrepreneurship,
        where the panelists were the head of Innovation Norway in London and two female founders in our group.
      </p>
    </section>
  </Layout>
)

export default IndexPage
