import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

export default function ClientForm(){
  const history = useHistory();
  const [states, setStates] = useState([]);
  const [stateId, setStateId] = useState();
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  console.log(process.env.REACT_APP_API_BASE_URL)
  useEffect( () => getStates(),[])

  function getStates(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/states`)
    
    request.then( response => {
      setStates([...response.data])
    })
  }

  function submit(e){
    e.preventDefault()
    const body ={ name, cnpj, stateId }

    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/clients`, body)

    request.then( () => {
      alert('Cliente cadastrado com sucesso')
      history.push('/')
    })
    request.catch( () => alert('Houve algum erro! Tente novamente.'))
  }

  return(
    <>
      <Header />
      <Container>
        <FormTitle>Cadastre um novo cliente:</FormTitle>
        <Form onSubmit={submit}>
          <div>
            <Label htmlfor="client">Cliente:</Label>
            <Input
              id="client" 
              placeholder="Nome do cliente" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Label htmlfor="cnpj">CNPJ:</Label>
            <Input 
              id="cnpj"
              placeholder="CNPJ"
              maxLength="14"
              value={cnpj} 
              onChange={(e) => setCnpj(e.target.value)}
            />
          </div>
          <div>
            <Label htmlfor="states">Estado:</Label>
            <Select id="states" value={stateId} onChange={(e) => setStateId(e.target.value)} >
              <option key={0} value=""></option>
              {states.map( state => <option key={state.id} value={state.id}>{state.name}</option>)}
            </Select>
          </div>
          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </>
)
}

const Container = styled.main`
  margin-top: 110px;
  display: flex;
  flex-direction:  column;
  align-items: center;
`
const FormTitle = styled.h2`
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
  margin-bottom: 15px;
`
const Form = styled.form`
  width: 375px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`
const Input = styled.input`
   width: 375px;
  height: 25px;
`
const Select = styled.select`
  width: 375px;
  height: 25px;
`
const Button = styled.button`
  width: 75%;
  height: 25px;
  font-family: 'Roboto Condensed', sans-serif;
  border-radius: 5px;
`
const Label = styled.label`
  width: 100%;
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
`