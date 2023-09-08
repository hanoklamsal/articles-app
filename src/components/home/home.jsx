import React from 'react'
import NavBar from '../navbar/navbar';
import './home.css'
import Article from './articles/article';
import Footer from '../footer/footer';

function Home() {
  return (
    <>
    <NavBar/>
    <div className="poster">
      <div className="poster-text-container">
        <h2 className='poster-heading'>Prepare for the Future</h2>
        <p className='poster-subheading'>Learning a new skill is important and here at skillup africa we help train student in various digital skills</p>
        <button className='read-more-btn'>Read more ...</button>
      </div>
    </div>
    <Article/>
    <Footer/>
      </>
  )
}

export default Home