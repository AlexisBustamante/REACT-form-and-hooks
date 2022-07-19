import { useState } from 'react'
import UserForm from './components/UserForm'
import Card from './components/Card'
import Container from './components/Container'

function App() {
  const [usuarios, setUsuarios] = useState([])


  const enviar = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }


  return (
    <div style={{ marginTop: '15px' }}>
      <Container>
        <Card>
          <div style={{ padding: '20px' }}>
            <UserForm submit={enviar} />
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x =>
              <li key={x.name}>{`${x.name}`}</li>)
            }
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;

