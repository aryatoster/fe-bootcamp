import styled from '@emotion/styled'
import Trophy from './Trophy'

const Card = (props) => {
    return <CardBox width={props.width}>
        <Rank color={props.color}> {props.value} </Rank>
        <CardItem backgroundColor={props.backgroundColor} trophyColor={props.trophyColor} isChamp={props.isChamp}>
            <Trophy></Trophy>
            <p className='rowName'> {props.name} </p>
            <p> {props.revenue} revenue won</p>
            <p> {props.deals} deals won</p>
        </CardItem>
    </CardBox>;
  }

const CardBox = styled.div(props => ({
    width: props.width,
}))

const Rank = styled.div(props => ({
    fontWeight: "900",
    fontSize: "36px",
    color: props.color,
    fontStyle: "italic",
    fontFamily: "roboto",
}))

const CardItem = styled.div(props => ({
    backgroundColor: props.backgroundColor,
    height: props.isChamp? "170px" : "132px",
    textAlign: "left",
    overflow: "hidden",
    padding: "15px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    svg: {width: props.isChamp? "90px" : "60px",
    height: props.isChamp? "90px" : "60px",
    path: {fill: props.trophyColor},
    position: "absolute",
    top: props.isChamp? "10%" : "30%",
    left: props.isChamp? "74%" : "83%",
}

}))

  export default Card;