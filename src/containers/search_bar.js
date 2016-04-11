import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    /**
    * @desc another way to bind context
    */
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  /**
  * @desc go and fetch weather data.
  * because we connect our action creators via
  * mapDispatchToProps, we can call our action
  * via a prop: this.props.fetchWeather();
  */
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
   return (
    <form onSubmit={this.onFormSubmit} className="input-group">
      <input
        placeholder="Get a five day forcast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange.bind(this)} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
    </form>
   ) ;
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);