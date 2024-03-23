// MainHome.tsx
import React from 'react';
import { AppContext } from '../../Context';
import{ useContext } from 'react';
import i from '../../assets/i.png'

  
function MainHome() {
  const { products, addToCart } = useContext(AppContext); 

  return (
    <div>
      <div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '34rem', backgroundColor: 'rgb(222 222 222)',gap:"113px"}}>
          <div>
            <h1 style={{fontSize: '3rem',}}>Collections</h1>
            <div style={{fontSize: '1.5rem', display: 'flex', flexDirection: 'column'}}>
              <p>you can explore ans shop many differnt collections</p>
              <p>from various barands here.</p>
            </div>
             
            <button 
             style={{backgroundColor:'#292758',color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
             onMouseOver={(e) => {
               e.currentTarget.style.backgroundColor = '#454080';
                 }}
                 onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#292758';
                    }}>
               Shop Now
            </button>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{position: 'relative',zIndex: '8',height: '400px',width: '320px',border: '3px solid #ccc' ,borderTopLeftRadius:'160px',borderBottomRightRadius:'160px'}}></div>
            <img src={i} style={{position: 'relative',zIndex: '9',height: '400px',width: '320px', borderTopLeftRadius:'160px',borderBottomRightRadius:'160px', marginLeft:'-344px',marginTop:'-20px'}} alt="" /></div>

        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
       <h1>Prodotti</h1>
       <ul style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {products.map(product => (
          <div key={product.id} style={{width: '300px',padding: '10px', margin: '10px',borderRadius: '15px'}}>
            <li key={product.id} style={{listStyle: 'none'}}>
              <div style={{height: '250px', width: '200px'}}><img style={{width: '100%', height: '100%'}} src={product.image} alt="" /></div>
               <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
               <div>
                <h2>{product.title}</h2>
                <p>Prezzo: ${product.price}</p>
               </div>
               <div>
                <button onClick={() => addToCart(product.id)}>Aggiungi al Carrello</button>
               </div>
               

               </div>
               
            </li>

          </div>
          
        ))}
       </ul>
      </div>
    </div>
  );
}

export default MainHome;