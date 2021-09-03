import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const history = useHistory()

  function goToHomePage(){
    history.push('/')
  }

  return <Head onClick={goToHomePage}>GERENCIADOR DE PROCESSOS TRINKS</Head>;
}

const Head = styled.header` 
  background-color: #1e2640;
  text-align: center;
  font-family: 700;
  font-size: 35px;
  color: #fc955b;
  width: 100vw;
  height: 69px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  box-shadow: 0px 2px 5px #000;
  cursor: pointer;
`;