import { Component } from 'react'
import { Container,Row,Col,Card,Carousel,Spinner } from 'react-bootstrap';

class TrendingNow extends Component {
    state = {  
        movies:[],
        isLoading: true,
        isError: false,
    } 
   componentDidMount= async () => {
    try {
      let response = await fetch(
        'http://www.omdbapi.com/?i=tt3896198&apikey=47684db2&s=harry%20potter',
    
      );
      if (response.ok) {
        let data= await response.json()
        console.log(data)
        this.setState({
         movies: data.Search,
         isLoading: false,
          })
   
      } else {
        console.log("Something went wrong!");
        setTimeout(() => {
          this.setState({
            isLoading: false,
            isError: true,
          })
        }, 1000)
      }
    } catch (err) {
      console.log(err.message);
      this.setState({
        isLoading: false,
        isError: true,
      })
    }
  };
 
    render() { 
      return (
        <Container fluid className='mt-5'>
         <h5 className='mb-4'>Trending Now</h5>
         {this.state.isLoading && (
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
         {this.state.movies.map((movie)=>
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
}
 
export default TrendingNow;


