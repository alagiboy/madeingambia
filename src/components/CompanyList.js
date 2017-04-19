import React, { Component } from 'react';

class CompanyList extends Component {

  render() {
    //let companyList;
    //console.log(this.props)
    return (
      <div className="span4">
        <a target="_blank" className="company" title={this.props.title} href={this.props.url}><img alt={this.props.title} src={this.props.logo} /></a>
      </div>
    );
  }
}


export default CompanyList;
