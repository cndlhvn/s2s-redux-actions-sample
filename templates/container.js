import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions'

class ClassNameHere extends Component{
  render () {
    return ()
  }
}

ClassNameHere.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {}
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {},
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ClassNameHere)
