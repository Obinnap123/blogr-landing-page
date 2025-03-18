import Logo1 from './logo.svg';
import Hamburger from './icon-hamburger.svg';
import Close from'./icon-close.svg';
import Circle from './bg-pattern-circles.svg'
import Editor1 from './illustration-editor-desktop.svg'
import Editor2 from './illustration-editor-mobile.svg'
import Phone from './illustration-phones.svg'

// Define an interface for the Images object
interface Images {
    Logo1: string;
    Hamburger:string;
    Close:string;
    Circle:string;
    Editor1:string;
    Editor2:string;
    Phone:string;
    // Add more images here if needed
  }
  

  const Images: Images = {
    Logo1,
    Hamburger,
    Close,
    Circle,
    Editor1,
    Editor2,
    Phone,
    // Add more images here if needed
  };

  // Export the Images object
export default Images;