import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import desertImg from './../../images/supermountains.jpg'

const Header = () => {
  // console.log('Hello, this is your console log in hero.jsx:', hero)
  const { hero } = useContext(PortfolioContext);
  const { name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          {/* <img width={'120%'} background-size={'100%'} alt='mountains' src={desertImg} /> */}
          <h1 className="hero-title">
            {'Hi, my name is'}{' '}
            <span className="text-color-main">{'Forrest'}</span>
            <br />
            {"I'm a full stack developer"}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );


// const styles = StyleSheet.create({
//   desertPic: {
//     width: '100%'}
    
// webkit-mask-image: -webkit-gradient(
//     linear,
//     left top,
//     left bottom,
//      from(rgba(4, 0, 0, 2)),
//      to(rgba(0, 0, 0, 0))
//    );
//    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 20), rgba(0, 0, 0, 0));

  


// #grantimg {
//   width: 100vw;
//   -webkit-mask-image: -webkit-gradient(
//     linear,
//     left top,
//     left bottom,
//     from(rgba(4, 0, 0, 2)),
//     to(rgba(0, 0, 0, 0))
//   );
//   mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 20), rgba(0, 0, 0, 0));
// }
// });
};

export default Header;
