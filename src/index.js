
import ReactDOM from 'react-dom/client';

import imgwallpaper from './twitter.png';




const fontWhite = {
  color:'black'
}


function Greeting ({name,city})
{
  return(

    <div style={
      {
        backgroundColor:'yellow',
        borderRadius:'5px',
        boxShadow:'5px 2px 4px 5px black',
        margin:'20px',
        padding:'5px',
        textAlign:'center',
        width:'300px',
      }
    }>
      <h1 style={fontWhite}>Hello,{name}</h1>
      <p>How is Whether at {city}</p>
    </div>
  )
}


//how to add img in js 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <img src={imgwallpaper} height="100px"/>


  <Greeting name="Kunal" city="Talegaon"/>
  <Greeting name="Kunal" city="Talegaon"/>



  </>
  
);

