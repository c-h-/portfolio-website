import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import styled from "styled-components";

import StyledCard from "../Card";

const StyledHeader = styled.h1`
  margin: 0;
  font-size: 3rem;
`;

const StyledSubHeader = styled.h2`
  margin: 0.1rem 0 1rem;
`;

const StyledNavbar = styled.div`
  & a {
    margin-right: 0.5rem;

    :last-child {
      margin-right: 0;
    }
    svg {
      width: 1.5rem;
      height: 1.5rem;
      transition: transform ease-in-out 50ms;
      transform: scale(1);

      &:hover {
        transform: scale(1.1);
      }

      @media (max-width: 800px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledCard>
      <StyledHeader>Charlie Hulcher</StyledHeader>
      <StyledSubHeader>Senior Software Engineer</StyledSubHeader>
      <p>
        <em>Welcome to my web tech playground.</em>
      </p>
      <StyledNavbar>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/charliehulcher/"
          title="Charlie's LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/c-h-/"
          title="Charlie's GitHub Profile"
        >
          <FaGithubSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/chulcher"
          title="Charlie's LinkedIn"
        >
          <FaTwitterSquare />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/that_c_h/"
          title="Charlie's Instagram"
        >
          <FaInstagramSquare />
        </a>
      </StyledNavbar>
    </StyledCard>
  );
};

export default Header;
