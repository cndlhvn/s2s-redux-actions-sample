import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div>
          {this.props.children}
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => { return {}}
const mapDispatchToProps = dispatch => bindActionCreators({},  dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
