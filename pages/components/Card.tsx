import styled from "styled-components";

const StyledCard = styled.div`
  z-index: 1;
  margin: 3rem;
  padding: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);

  @media (max-width: 800px) {
    margin: 1rem;
  }
`;

export default StyledCard;
