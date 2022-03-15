import React from "react";
import { Formik } from "formik";

class SearchForm extends React.Component {
    state = {
        // passes search criteria to calling page
        setParentSearchCriteria: '',
      }
    
      constructor (props) {
        super (props);    
        this.state.setParentSearchCriteria = props.setParentSearchCriteria;
      }
    
      // set parent's search criteria to input value
      search = () => {
        let search_string = document.getElementById("search_string").value;
        if (search_string)
            this.state.setParentSearchCriteria (search_string);
      }
    
      render () {
        return (
            <Formik
            initialValues={{
              searchCriteria: "",
            }}
            onSubmit={this.search}
            >
            {() => {
              return (
                <div className="input-group">
                  <input id="search_string" style={{visibility:this.props.visibility}} type="search" className="form-control rounded mr-2" placeholder="Search condition" aria-label="Search" aria-describedby="search-addon" />
                  <button type="submit" style={{visibility:this.props.visibility}} className="btn" onClick={this.search}>Search</button>
                </div>
              );}}
            </Formik>
    )}
}

export default SearchForm;
