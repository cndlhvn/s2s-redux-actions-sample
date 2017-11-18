import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'
import styled from 'styled-components'
import { Link} from 'react-router'
import {Breadcrumb,ListGroup,ListGroupItem,PageHeader,Panel} from 'react-bootstrap';

class CoinsShow extends Component{
  componentDidMount(){
   this.props.getCoinRequest(this.props.params.id)
  }

  render () {
    const { coin } = this.props

    const data = Object.keys(coin).map(key => (
      <ListGroupItem key={key}><small>{key}: {coin[key]}</small></ListGroupItem>
    ))

    return (
      <Wrapper>
        <PageHeader>Coins Show</PageHeader>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to='/'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {coin.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <Panel header={coin.name}>
          <ListGroup>
            {data}
          </ListGroup>
        </Panel>
      </Wrapper>
    )
  }
}

CoinsShow.propTypes = {}


const Wrapper = styled.div`
  margin: 25px 40px;
`

const mapStateToProps = (state, ownProps) => {
  return {
    coin: state.coin.coin
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getCoinRequest: bindActionCreators( actions.getCoinRequest, dispatch)
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(CoinsShow)
