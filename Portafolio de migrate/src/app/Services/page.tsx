import Image from 'next/image'
import {Footer} from "../components/Footer"
import {ServiceTarjet} from "../components/ServiceTarjet"
export default function Services() {
  return (
    <div id='Main' >
        <article id='homeMain'>
          <p className='parrafoArticle'>Discover the power of Migrate Solutions's specialized 
          services. We excel in migrating businesses from outdated 
          technologies to the latest platforms, ensuring a smooth 
          and efficient transition.</p> 
          <p className='parrafoArticle'>Our team building services go beyond recruitment; we 
          curate and formalize dedicated teams, reducing the 
          complexities of building an in-house software team 
          for our clients. Explore our comprehensive suite of 
          solutions, from technology migration to expert team 
          formation, all aimed at delivering projects that align 
          perfectly with your business objectives.</p>
        </article>
        <div id='ServiceCards'> 
          <div >
          <h3 className='tittleService'>Services</h3>
          </div>
          <div className='Componentdiv'>
            <ServiceTarjet/>
          </div>
        </div>
      <Footer title='Footer'/>
    </div>
  )
}