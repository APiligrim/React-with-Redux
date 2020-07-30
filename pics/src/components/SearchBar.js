import React from 'react';

class SearchBar extends React.Component{
    state ={
        term:''
    };

    //call back function
    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.term)

        //whenever the user runs a submit in the search bar, the onFormsubmit will get called
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type='text' 
                            value={this.state.term} 
                            onChange={e=>this.setState({term:e.target.value})}/> 
                    </div>
                </form>
            </div>
        ) ;
    }
}

export default SearchBar;

// <input type='text' onChange={this.onInputChange}/>  if this line has this.onInputChange(), it will get called every time the render method is called