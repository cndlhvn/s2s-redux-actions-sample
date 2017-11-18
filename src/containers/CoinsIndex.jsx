import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'react-bootstrap';
import styled from 'styled-components'
import { getCoinsRequest } from '../actions'
import { Link } from 'react-router';

class CoinsIndex extends Component{
  componentDidMount() {
    this.props.getCoinsRequest()
  }
  render () {
    const { coins } = this.props.coins

    const data = coins.map(({ id, name, price_usd, price_btc }) => {
      return(
        <tr key={id}>
          <td><Link to={`/coins/${id}`}>{name}</Link></td>
          <td>{price_usd}</td>
          <td>{price_btc}</td>
        </tr>
      )
    })
    return (
      <Wrapper>
        <header className="App-header">
          <h1 className="App-title">Coins Index</h1>
        </header>
        <div>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price USD</th>
                <th>Price BTC</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </Table>
        </div>
      </Wrapper>
    )
  }
}

CoinsIndex.propTypes = {
  coins: PropTypes.object.isRequired
}

const Wrapper = styled.div`
  margin: 25px 40px;
`
const mapStateToProps = (state, ownProps) => {
  return {
    coins: state.coins
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCoinsRequest
},dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CoinsIndex)
