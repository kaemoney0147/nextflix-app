import React from 'react'
import { Button, Container } from "react-bootstrap"
import {AiFillAppstore} from 'react-icons/ai'
import {AiOutlineAlignLeft} from 'react-icons/ai'

const Genres=()=>{
    return(
        <Container fluid className='mt-4 d-flex justify-content-between'>
            <div className='d-flex' id='genres-details'>
               <h3>TV Shows</h3>
               <Button className="genrebutton  dropdown-toggle genre-button">Genres</Button>
            </div>
            <div className='d-flex' id='nav-icon'>
            <Button className='icon'
        aria-expanded="false">
            <AiOutlineAlignLeft className='icon'/>     
        </Button>
        <Button className='icon'
        aria-expanded="false">
            <AiFillAppstore className='icon'/>      
        </Button>
                </div>
        </Container>
    )
}
export default Genres