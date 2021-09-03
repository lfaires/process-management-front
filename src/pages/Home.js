import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Filter from '../components/Filter';
import ProcessContainer from '../components/ProcessContainer';

export default function Home() {
  const history = useHistory()
  const [processes, setProcesses] = useState([])
  const [states, setStates] = useState([]);
  const [clients, setClients] = useState([]);
  const [initials, setInitials] = useState([]);

  const [statusQuery, setStatusQuery] = useState('');
  const [clientQuery, setClientQuery] = useState('');
  const [stateQuery, setStateQuery] = useState('');
  const [initialQuery, setInitialQuery] = useState('');
  const [valueQuery, setValueQuery] = useState('');

  useEffect(() => {
    getProcesses();
    getStates();
    getClients();
    getInitials();
  },[])

  function getProcesses(){
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/process`)

    request.then( response => {
      const data = [...response.data]
      setProcesses(data)
    })
  }
  
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

  function submit(page){
    history.push(`/register-${page}`)
  }

  function getProcessByFilter(e){
    e.preventDefault();
    
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/process?${queryString()}`)

    request.then( response => {
      const data = [...response.data]
      setProcesses(data)
    })
    
  }

  function queryString(){
    let query = statusQuery ? `&status=${statusQuery}` : '';
    query += clientQuery ? `&clientId=${clientQuery}` : '';
    query += stateQuery ? `&stateId=${stateQuery}` : '';
    query += initialQuery ? `&initialId=${initialQuery}` : '';
    query += valueQuery ? `&value=${valueQuery}` : '';
    console.log(query)
    return query
  }

  return (
    <Container>
      <Header />
      <Body>
        <Left>
          <Dashboard processes={processes} />
          <Filter 
            processes={processes}
            getProcessByFilter={getProcessByFilter} 
            statusQuery={statusQuery} 
            setStatusQuery={setStatusQuery}
            clients={clients}
            clientQuery={clientQuery} 
            setClientQuery={setClientQuery}
            states={states}
            stateQuery={stateQuery}
            setStateQuery={setStateQuery}
            initials={initials}
            initialQuery={initialQuery}
            setInitialQuery={setInitialQuery}
            valueQuery={valueQuery}
            setValueQuery={setValueQuery}  
          />
          <ProcessContainer processes={processes} />
        </Left>
        <Right>
          <Button onClick={() => submit('process')}>Cadastrar novo processo</Button>
          <Button onClick={() => submit('client')}>Cadastrar novo cliente</Button>
        </Right>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Body = styled.div`
  margin-top: 110px;
  width: 50vw;
  display: flex;
  justify-content: space-between;
`
const Right = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Left = styled.div`
  width: 80%;
`
const Button = styled.button`
  height: 60px;
  width: 75%;
  margin-bottom: 30px;
  font-family: 'Roboto Condensed', sans-serif;
  border-radius: 5px;
`