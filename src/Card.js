import styled from '@emotion/styled'

const Card = (props) => {
    return <CardBox>
        <Rank className="rank" color={props.color}> {props.value} </Rank>
        <CardItem height={props.height} backgroundColor={props.backgroundColor}>
            <p className='rowName'> {props.name} </p>
            <p> {props.revenue} revenue won</p>
            <p> {props.deals} deals won</p>
            <TrophyItem src="Trophy.svg" alt='Trophy' width="60px" height="60px">
            </TrophyItem>
        </CardItem>
    </CardBox>;
  }

const CardBox = styled.div`
width: 30%;
`

const Rank = styled.div(props => ({
    fontWeight: "900",
    fontSize: "36px",
    color: props.color,
    fontStyle: "italic",
}))

const CardItem = styled.div(props => ({
    backgroundColor: props.backgroundColor,
    height: props.height,
    textAlign: "left",
    padding: "10px",
    position: "relative"
}))

const TrophyItem = styled.img`
    color: red;
    position: absolute;
    left: 27.71%;
    right: 66.04%;
    top: 81.81%;
    bottom: 7.76%;
`


  export default Card;