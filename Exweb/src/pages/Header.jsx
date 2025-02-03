import React from 'react'
import { useState } from 'react'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav>
      <h2>Ex Media</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>

    </>
  )
}

export default Header
