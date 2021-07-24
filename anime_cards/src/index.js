import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Data from './Data';



ReactDOM.render(
  <>
  <h1 className='Heading_style'> List of top best Anime</h1>
  {Data.map((value)=>{
  return(
    <Card 
    C_name ={value.C_name}
    img_scr={value.img_scr}
    title={value.title}
    links={value.links}
  />
  )
})}
  </>,
  document.getElementById('root')
);

