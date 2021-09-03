import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Header from '../components/Header';

export default function ProcessForm(){
  const history = useHistory();
  const [clientId, setClientId] = useState("")
  const [stateId, setStateId] = useState("")
  const [initialId, setInitialId] = useState("")
  const [date, setDate] = useState("")
  const [value, setValue] = useState("")
  const [states, setStates] = useState([]);
  const [clients, setClients] = useState([]);
  const [initials, setInitials] = useState([]);

  useEffect(() => {
    getStates();
    getClients();
    getInitials();
  },[])
  
  function getStates(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/states`)
    
    request.then( response => {
      setStates([...response.data])
    })
  }

  function getClients(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/clients`)
    
    request.then( response => {
      setClients([...response.data])
    })
  }

  function getInitials(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/initials`)
    
    request.then( response => {
      setInitials([...response.data])
    })
  }

  function submit(e){
    e.preventDefault();
    const body ={ clientId, stateId, initialId, date, value }
    console.log(body)
    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/process`, body)

    request.then( (response) => {
      const number = response.data.newProcess
      alert(`Processo ${number} cadastrado com sucesso.`)
      history.push('/')
    })
    request.catch( () => alert('Houve algum erro! Tente novamente.'))
  }

  return(
    <>
      <Header />
      <Container>
        <FormTitle>Cadastre um novo Processo:</FormTitle>
        <Form onSubmit={submit}>
          <div>
            <Label htmlfor="clients">Cliente:</Label>
            <Select id="clients" value={clientId} onChange={(e) => setClientId(e.target.value)} >
              <option key={0} value=""></option>
              {clients.map( client => <option key={client.id} value={client.id}>{client.name}</option>)}
            </Select>
          </div>
          <div>
            <Label htmlfor="states">Estado:</Label>
            <Select id="states" value={stateId} onChange={(e) => setStateId(e.target.value)} >
              <option key={0} value=""></option>
              {states.map( state => <option key={state.id} value={state.id}>{state.name}</option>)}
            </Select>
          </div>
          <div>
            <Label htmlfor="type">Tipo do processo:</Label>
            <Select id="type" value={initialId} onChange={(e) => setInitialId(e.target.value)} >
              <option key={0} value=""></option>
              {initials.map( initial => <option key={initial.id} value={initial.id}>{initial.name}</option>)}
            </Select>
          </div>
          <div>
              <Label htmlfor="date">Data de abertura:</Label>
              <Input
                id="date"
                type="date"
                value={date} 
                onChange={(e) => setDate(e.target.value)}  
              />
          </div>
          <div>
            <Label htmlfor="value">Valor:</Label>
            <Input 
              id="value"
              placeholder="Valor"
              type="number"
              value={value} 
              onChange={(e) => setValue(e.target.value)} 
            />
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
  height: 300px;
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
  font-family: 'Roboto Condensed', sans-serif;
  color: #fff;
`