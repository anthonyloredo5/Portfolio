import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div>
          <Button
            href="https://github.com/anthonyloredo5"
            style={{ color: 'white' }}
            size="small"
            target="_blank"
          >
            <GitHubIcon fontSize="large" />
          </Button>
          <Button
            href="https://www.linkedin.com/in/anthony-loredo-27805a18a/"
            style={{ color: 'white' }}
            size="small"
            target="_blank"
          >
            <LinkedInIcon fontSize="large" />
          </Button>
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed by{' '}
          <a href="https://github.com/anthonyloredo5" target="_blank" rel="noopener noreferrer">
            Anthony Loredo
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
