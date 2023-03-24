import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>HOME</div>
      
  </Link>
<Link to="/education">
  <div>EDUCATION</div>
</Link>
<Link to="/experience">
  <div>EXPERIENCE</div>
</Link>
<Link to="/skills">
  <div>SKILLS</div>
</Link>



      </div>
  )
}

export default Nav