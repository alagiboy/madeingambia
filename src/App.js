import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import $ from 'jquery';
//import '../public/css/madeingambia.css';
import Companies from './components/Companies';
import AddCompany from './components/RegistrationForm';
import DATA from '../data.js';
//import {Link} from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        companies: [],
        approved_companies: [],
        logoMain : '../img/logo.png'
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
      <div className="App">
        <div className="container-fluid lt-gray-bg" id="header">
              <div className="row-fluid">
                  <div className="span12 utility">
                      <a className="signupLink" href=".">Add Your Company</a>
                  </div>
                  <div className="span12 hero">
                      <a href="."><img src="img/logo.png" alt="Made In Gambia"/></a>
                  </div>
              </div>
        </div>

        <div className="container-fluid" id="prom">
            <div className="row-fluid">
                <div className="span12">
                    <p>
                    Lorem ipsum dolor sit amet, vim decore appellantur ad, duo eu purto invidunt platonem, mea no nihil semper. Mea aeque accusamus philosophia at. Eu sit purto prompta scribentur, te vel purto menandri, duo delicata appellantur ea. Ne purto mutat temporibus nam, eu ullum lobortis mnesarchum quo. Te ius legere invidunt, labore dissentias et per. Ut vide sensibus corrumpit pri, ea nam eros admodum euripidis.
Noster timeam at pri.</p>
                    <p> No mea laudem mediocritatem. Impetus aperiam at sed, suas invidunt accusamus pro ei. Legimus assentior vel ut, eu feugiat omnesque principes nec. Vocibus deserunt persecuti at mei, has sumo quot consectetuer an.
                    </p>
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

export default App;
