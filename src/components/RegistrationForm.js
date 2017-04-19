import React, { Component } from 'react';

class AddCompany extends Component {
  constructor(){
    super();
    this.state = {
      newCompany:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development', 'IT Sales and Services', 'IT Consulting']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        name: this.refs.name.value,
        category: this.refs.category.value,
        address: this.refs.address.value,
        c_number: this.refs.c_number.value,
        email_address: this.refs.email_address.value,
        url: this.refs.url.value,
        logo: this.refs.logo.value,
        date_of_establishment: this.refs.date_of_establishment.value

      }}, function(){
        //console.log(this.state);
        this.props.AddCompany(this.state.newCompany);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Register Your Company</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Company Name</label><br />
            <input type="text" ref="name" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <div>
            <label>Company Address</label><br />
            <input type="text" ref="address" />
          </div>
          <div>
            <label>Contact Number</label><br />
            <input type="text" ref="c_number" />
          </div>
          <div>
            <label>Email Address</label><br />
            <input type="text" ref="email_address" />
          </div>
          <div>
            <label>Confirm Email Address</label><br />
            <input type="text" ref="confirm_email" />
          </div>
          <div>
            <label>Website</label><br />
            <input type="text" ref="url" />
          </div>
          <div>
            <label>Copany Logo</label><br />
            <input type="text" ref="logo" />
          </div>
          <div>
            <label>Date of Establishment</label><br />
            <input type="text" ref="date_of_establishment" />
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

AddCompany.propTypes = {
  categories: React.PropTypes.array,
  AddCompany: React.PropTypes.func
}

export default AddCompany;
