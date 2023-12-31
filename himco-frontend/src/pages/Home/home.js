import './home.css'
import {Link} from 'react-router-dom'
import Img1 from './chairman.png'
import NewsTicker from 'react-advanced-news-ticker';
import Img2 from './alert.png'
import Person1 from './1.png'
import Person2 from './2.png'
import Person3 from './3.png'
import Image1 from './carousel-image/1.jpg'
import Image2 from './carousel-image/2.jpg'
import Image3 from './carousel-image/3.jpg'
function NavScrollExample(props) {
  let n_arr=[...props.arr]
  n_arr.reverse()
  let arr=n_arr.slice(0,6)
  function formatMyDate(value, locale = 'en-GB') {
    return new Date(value).toLocaleDateString(locale);
}


  return (
    <div className="home">
    <div className='component'>
      <div className='carousel carousel-home' >
      

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Image1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image3} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

</div>
      <div className='home-image-links' style={{margin:'50px 0px'}}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#B80000',height:'60px',color:'white',fontSize:'24px'}}>NOTIFICATIONS</div>
    {arr.length!=='0'?<NewsTicker
    key={Math.random()}
    rowHeight = {30}
    maxRows = {16}
    speed = {2000}
    // direction = {Directions.DOWN}
    duration = {2000}
    autoStart = {true}
    pauseOnHover = {true}
    id = "myId"
    className = "myClassName1 myClassName2"
    style = {{margin:'0px',backgroundColor:'#71AEDA'}}>
    {arr.map((element)=>{return <div key={element.id} style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:'15px'}}><img src={Img2} alt='new'/><div style={{width:'70%'}}><div style={{marginBottom:'0px',display:'flex',justifyContent:'space-between'}}><div>{element.attributes.Heading}</div><div style={{fontSize:'12px'}}>{formatMyDate(element.attributes.createdAt)}</div></div><div style={{fontSize:'12px'}}>{element.attributes.Description.slice(0,25)}...</div></div></div>})}
    
</NewsTicker>:<div>No Notifications</div>}
   <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',backgroundColor:'#71AEDA',padding:'10px 10px',fontSize:'14px'}}><Link className="nav-link" to="/notification" style={{color:'white'}}>View All &gt;</Link></div>
 </div>
 </div>
  

  <div>
    <div className='Persons'>
      <div className='personality'><div className='personality-image' ><img src={Person1} alt='personality'/></div><div style={{margin:'20px 20px',height:'120px'}}><b style={{fontSize:'18px'}}>Sh. Mukesh Agnihotri</b><br/>
<p style={{fontSize:'14px'}}>Hon'ble Deputy Chief Minister<br/>
Co-operation, Jal Shakti, Transport, Language, Arts and Culture Minister</p>
</div></div>
      <div className='personality'><div className='personality-image'><img src={Person2} alt='personality'/></div><div style={{margin:'20px 20px',height:'120px'}}><b style={{fontSize:'18px'}}>Sh. C. Paulrasu, IAS</b><br/><p style={{fontSize:'14px'}}>Secretary Cooperation</p></div></div>
      <div className='personality'><div className='personality-image'><img src={Person3} alt='personality'/></div><div style={{margin:'20px 20px',height:'120px'}}><b style={{fontSize:'18px'}}>Sh.Sandeep Kadam</b><br/><p style={{fontSize:'14px'}}>Registrar Cooperative Societies</p></div></div>
    </div>
  </div>



   <div className='chairman'>
    <div className='image-1' style={{backgroundImage:`url(${Img1})`}}></div>
    <div className='message'>
    <div className='message1'>Administrator's Message</div>
    <div className='message2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed ex vel est fermentum rhoncus. Integer non rutrum diam. In porta est vel turpis volutpat, ac molestie augue vulputate. Donec ac leo aliquet, condimentum enim sed, faucibus lectus. Aliquam congue, justo vitae lobortis laoreet, dolor urna posuere metus, vel sodales ligula felis at metus. In vehicula imperdiet purus, quis tincidunt leo faucibus in. Integer quam diam, pulvinar eget ultricies non, pharetra ut ligula.</div>
    <div></div>
    </div>
    </div>
    </div>
  );
}

export default NavScrollExample;