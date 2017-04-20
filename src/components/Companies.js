import React, { Component } from 'react';
import CompanyList from './CompanyList';

class Companies extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let companyList;
    if(this.props.companies){
      companyList = this.props.companies.map(company => {
        return (
          <CompanyList key={company.ranking} url={company.url} title={company.name} logo={company.logo} />
        );
      });
    }
    return (
      <div className="row-fluid">
        {companyList}
      </div>
    );
  }
}


Companies.propTypes = {
  companies: React.PropTypes.array,
  //onDelete: React.PropTypes.func
}

export default Companies;
