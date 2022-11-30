import React from "react"
import { Container,Row,Col,Spinner,Carousel,Card} from "react-bootstrap"
import { useEffect, useState } from 'react'


const TvShow=()=>{
    const[movies,setMovies]=useState([])
  const[isLoading, setIslLoading]=useState(true)
  // eslint-disable-next-line no-unused-vars
  const [isError,setIsError]=useState(false)

 const fetchMovies= async () => {
    try {
      let response = await fetch(
        'https://www.omdbapi.com/?i=tt3896198&apikey=47684db2&s=merlin',
    
      );
      if (response.ok) {
        let data= await response.json()
      console.log(data)
        setMovies(data.Search)
       setIslLoading(false)
   
      } else {
        console.log("Something went wrong!");
        setTimeout(() => {
          setIslLoading(false)
          setIsError(true)
        }, 1000)
      }
    } catch (err) {
      console.log(err.message);
      setIslLoading(false)
      setIsError(true)
    }
  };

  useEffect(()=>{
    console.log('componentDimount')
    fetchMovies()
  
  },[])
      return (
        <Container fluid className='mt-5'>
         <h5 className='mb-4'>TV SHOWS</h5>
         
         {isLoading && (
         <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Carousel indicators={false}>
      <Carousel.Item>
      <Row id='image-container'>
         {movies.map((movie)=>
         <Col className='col-2 mb-2' key={movie.imdbID}>
         <Card className='movie-card'>
      <Card.Img id='img' src={movie.Poster} />
    </Card>
         </Col>
         )}
         </Row>
         </Carousel.Item>
    </Carousel>
        </Container>
        );
}
export default TvShow