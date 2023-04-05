import Pagina from '../components/Pagina';
import { Container } from 'react-bootstrap';

const array = () => {

  const carros = ['Civic', 'Tucson', 'Celta', 'Tempra', 'Marea', 'Doblo']

  const pessoa= {
    nome:'Bruno',
    idade: 27,
    telefone: '(61) 98164-0414'
  }
  return (
      <>
        <Pagina titulo="Arrays">
         <Container>
             
             {carros.map(item =>(
                <P>{item}</P>
             ))}

         </Container>
        </Pagina>
      </>
  )
}

export default array