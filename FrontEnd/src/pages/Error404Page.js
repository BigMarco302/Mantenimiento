 import React from 'react'
 import '../styles/Error.css';
import ERROR from '../img/4042.png';
import { useTitle } from '../hooks/useTitle'
import '../styles/HomePage.css';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
export const Error404Page = () => {
   let pages = useNavigate();
   useTitle('Dashboard IoT | Error 404');
   return (
      <div class='page'> 
         <img src={ERROR} class="imagen"></img>


         <div  class ="page2">
            <button type="button" class="boton"  onClick={() => pages('/')}>Regresar</button>
         </div>
      </div>
   )
}
