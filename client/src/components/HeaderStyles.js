import styled from 'styled-components';

export const Box = styled.div`
  padding: 10px 10px;
  background: black;
  position: relative;
  top: 0;
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
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 5px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 5px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const HeaderLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: grey;
      transition: 200ms ease-in;
  }
`;

export const a = styled.p`
display: inline-block;
    text-align: left;
`;