import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portrait from "../images/angelabranaes.jpg"
import GruppebildeTENK from "../images/GruppebildeTENK.jpg"
import AdaCafeApp from "../images/AdaCafeApp.png"
import Proximistyle from "../images/Proximistyle.png"
import BLShoes from "../images/BLShoes.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Angela Branaes" />

    <div style={{
      backgroundColor: '#F9E4F0',
      height: '90vh',
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
        <h4 style={{ marginBottom: '1.45rem' }}>Kristine Juvet</h4>
        <h1>Branaes</h1>
      </div>
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -20%)',
        bottom: '0',
        textAlign: 'center'
      }}>
        <h4>Product</h4>
        <h4>Founder</h4>
        <h4>Speaker</h4>
        <a href='#Introduction'><FontAwesomeIcon icon={faCaretDown} size='2x'/></a>
      </div>
    </div>
    <section id="Introduction">
      <img src={Portrait} alt="Angela Branaes"/>
      <p>
        Founder, product manager and speaker that's busy creating the future.
        I make products that delight, save you time and automate repetitive tasks.
        Passionate about design, technology and innovation.
      </p>
      <p>
        BEng in Computing from Imperial College London. <a href='https://wearetechwomen.com/angela-branaes-proximistyle/' target='_blank'>TechWomen100</a>.
      </p>
      <div style={{
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between'
      }}>
        <a href='https://www.linkedin.com/in/angelabranaes/' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
        <a href='https://github.com/angineering' target='_blank'><FontAwesomeIcon icon={faGithubSquare} size='2x'/></a>
        <a href='https://medium.com/@angelabranaes' target='_blank'><FontAwesomeIcon icon={faMedium} size='2x'/></a>
      </div>
    </section>
    <section id='Product'>
      <h2>Product</h2>
      <h4>Proximistyle</h4>
      <p>
      For any outfit, <a href='https://proximistyle.com/' target='_blank'>Proximistyle</a> lets you see which stores have it in stock, in your size nearby.
      </p>
      <ul>
        <li>
          <mark>Created and launched iPhone and web app.</mark> Created everything, from design of logo and collateral to UX, UI, backend, AWS and App store launch.
        </li>
        <li>
          <mark>Built over 100 partnerships</mark> with leading brands including Harvey Nichols, Michael Kors and Coach.
        </li>
        <li>
          <mark>Won the YC Startup School 2018 Grant</mark> (Top 1% of startups picked). Interviewed with YC in the Bay Area.
        </li>
        <li>
          Part of the CFE startup programme 2019, <mark>sponsored by The London College of Fashion and the EU Regional Development Fund.</mark>
        </li>
      </ul>
      <img src={Proximistyle} alt='The Proximistyle app' />
      <h4>Baudoin & Lange (2019)</h4>
      <p>
        London based luxury footwear brand. I was brought in as interim <mark>Head of Technology and Operations</mark> to digitise the business and unlock growth.
      </p>
      <ul>
      <li>
        Migrated e-commerce from Squarespace to Shopify.
      </li>
      <li>
        <mark>Saved staff 13h/week</mark> (5 min/lookup) by codifying products and digitising inventory. Enabled customers to see if a product was in stock.
      </li>
      <li>
        Launched product labelling initiative after identifying that ambiguity was causing errors.
        <mark>Reduced the factory error rate from 10% to almost 0. </mark>
        This <mark>saved staff 2 h/week</mark>.
      </li>
      </ul>
      <img src={BLShoes} alt='B&L Loafers' />
    </section>
    <section id='Teaching'>
      <h2>Teaching</h2>
      <p>
        <mark>My passion is turning product ideas into reality. </mark>
        Through workshops, conference speaking and teaching I show how to go from idea to product. I love inspiring beginners
        to try coding, even if it's just to better understand the technological world they now live in.
      </p>
      <h3>Conferences</h3>
      <h4>PyConLT (Lithuania, 2018)</h4>
      <p>
        "Building a Startup with Python, React and AWS".
      </p>
      <h4>EuroPython (Italy, 2017)</h4>
      <p>
        <a href='https://www.youtube.com/watch?v=nfi0hX-F8Zo' target='_blank'>"Building a full-stack web application with Python, NPM, Webpack and React".</a>
      </p>
      <h4>Python + Finance (London, 2016)</h4>
      <p>
        "Python + AHL".
      </p>
      <h3>Workshops</h3>
      <h4>TENK Tech Camp for girls (Oslo, 2019)</h4>
      <p>Taught two days of workshops for 12-18 year-old girls on how to build their very first app in React Native.</p>
      <img src={GruppebildeTENK} alt='Group photo TENK Tech Camp 2019' />

      <h4>Flatiron School</h4>
      <p>
      One of the highlights was
      the <a href='https://medium.com/@angelabranaes/ada-lovelace-day-workshop-part-2-creating-the-ada-caf%C3%A9-app-292800cca5f0' target='_blank'>Ada Lovelace Day workshop</a> I did, 
      where we had to double the amount of desks in the room, and
      there <a href='https://twitter.com/angiebranaes/status/1049705820437536769' target='_blank'>still wasn't room</a> for
      everyone who showed up.
      </p>
      <img src={AdaCafeApp} alt='Ada Cafe App' />

      <h3>Teaching and Tutoring</h3>
      <h4>Flatiron School (2018-2019)</h4>
      <p>
        Flatiron School is a WeWork owned coding bootcamp that helps students transform their career.
        Karlie Kloss famously did the web develpment evening class in New York before starting her coding initiative Kode With Klossy.
      </p>
      <p>
        I was the <mark>Lead Front End Web Development Instructor</mark> for the London evening classes, teaching web development fundamentals to complete beginners.
        <mark>My classes had an NPS score of 10.</mark>
      </p>
      <p>
      Over 10 weeks of twice weekly evening classes students went from not knowing what HTML is to building their first brochure website using HTML, CSS, JavaScript and Git.
      </p>
      <h4>Bonas McFarlane</h4>
      <p>
        Tutored children and teenagers in basic and intermediate programming concepts, including Python, websites and computer science fundamentals.
      </p>

      <p>
        Bonas MacFarlane is one of the UK's most respected providers of private tuition & educational advice,
       placing clients into the world's best schools & universities.
       The Good Schools guide describes them as "Seriously upper crust of the tutoring industry".
      </p>
    </section>
    <section id='Community'>
      <h2>Community</h2>
      <h4>Nora i London, Board Member (2018 - 2020)</h4>
      <p>
        The Nora network is a way for Norwegian women in London to meet and create new connections.
      </p>
      <p>
        As a board member I got the amazing opportunity to organise events and grow our community.
        A highlight of 2019 was organising a panel event at The Conduit on entrepreneurship,
        where the panelists were the Head of Innovation Norway London and two female founders from our group.
      </p>
    </section>
  </Layout>
)

export default IndexPage
