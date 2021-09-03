import styled from 'styled-components';
import dayjs from 'dayjs';

export default function Process({data}){
  const currency = Intl.NumberFormat('pt-Br')

  return (
    <Container>
      <p>Processo: {data.number}</p>
      <ProcessData> 
        <p>Data de abertura: {dayjs(data.createdDate).format('DD/MM/YYYY')} </p>
        <p>Estado: {data.state}</p>
        <p>Status: {data.status ? 'Ativo' : "Inativo"}</p>
      </ProcessData>
      <p>Valor: R$ {currency.format(data.value)}</p>      
      
      

      <Client>
        <p>Cliente: {data.client}</p> 
        <p>CNPJ: {data.cnpj}</p>
        <p>Estado: {data.clientState}</p>
      </Client>
    </Container>
  )
}

const Container = styled.li`
  margin: 20px 0;
  border-radius: 10px;
  padding: 10px;
  background-color: #fc955b;
  box-shadow: 0px 2px 5px #000;
  font-family: 'Roboto Condensed', sans-serif;
`
const Client = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: flex-start;
  p {
    margin-right: 10px;
  }
`
const ProcessData = styled.div`
  margin: 4px 0;
  display: flex;
  justify-content: flex-start;
  p{
    margin-right: 10px;
  }
`