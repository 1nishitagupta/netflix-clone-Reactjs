import React from 'react'

function Navbar() {
   
  
  
    let style = { backgroundColor: '#000' };

    window.addEventListener('scroll', (event) => {
      
    });

  

  return (
    <div className='navbar'  style={style}>
        <img src="images/netflix-logo.png" alt="logo" className='logo' />
        <img src="images/profile.jpg" alt="profile" />
    </div>
  )
}

export default Navbar


