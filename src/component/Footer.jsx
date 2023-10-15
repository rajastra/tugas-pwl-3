import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
   return (
      <footer className="footer">
         <p>Made with <FontAwesomeIcon icon={faHeart} /> by Raja</p>
      </footer>
   );
}

export default Footer;