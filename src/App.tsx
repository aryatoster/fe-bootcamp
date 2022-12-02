import './App.css';
import styled from '@emotion/styled'
import './App.css';
import Card from './Card';
import { salesChampionDataMock, championshipPerion } from './mock'
import getData from './data'
import {useEffect, useState} from 'react';

const ComponentContainer = styled.div`
width: max-content;
margin: auto;
`

const Title = styled.div`
color: #334455;
font-weight: 700;
font-size: 12px;
line-height: 18px;
text-align: left;
`
const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const CardContainer = styled.div`
width: max-content;
display: flex;
justify-content: center;
align-items: flex-end;
flex-wrap: wrap;
` 
const Period = styled.div`
font-weight: 500;
font-size: 10px;
`
interface UserDetails {
  city: string;
  postal: string;
}

function App() {
  const [userInfo, setUserInfo] = useState<UserDetails>();
  useEffect(() => {getData().then(response => setUserInfo(response));}, []);
  return (
    <ComponentContainer>
      <TitleContainer>
        <Title>2022 Snubes Sales Champions </Title>
        <Period>{championshipPerion.startMonth} {championshipPerion.startYear} - {championshipPerion.endMonth} {championshipPerion.endYear} </Period>
      </TitleContainer>
      <CardContainer className="App" data-testid='champions'>
        <Card name={salesChampionDataMock[1].name}  city={userInfo?.city} postcode={userInfo?.postal} backgroundColor={"#00afd680"} color={"#00afd680"} trophyColor={"#26AECC"} value={salesChampionDataMock[1].rank} width={"181px"}/>
        <Card name={salesChampionDataMock[0].name} city={userInfo?.city} postcode={userInfo?.postal} backgroundColor={"#295DFA"} color={"#295DFA"} isChamp={true} trophyColor={"#073BD8"} value={salesChampionDataMock[0].rank} width={"237px"}/>
        <Card name={salesChampionDataMock[2].name} city={userInfo?.city} postcode={userInfo?.postal} backgroundColor={"#5132A9"} color={"#5132A9"} trophyColor={"#6E4BD3"} value={salesChampionDataMock[2].rank} width={"176px"}/>
      </CardContainer>
    </ComponentContainer>
  );
}

export default App;
