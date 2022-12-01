import React from 'react'
import { Navbar,Container,Nav, Button} from 'react-bootstrap'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineBell} from 'react-icons/ai'
import { Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const NavbarComponent=() =>{

  const location = useLocation()
  console.log(location)
  return (
   

<Navbar collapseOnSelect expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to={'/'}>
            <img src='netflix_logo.png' alt='nextflix logo' id='logo'/>
            </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="nav-item">
            <Link to={'/'} className='nav-link'>
            <div>Home</div>
            </Link>
            <Link to='/tvshow' className='nav-link'>
            <div className={
                location.pathname === '/tvshow' ? 'nav-link active' : 'nav-link'
              } id='navbar-text'>Tv Shows</div>
            </Link>
            <div className={
                location.pathname === '/movies' ? 'nav-link active' : 'nav-link'
              } >Movies</div>
            <div >Recently Added</div>
            <div >My List</div>
          </div>
        </Navbar.Collapse>
        <div className='navbar-right-logo'>
        <CiSearch/>
        <div>KIDS</div>
        <AiOutlineBell/>
        <div>
        <Button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown"
        aria-expanded="false">
            <img src='avatar.png' alt='avataimage' id='avatar'/>        
        </Button>
        </div>
        </div>
      </Container>
    </Navbar>
  )
}
export default NavbarComponent
