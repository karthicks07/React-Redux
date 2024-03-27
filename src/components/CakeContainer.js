import React from 'react'
import { buycake } from '../redux/cakes/cakeactions'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buycake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cakereducer.numOfCakes 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buycake: () => dispatch(buycake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
