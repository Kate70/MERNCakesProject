//import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Kate',
      email: 'admin@example.com',
      password: '123456',
      isAdmin: true,
    },
    {
      name: 'Holl',
      email: 'user@example.com',
      password: '123456',
      isAdmin: false,
    },
  ],


    products: [
      {
        //_id: '1',
        name: 'Cake with milk',
        slug: 'milk-smooth',
        category: 'milk Cakes',
        image: '/img/2.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        numReviews: 10,
        description: 'Personalisation in images is for illustrative purposes. Please include the complete message you would like on your personalised cake',
      },
      {
        //_id: '2',
        name: 'Personalised Extra Large Rainbow Layers Cake ',
        slug: 'Rainbow Layers Cake ',
        category: 'Layers Cake',
        image: '/img/3.jpg',
        price: 250,
        countInStock: 20,
        numReviews: 10,
        description: 'Great for any party or gathering, this supersized version of popular rainbow layers cake can be personalised with a message. Candles not included.',
      },
      {
        //_id: '3',
        name: 'Chocolate & Caramel Cake ',
        slug: 'Chocolate & Caramel Cake ',
        category: 'Chocolate',
        image: '/img/4.jpg',
        price: 25,
        countInStock: 15,      
        numReviews: 14,
        description: 'Four layers of chocolate and caramel sponges filled with rich chocolate buttercream and smooth caramel sauce, covered in toffee buttercream and finished with a mixture of chocolate, caramel and toffee buttercream and dark chocolate discs.',
      },
      {
        //_id: '4',
        name: 'Personalised Extra Large Mini Bite Cake',
        slug: 'Mini Bite Cake',
        category: 'Pants',
        image: '/img/5.jpg',
        price: 65,
        countInStock: 5,
        numReviews: 10,
        description: 'Personalisation in images is for illustrative purposes. Please include the complete message you would like on your personalised cake',
      },
      {
        name: 'Personalised Extra Large Rainbow Layers Cake ',
        slug: 'Rainbow Layers Cakes ',
        category: 'Layers Cake',
        image: '/img/90.jpg',
        price: 250,
        countInStock: 40,
        numReviews: 10,
        description: 'Great for any party or gathering, this supersized version of popular rainbow layers cake can be personalised with a message. Candles not included.',
      },
    ],
  };
  export default data;