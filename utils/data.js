import bcrypt from 'bcryptjs'
export const data={
    users:[
        {
            name:'sandun',
            email:'sandun.suntws@gmail.com',
            password:bcrypt.hashSync('123456')
        }, {
            name:'THARUKA',
            email:'tharuka.suntws@gmail.com',
            password:bcrypt.hashSync('123456')
        }
                ],
    products: [
       
  
       
        {
          name: 'Cubord',
          slug: 'small',
          category: 'cubord',
          image: '/images/c.jpg',
          price: 90,
          brand: 'LG',
          rating: 4.5,
          numReviews: 3,
          countInStock: 20,
          description: 'A popular ',
        },
        {
          name: 'Chair',
          slug: 'chair-chair',
          category: 'chair',
          image: '/images/Chair.jpg',
          price: 90,
          brand: 'softlogic',
          rating: 2.9,
          numReviews: 13,
          countInStock: 20,
          description: 'Smart looking ',
        },
        {
          name: 'Table',
          slug: 'fit-table',
          category: 'Table',
          image: '/images/er.jpg',
          price: 95,
          brand: 'Neco',
          rating: 3.5,
          numReviews: 7,
          countInStock: 20,
          description: 'A popular ',
        },
        {
          name: 'Classic Sofa',
          slug: 'classic-sofa',
          category: 'Sofa',
          image: '/images/g.jpg',
          price: 75,
          brand: 'Singer',
          rating: 2.4,
          numReviews: 14,
          countInStock: 20,
          description: 'A popular ',
        },
        {
          name: 'Classic Mirror',
          slug: 'classic-Mirror',
          category: 'Mirror',
          image: '/images/mirror.jpg',
          price: 75,
          brand: 'Appes',
          rating: 2.4,
          numReviews: 14,
          countInStock: 20,
          description: 'A popular ',
        },
        {
          name: 'Classic Sofa',
          slug: 'classic-sof',
          category: 'Chair',
          image: '/images/sofa.jpg',
          price: 75,
          brand: 'Singer',
          rating: 2.4,
          numReviews: 14,
          countInStock: 20,
          description: 'A popular ',
        },
        {
          name: 'Classic Sofa',
          slug: 'classic-sofa',
          category: 'Sofa',
          image: '/images/g.jpg',
          price: 75,
          brand: 'Singer',
          rating: 2.4,
          numReviews: 14,
          countInStock: 20,
          description: 'A popular ',
        },
       
      ]
}