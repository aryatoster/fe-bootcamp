//import logo from './logo.svg';
import './App.css';
import Card from './Card';
import styled from '@emotion/styled'


function App() {
  return (
    <Container className="App">
      <Card name={"John Winchester"} revenue={"1000$"} deals={"100"} height={"180px"} backgroundColor={"#00afd680"} color={"#00afd680"} value={"2"}/>
      <Card name={"Mary Winchester"} revenue={"1000$"} deals={"100"} height={"250px"} backgroundColor={"#295DFA"} color={"#295DFA"} value={"1"}/>
      <Card name={"Dean Winchester"} revenue={"1000$"} deals={"100"} height={"180px"}  backgroundColor={"#5132A9"} color={"#5132A9"} value={"3"}/>
    </Container>
  );
}

const Container = styled.div`
border: 1px solid black;
width: 50%;
height: 500px;
display: flex;
padding: 10px;
justify-content: center;
align-items: flex-end;
` 

export default App;
