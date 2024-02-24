import Image from 'next/image'
import {Carousel} from './components/Carousel'
import {Footer} from "./components/Footer"
import Slider from 'react-slick'
export default function Home() {
  return (
    <div id='Main' >
      <article id='homeMain'>
        <p className='parrafoArticle'>Welcome to Migrate Solutions, your trusted partner in software innovation. We specialize in seamlessly migrating businesses from legacy technologies to cutting-edge solutions.</p> 
        <p className='parrafoArticle'>Our mission is to alleviate the challenges of team building by offering comprehensive services that include talent acquisition, team formation, and project development. Explore how we transform ideas into reality, ensuring your software journey is both stress-free and tailored to meet your unique business needs.</p>
        <h2 className='titleHome'>Some of our customers</h2>
        <Carousel/>
      </article >
      <Footer title='Footer'/>
    </div>
  )
}
