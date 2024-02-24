import Image from 'next/image'
import {Footer} from "../components/Footer"
export default function AboutUs() {
  return (
    <div id='Main'>
      <div id='AboutUs'>
        <p className='parrafoArticle'>At Migrate Solutions, we are more than just a software factory; we are architects of digital transformation. Our journey began with a passion for simplifying the complex process of technology migration. </p>
        <p className='parrafoArticle'>Today, we stand as experts in seamlessly transitioning businesses to modern technologies while simultaneously offering unparalleled team-building services. Meet the minds behind our success, a team dedicated to innovation, quality, and a client-centric approach. Learn about our commitment to reducing the stress of software development by delivering tailor-made solutions focused on the unique needs of each client.</p>
      </div>
      <Footer title='Footer'/>
    </div>
  )
}