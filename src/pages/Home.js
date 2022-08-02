import React from 'react';
import './Home.css';
import Cards from '../components/Cards';
import data from '../backend/data';


function Home() {
  return (
    <div className='container-fluid'> <br/><br/>
     <p className='text-center mt-3 text-uppercase'>shop  page</p> 
     <div className='container py-4'>
      <div className='row'>
      {data.products.map((item, index) => {
        return (
          <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item = {item} key={index} />
        )
      })}
    
      </div> 
      </div> 
        </div>
  )
}

export default Home;