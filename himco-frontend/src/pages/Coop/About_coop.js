import './About_coop.css'

function NavScrollExample(props) {

  return (
    <div className='about_coop_main' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div className='about_coop' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>

    <h1 style={{color:'#B80000',fontFamily:'Domine',display:'flex',justifyContent:'center'}}>ABOUT COOPERATIVE</h1>
    <p style={{fontFamily:'Domine',textAlign:'justify',margin:'30px 0px'}}>Odisha State Cooperative Union, Bhubaneswar established by Govt. of Odisha as per Section 11 (i) of Act VI of 1935 (Bihar and Orissa) Cooperative Societies Act and came into existence on 9th July 1948. Subsequently, Act VI of 1935 (Bihar and Orissa) was converted to Odisha Cooperative Societies Act 1962 and now it is working under this Act. Odisha State Cooperative Union presently focuses on providing Cooperative Education, Training, Publicity and Propaganda activities for assisting cooperative organizations in their growth and Prosperous. The activities of Odisha State Cooperative Union caters to the activities of HRD in the field of Cooperative Movement in the state. Dissemination of information activities is one of the core activities of the Union which spreads the message of different plans, schemes, and projects undertaken by the Govt. of Odisha. At the outset, it is providing training for Capacity Building of the Employees, Education for Members, Potential Members and Board of Directors of the Cooperative societies in the state and publication activities for promoting cooperatives in the state.
The the objective of the Union as outlined in its Bye-laws is to promote the the co-operative movement in the State. For facilitating discharge of this enormous the responsibility which has been recognized statutorily with a provision in the Cooperative Societies Act of the State, has been made obligatory on the part of cooperative societies of the State to pay 4% of its net profits each year towards the Cooperative Education Fund constituted to exclude the Short Term Credit Cooperative Societies/Banks.</p>
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'50px 0px 30px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:'5px 0px '}}><center>Mission</center></h3>
    <div className='about_coop_mission_text' style={{margin:'5px 0px',textAlign:'justify',fontFamily:'Domine'}}>To Promote a Strong and Vibrant Cooperative Movement in the State for Eco-friendly, equitable & Socio-Economic Development of Rural People. The responsibility of Union is Cooperative Education, Training, Publicity, propaganda and providing of information's and guidance's.</div>
    </div>

    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',margin:'10px 0px 5px 0px'}}>
    <h3 style={{fontFamily:'Domine',backgroundColor:'#0034B8',color:'white',width:'200px',padding:'5px 0px '}}><center>Vision</center></h3>
    <div className='about_coop_vision_text' style={{margin:'5px 0px',textAlign:'justify',fontFamily:'Domine'}}>
    We build Cooperation for Member's Socio-economic upliftment through Cooperative Education, Training and Information.
</div>
    </div>


   </div> 
   </div>
  );
}



export default NavScrollExample;

