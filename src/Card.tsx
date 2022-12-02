import styled from '@emotion/styled'
import Trophy from './Trophy'

interface CardProps {
    width?: string;
    color?: string;
    value?: number;
    backgroundColor?: string;
    trophyColor?: string;
    isChamp?: boolean;
    name?: string;
    city?: string;
    postcode?: string;
}

const Rank = styled.div(props => ({
    fontWeight: "900",
    fontSize: "36px",
    color: props.color,
    fontStyle: "italic",
    fontFamily: "roboto",
}))

const CardItem = styled.div<CardProps>`
    background-color: ${(props) => props.backgroundColor};
    height: ${(props) => props.isChamp? "170px" : "132px"};
    svg {
        width: ${(props) => props.isChamp?  "90px" : "60px"};
        top: ${(props) => props.isChamp? "10%" : "30%"};
        left: ${(props) => props.isChamp? "74%" : "83%"};
        height: ${(props) => props.isChamp?  "90px" : "60px"};
        path {fill: ${(props) => props.trophyColor}}
        position: absolute;
    };
    text-align: left;
    overflow: hidden;
    padding: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
`


const CardBox = styled.div<CardProps>`
width: ${(props) => props.width};
`

const Card = (props: CardProps) => {
    return <CardBox width={props.width} data-testid='cardbox'>
        <Rank color={props.color}> {props.value} </Rank>
        <CardItem backgroundColor={props.backgroundColor} trophyColor={props.trophyColor} isChamp={props.isChamp}>
            <Trophy></Trophy>
            <p data-testid='userName' className='rowName'>{props.name}</p>
            <p data-testid='userCity'> {props.city} </p>
            <p data-testid='userPostal'> {props.postcode} </p>
        </CardItem>
    </CardBox>;
  }

  export default Card;