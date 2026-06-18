import React from 'react'

const NavBar = () => {
  return (
  <div>
    <div>
      <h1 className="">Logo</h1>
      <div className="flex h-[300] p-6  justify-between">
        <button className="border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:shadow-lg">HOME</button>
        <div className="flex m-10 gap-10">
        <div className="bg-neutral-800 text-neutral-50 dark:bg-transparent border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:shadow-lg"><input type="text" placeholder="Search"/>
        </div>
        <div className="border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:shadow-lg">Profile</div>
        <div className="border-2 border-transparent transition-all duration-300 hover:border-blue-500 hover:shadow-lg">More</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NavBar
