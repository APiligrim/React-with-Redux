import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Search =() =>{
    const[term, setTerm]=useState('');
    const [results, setResults]=useState([]);

    console.log(results)

    //useEffect must be configured to tell the code when to execute it
    //only has 2nd argument of an array - if array, it will run at initial render
    //run at initial render, run after every rerender

    useEffect(()=>{
        //every time term changes, the code here will be run
        //making a request
        const search = async ()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin:'*',
                    format:'json',
                    srsearch: term,
                }
            });

            setResults(data.query.search);
        };
        if (term){
            search()
        }
    },[term]);

    const renderedResults = results.map((result)=>{
        return(
            <div key={result.pageid} className='item'>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet}}></span>
                   
                </div>
        </div>
        ) 
    })

    return(
       <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        className='input'
                        value={term}
                        onChange={e=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
            {renderedResults}
            </div>
       </div>
    );
};

export default Search;

//every time a new search is types, we would keep track of what is typed 
