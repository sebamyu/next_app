'use client'

import Image from "next/image";
//import { useState } from "react";
import Counter from "./components/Counter";


function Header(){
  return (
    <>
    <p>This is header</p>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button type='button' onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button type='button' onClick={() => setCount(count - 1)}>Increase Counter</button>

    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <p>Hello React</p>
      <Counter />
    </div>
  );
}
