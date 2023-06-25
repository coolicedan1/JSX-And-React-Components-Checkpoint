
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Name from './name';
import Discription from './discription';
import price from './price';
import image from './image';
import pics from './pics.jpg'

function App() {
  return (
  <>
  {/* card to display all the components */}

  <div className='App'>
  <Card style={{ width: "50%", height: "50%", margin: "auto", marginTop: "100px", backgroundColor: "black"}}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>FULLSTACK WEB DEVELOPER.</Card.Title><br/>
          <Card.Subtitle style={{font: "message-box", color: "green"}}>   $6,000
          </Card.Subtitle>
          <Card.Text style={{font: "icon", color: "green"}}><br/>
          Enroll now for the fullstack javascript bootcamp and build your first web site.
          </Card.Text><br/>
          <Card.Link href="#"> For Students</Card.Link>
        </Card.Body>
      </Card>
      <img src= {pics} alt='student-pic' style={{width: "100px",marginTop: "15px"}}></img>
      <h4 style={{color: "green", marginTop: "15px"}}> Hello Daniel </h4>
  </div>
  </>
  );
}

export default App;
