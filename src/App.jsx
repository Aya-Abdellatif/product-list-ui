import { useState } from 'react'
import p1 from "./assets/p1.avif";
import p2 from "./assets/p2.avif";
import p3 from "./assets/p3.avif";
import p4 from "./assets/p4.avif";
import p5 from "./assets/p5.avif";
import Card from './components/Card'

function App() {
  const products = [
    { id: 1, title: "Roller Skate Shoe", price: 2050, img: p1 },
    { id: 2, title: "Electric Kick Scooter", price: 2400, img: p2},
    { id: 3, title: "Electric Scooter With Seat", price: 1200, img: p3 },
    { id: 4, title: "V3 Pro Electric Scooter", price: 2050, img: p4},
    { id: 5, title: "High-Speed Electric Scooter", price: 2400, img: p5}
  ];

  return (
    <>
      <h1 className='text-3xl font-bold text-center mb-8 mt-5'>Shop Now</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-4'>
        {products.map((p) => (
          <Card
            key={p.id}
            title={p.title}
            price={p.price}
            img ={p.img}>
          </Card>
        ))}
      </div>
    </>
  )
}

export default App
