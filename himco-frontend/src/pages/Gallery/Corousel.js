import './Carousel.scss'
import {useState,useEffect} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function NavScrollExample(props) {
  let[arr,setArr]=useState([])
  
  let fetchData=async (phototypes)=>{
        let data=await fetch(`${process.env.REACT_APP_SERVERNAME}/api/${phototypes}?populate=*`);
        let response=await data.json();
        let notification=await response.data;
        setArr([...notification])
    }
      
    
    useEffect(()=>{
         fetchData("photo-gallery-natures")
       },[])
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    {/* <div className="pic-ctn" >
    {arr.map((element)=>{return <img key={element.id} src={`http://localhost:1337${element.attributes.image.data[0].attributes.url}`} alt="" className="pic"/>})}
  </div> */}
  
  <Carousel>
  {arr.map((element)=>{return <div className='caro-img'>
    <img key={element.id} src={`${process.env.REACT_APP_SERVERNAME}${element.attributes.Image.data[0].attributes.url}`} alt="" className="pic"/> 
                </div>
  })}
                    
  </Carousel>
  
    <div className='key' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
    <button onClick={()=>fetchData('photo-gallery-natures')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px'}}>Nature</button>
    <button onClick={()=>fetchData('photo-gallery-natures')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px'}}>Nature</button>
    <button onClick={()=>fetchData('photo-gallery-natures')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px'}}>Nature</button>
    <button onClick={()=>fetchData('photo-gallery-natures')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px'}}>Nature</button>
    <button onClick={()=>fetchData('photo-gallery-natures')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px'}}>Nature</button>
    <button onClick={()=>fetchData('photo-gallery-cars')} style={{backgroundColor:'#B80000',color:'white',margin:'2px 10px'}}>Cars</button>
    </div>
    </div>
  );
}

export default NavScrollExample;
