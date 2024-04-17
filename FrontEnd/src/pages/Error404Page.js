 import React from 'react'
 import '../styles/Error.css';
import ERROR from '../img/4042.png';
import { useTitle } from '../hooks/useTitle'
import '../styles/HomePage.css';
export const Error404Page = () => {
   useTitle('Dashboard IoT | Error 404');
   return (
      <div class='page'> 
         <img src={ERROR} class="imagen"></img>
         <button type="button" class="btn btn-primary">Botón Azul</button>

      </div>
   )
}
