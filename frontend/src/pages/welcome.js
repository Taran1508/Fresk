import { useEffect, useRef } from 'react';
import Sidebar from "../components/sidebar";
import './welcome.css';
import { Link } from 'react-router-dom';


function Welcome() {
  const textRef = useRef(null);
  

  useEffect(() => {
    const sustainabilityQuotes = [
      "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
      "We do not inherit the earth from our ancestors; we borrow it from our children. – Native American Proverb",
      "Sustainability is no longer about doing less harm. It's about doing more good. – Jochen Zeitz",
      "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
      "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another. – Mahatma Gandhi",
      "The future will either be green or not at all. – Bob Brown",
      "There is no such thing as 'away.' When we throw anything away, it must go somewhere. – Annie Leonard",
      "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
      "We cannot solve our problems with the same thinking we used when we created them. – Albert Einstein",
      "One of the first conditions of happiness is that the link between man and nature shall not be broken. – Leo Tolstoy",
      "If you want to go fast, go alone. If you want to go far, go together. – African Proverb",
      "Sustainability is treating ourselves and our environment as if we are to live on this earth forever. – Arron Wood",
      "Waste is a design flaw. – Kate Kreba",
      "There is no power for change greater than a community discovering what it cares about. – Margaret J. Wheatley",
      "In nature, nothing exists alone. – Rachel Carson",
      "We have forgotten how to be good guests, how to walk lightly on the earth as its other creatures do. – Barbara Ward",
      "Live simply so that others may simply live. – Mahatma Gandhi",
      "The first step toward a sustainable future is realizing that every small act can make a big difference. – Anonymous",
      "Every decision we make has an impact on the future. Make it count. – Anonymous",
      "Sustainability is not just about what we consume, but about how we value what we consume. – Anonymous"
  ];
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * sustainabilityQuotes.length);
      return sustainabilityQuotes[randomIndex];
  };

    const intervalId = setInterval(() => {
        if (textRef.current) {
            textRef.current.innerHTML = `${getRandomQuote()}` 
        }
    }, 10000); 

    return () => clearInterval(intervalId);
}, []);

    return (
      <>
        <Sidebar/>
        <section>
          <div className="container">
            <div className="explore">Explore <p ref={textRef} className='text'> </p></div>
            <div className="sub-container">
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="gbook">Grocery Book</div>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="mbook">Medicine Book</div>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="rbook">Recipe Book</div>
            </Link>
            <Link to='/grocery' style={{ color: 'inherit', textDecoration: 'none' }}>
            <div className="community">Community</div>
            </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Welcome;
  