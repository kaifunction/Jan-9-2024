import harvardArt from "../../data/harvardArt";
import { NavLink, Link, useParams } from 'react-router-dom';



function GalleryNavigation({ galleries }) {
     const galleryId = useParams();

     return(
          <nav>
               <h1>Galleries</h1>
               <NavLink to='/'>Home</NavLink>
          </nav>
     )
}


export default GalleryNavigation;
