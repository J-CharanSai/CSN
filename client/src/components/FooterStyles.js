import styled from 'styled-components';

export const Box = styled.div`
  padding: 20px 60px;
  background: #512da8;
  position:Relative;
  bottom:0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding-top: 70px;
    padding-left:10px;
    padding-right:10px
    padding-bottom: 0px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 20px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  display: inline;
   
  &:hover {
      color: black;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;