// To parse this data:
//
//   import { Convert, Welcome } from ./file;
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.



export interface Product {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  brand:              string;
  category:           string;
  thumbnail:          string;
  images:             string[];
}

export const productos = [
{
            id: 1,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
            images: [
                     'https://dummyjson.com/image/i/products/2/2.jpg',

            ]
},

{           id: 2,
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
            images: [
                    'https://dummyjson.com/image/i/products/1/2.jpg',

            ]
        },
        {
            id: 3,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
            images: [

                'https://dummyjson.com/image/i/products/2/2.jpg',

            ]
          },
          {
            id: 4,
            title: 'iPhone X',
            description: 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
            images: [

                'https://dummyjson.com/image/i/products/2/2.jpg',

            ]
          }
]
