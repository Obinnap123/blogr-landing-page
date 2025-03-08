import Logo1 from './logo.svg';
import Hamburger from './icon-hamburger.svg';
import Close from'./icon-close.svg';

// Define an interface for the Images object
interface Images {
    Logo1: string;
    Hamburger:string;
    Close:string;
    // Add more images here if needed
  }
  

  const Images: Images = {
    Logo1,
    Hamburger,
    Close,
    // Add more images here if needed
  };

  // Export the Images object
export default Images;