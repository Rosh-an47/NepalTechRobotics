import React from 'react'
import logo from '../assets/logo.jpg';
import { navItems } from '../constants/index.jsx';
const Navbar = () => {
  return (
    <div>
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-2 mx-auto relative font-semibold text-lg">
                <div className="flex justify-between items-center">
                    {/* Logo ra Brand Name, navbar top left */}
                    <div className="flex items-center flex-shrink">
                        <img className = 'h-10 w-10 mr-2' src={logo} alt="" />
                        <span className="text-xl tracking-tight">NepalTechRobotics</span> 
                    </div>

                    {/* NavBar details */}

                    <ul className="hidden lg:flex ml-14 space-x-6">
                        {navItems.map((navItems, index) => (
                            <li key = {index}>
                                <a href={navItems.href}> {navItems.label}</a>
                            </li>
                        ))}
                    </ul>


                </div>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar