import styled from 'styled-components';

import Process from './Process';

export default function ProcessContainer({processes}){
  return (
    <Container>
      {processes.map( process => <Process key={process.id} data={process} />)}
    </Container>
  )
}

const Container = styled.ul`
  width: 100%;
  margin-top: 20px;
`