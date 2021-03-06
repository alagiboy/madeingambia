import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import $ from 'jquery';
//import '../public/css/madeingambia.css';
import Companies from './components/Companies';
import AddCompany from './components/RegistrationForm';
import DATA from '../data.js';
//import {Link} from 'react-router'

class ParentLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        companies: [],
        approved_companies: [],
        logoMain : './logo.svg'
      };
  }
//fetch data from store
/*  getApprovedCompanies(){
    $.ajax({
      url: '',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({approved_companies: data}, function(){
          //console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err){
        //console.log(err);
      }
    });
} */

  getCompanies(){
    this.setState({companies : DATA});
  }

  componentWillMount(){
    this.getCompanies();
  }
   handleAddCompany(company){
     let companies = this.state.companies;
     companies.push(company);
     this.state({companies:companies});
   }

  render() {
    return (
      <div className="ParentLayout">
        <div className="container-fluid lt-gray-bg" id="logo">
              <div className="row-fluid">
                  <div className="span12">
                      <a href=".">Sign-up Now!</a>
                  </div>
                  <div className="span12">
                      <a href="."><img src="http://placehold.it/400x400" width="300" height="274" alt="Made In Gambia"/></a>
                  </div>
              </div>
        </div>

        <div className="container-fluid lt-turquoise-bg" id="prom">
            <div className="row-fluid">
                <div className="span12">
                    <h2>These are some of the I.T. and Web Deveploment Companies Made In Gambia, GM!</h2>
                </div>
            </div>
        </div>

        <div id="main-container">
          <div className="container-fluid" id="companies">
              <Companies companies={this.state.companies} />
          </div>
        </div>
      </div>
    );
  }
}

export default ParentLayout;
