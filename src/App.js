//import logo from './logo.svg';
import './App.css';
import Card from './Card';
import styled from '@emotion/styled'
import { salesChampionDataMock, championshipPerion } from './mock'


function App() {
  return (
    <Container className="App">
      <Title>2022 Snubes Sales Champions 
        <Period>{championshipPerion.startMonth} {championshipPerion.startYear} - {championshipPerion.endMonth} {championshipPerion.endYear} </Period>
      </Title>
      <Card name={salesChampionDataMock[1].name} revenue={salesChampionDataMock[1].revenueWon} deals={salesChampionDataMock[1].dealsWon} backgroundColor={"#00afd680"} color={"#00afd680"} trophyColor={"#26AECC"} value={salesChampionDataMock[1].rank}/>
      <Card name={salesChampionDataMock[0].name} revenue={salesChampionDataMock[0].revenueWon} deals={salesChampionDataMock[0].dealsWon} backgroundColor={"#295DFA"} color={"#295DFA"} isChamp={true} trophyColor={"#073BD8"} value={salesChampionDataMock[0].rank}/>
      <Card name={salesChampionDataMock[2].name} revenue={salesChampionDataMock[2].revenueWon} deals={salesChampionDataMock[2].dealsWon}  backgroundColor={"#5132A9"} color={"#5132A9"} trophyColor={"#6E4BD3"} value={salesChampionDataMock[2].rank}/>
    </Container>
  );
}

const Title = styled.div`
color: #334455;
font-weight: 700;
font-size: 12px;
line-height: 18px;
width: 100%;
text-align: left;
`

const Container = styled.div`
border: 1px solid black;
width: 50%;
display: flex;
padding: 10px;
justify-content: center;
align-items: flex-end;
flex-wrap: wrap;
` 
const Period = styled.div`
float: right;
display: inline;
font-weight: 500;
font-size: 10px;
`

export default App;
