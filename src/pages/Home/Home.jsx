import { AboutSection, ContactInfo, HomeHeader, ImageGallery, MenuSection } from '../../components';
import './Home.css';


function Home() {
  return (
    <div className='home-page'>

      <HomeHeader />

      <AboutSection />

      <MenuSection />

      <ImageGallery />

      <ContactInfo/>

    </div>
  )
}

export default Home