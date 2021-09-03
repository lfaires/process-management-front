import styled from 'styled-components';

export default function Dashboard({processes}) {
  const currency = Intl.NumberFormat('pt-Br',{style: 'currency', currency: 'BRL'})
  
  function calculate(){
    const sum = processes.reduce( (acc,p) => acc + p.value,0)
    return {sum, average: sum / processes.length}
  }

  return(
    <Dash>
      <Value>Processos encontrados: {processes.length} </Value>
      <Value>Soma: {currency.format(calculate().sum)} </Value>
      <Value>Média: {currency.format(calculate().average)} </Value>
    </Dash>
  )
}

const Dash = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 25px;
  background-color: #4f5a7b;
  box-shadow: 0px 2px 5px #000;
`
const Value = styled.div`
  font-size: 20px;
  padding: 10px;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
`