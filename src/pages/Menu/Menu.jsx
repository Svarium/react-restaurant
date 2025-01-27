import { MenuCard } from '../../components'
import './Menu.css'


const breakfast = [
  {
    id:1,
    name:'English Breakfast',
    description:'Smoked bacon, sausage, tomato, mushrooms, black pudding, baked beans, eggs',
    price: '$12'
  },
  {
    id:2,
    name:'Avocado Toast',
    description:'poached egg, avocado, onion, tomatoes, bread',
    price: '$8'
  },
  {
    id:3,
    name:'Burrito',
    description:'tortilla, egg, cheese, potatoes, pork meat',
    price: '$15'
  }
]

const lunch = [
  {
    id:1,
    name:'Fried Chicken',
    description:'fried chicken breasts, bell peppers, onions, tomatoes, bread',
    price: '$15'
  },
  {
    id:2,
    name:'Baked Salmon',
    description:'baked salmon fillets, cucumbers, tomatoes, bell peppers, olives, bread',
    price: '$20'
  },
  {
    id:3,
    name:'Vegetable Stir-Fry',
    description:'vegetables, sauce, onions, tomatoes, bell peppers, bread',
    price: '$12'
  }
]

const dinner = [
  {
    id:1,
    name:'Grilled Chicken',
    description:'grilled chicken breasts, bell peppers, onions, tomatoes, bread',
    price: '$18'
  },
  {
    id:2,
    name:'Salmon Dinner',
    description:'salmon fillets, cucumbers, tomatoes, bell peppers, olives, bread',
    price: '$25'
  },
  {
    id:3,
    name:'Steak',
    description:'roasted beef, onions, tomatoes, bell peppers, bread',
    price: '$22'
  }
]

const dessert = [
  {
    id:1,
    name:'Chocolate Lava Cake',
    description:'dark chocolate, marshmallows, whipped cream, vanilla ice cream',
    price: '$10'
  },
  {
    id:2,
    name:'Red Velvet Cake',
    description:'red velvet, marshmallows, whipped cream, vanilla ice cream',
    price: '$12'
  },
  {
    id:3,
    name:'Strawberry Cheesecake',
    description:'strawberry cheesecake, whipped cream, vanilla ice cream',
    price: '$15'
  }
]


function Menu() {
  return (
    <div className='menu-page'>

      {/* HEADER */}
      <header className='mt-5'>
          <div className='container h-100 d-flex align-items-center justify-content-center'>
              <h1 className='text-light'>Menu</h1>
          </div>
      </header>

      <MenuCard
      menu={breakfast}
      img='https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      title='Breakfast'  
      bg='bg-white'
      text='' 
        
      />

      <MenuCard
      menu={lunch}
      img='https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      title='Lunch'
      bg='bg-dark'
      text='text-white'
      />

      <MenuCard
      menu={dinner}
      img='https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      title='Dinner'
      bg='bg-white'
      text='' 
      />

      <MenuCard
      menu={dessert}
      img='https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      title='Dessert'
      bg='bg-dark'
      text='text-white' 
      
      />
    </div>
  )
}

export default Menu