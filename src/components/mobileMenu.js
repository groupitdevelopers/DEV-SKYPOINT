import React, { useState } from 'react'

const MobileMenuList = ({ menu, onClick }) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <li>
      <button
        className='listElement'
        onClick={() => setIsActive(!isActive)}
      >
        {menu.menu}
        <span className='menuOpen'>
          {isActive ? '-' : '+'}
        </span>
      </button>
      {menu.subMenu && isActive && (
        <ul >
          {menu.subMenu.map((sm, i) => (
            <li key={i}>
              {menu.link[i] && <a href={menu.link[i]} onClick={onClick}>{sm}</a>}
              {!menu.link[i] && <a href='/'>{sm}</a>}
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default MobileMenuList