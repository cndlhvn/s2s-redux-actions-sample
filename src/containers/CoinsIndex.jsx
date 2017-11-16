import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CoinsIndex extends Component{
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coins Index</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { return {}}
const mapDispatchToProps = dispatch => bindActionCreators({},  dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CoinsIndex)
