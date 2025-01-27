import './About.css';
import { AboutUsSectionPage, ImageGallery, Reviews } from '../../components';

const clients = [
  {
    id:1,
    name:'John Doe',
    image:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ipsum at felis viverra placerat. Nulla facilisi. Aliquam erat volutpat. Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  },
  {
    id:2,
    name:'Jane Smith',
    image:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Donec vel ipsum at felis viverra placerat. Nulla facilisi. Aliquam erat volutpat. Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  },
  {
    id:3,
    name:'Michael Johnson',
    image:'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Sed non felis vel dui faucibus sollicitudin. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex, vel viverra nunc nisi in velit.'
  },
  {
    id:4,
    name:'Sarah Williams',
    image:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    review:'Vel viverra nunc nisi in velit. Donec auctor, lectus vel convallis congue, lectus turpis malesuada ex.'
  }

]

function About() {
  return (
    <div className='about-page'>

          <header className='mt-5'>
              <div className='container h-100 d-flex align-items-center justify-content-center'>
                  <h1 className='text-light'>About</h1>
              </div>
          </header>

          <AboutUsSectionPage/>

          <div className='bg-dark text-light'>
              <ImageGallery className='bg-dark text-light'/>
          </div>

          <div className='my-5'>
            <Reviews
            clients={clients}
            />
          </div>

    </div>
  )
}

export default About