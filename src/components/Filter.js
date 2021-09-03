import styled from "styled-components"

export default function Filter({
  statusQuery, setStatusQuery, clients, clientQuery, setClientQuery, states, stateQuery, setStateQuery, initials, initialQuery, setInitialQuery, valueQuery, setValueQuery, getProcessByFilter}){

  return (
    <Container>
      Filtrar por:
      <Form onSubmit={getProcessByFilter}>
        <div>
          <Label htmlfor="status">Status</Label>
          <Select id="status" value={statusQuery} onChange={(e) => setStatusQuery(e.target.value)} >
            <option  value="all">Todos</option>
            <option  value='true'>Ativo</option>
            <option  value='false'>Inativo</option>
          </Select>
        </div>
        <div>
          <Label htmlfor="clients">Clientes</Label>
          <Select id="clients" value={clientQuery} onChange={(e) => setClientQuery(e.target.value)} >
            <option key={0} value="all">Todos</option>
              {clients.map( client => <option key={client.id} value={client.id}>{client.name}</option>)}
          </Select>
        </div>
        <div>
          <Label htmlfor="states">Estados</Label>
          <Select id="states" value={stateQuery} onChange={(e) => setStateQuery(e.target.value)} >
            <option key={0} value="all">Todos</option>
              {states.map( state => <option key={state.id} value={state.id}>{state.name}</option>)}
          </Select>
        </div>
        <div>
          <Label htmlfor="initials">Tipo de processo</Label>
          <Select id="initials" value={initialQuery} onChange={(e) => setInitialQuery(e.target.value)} >
            <option key={0} value="all">Todos</option>
              {initials.map( initial => <option key={initial.id} value={initial.id}>{initial.name}</option>)}
          </Select>
        </div>
        <div>
            <Label htmlfor="value">Valor maior que</Label>
            <Input 
              id="value"
              placeholder="Valor"
              type="number"
              value={valueQuery} 
              onChange={(e) => setValueQuery(e.target.value)} 
            />
        </div>
        <Button>Aplicar filtro</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  height: 150px;
  background-color: #4f5a7b;
  box-shadow: 0px 2px 5px #000;
  color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
`
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 80%;
  margin-top: 5px;
  padding: 0 10px;

  >div{
    width: 150px;
  }
`
const Label = styled.label`
  font-size: 14px;
`
const Button = styled.button`
  width: 150px;
  height: 40px;
`
const Select = styled.select`
  width: 100%;
  height: 25px;
`
const Input = styled.input`
  width: 100%;
  height: 25px;
`