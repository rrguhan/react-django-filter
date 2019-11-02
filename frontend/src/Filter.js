import React, { Component } from 'react'
import axios from 'axios';
import './Filter.css';
import {Link} from 'react-router-dom';

export class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Season: '',
            No_in_series: '',
            Company: '',
            Deal: '',
            Industry: '',
            Entrepreneur_Gender: '',
            Amount: '',
            Equity: '',
            Valuation: '',
            Corcoran: '',
            Cuban: '',
            Greiner: '',
            Herjavec: '',
            John: '',
            Oleary: '',
            Harrington: '',
            Guest: '',
            Sharks: '',
            pershark: '',
            DetailsNotes: '',
            currentgender : '',
            currentseason : '',
            temp: [],
            lis : [],
            
        
        };

        this.refresh();
        
    }
    refresh = () =>{
        axios
        .get("http://127.0.0.1:8000/api/DataView/")
        .then(res => this.setState({  temp:res.data , lis: res.data }));
        
        }
        
    fun = e =>{
        const target = e.target;
        const value = target.value;
       
        this.setState({currentgender :value});
        this.state.lis = this.state.temp.slice();
        let result = this.state.lis.filter(obj => obj.Entrepreneur_Gender == value);
        this.setState({ lis:result });
        }
    
    handleChange = e =>{
        const target = e.target;
        const value = target.value;
        this.setState({currentseason :value});
        
        //this.fun();
        this.state.lis = this.state.temp.slice();
        if(value != 0)
        {
        let result = this.state.lis.filter(obj => obj.Season == value);
        this.setState({ lis:result });
        }
        else{
            this.setState({lis:this.state.temp.slice()});
        }

    }
    filterall = (e)=>{
        e.preventDefault();
        console.log(this.state.currentgender , this.state.currentseason);
        this.state.lis = this.state.temp.slice();
       let s = this.state.currentseason;
       let g =  this.state.currentgender;
       if(s != "All" && g!= "all"){
        let result = this.state.lis.filter(obj => obj.Season == s && obj.Entrepreneur_Gender == g);
        this.setState({ lis:result });
    } else{
            if(s == "all" && g =="all"){

                this.refresh();
            }
            if(s == "all"){
                let result = this.state.lis.filter(obj => obj.Entrepreneur_Gender == g);
                this.setState({ lis:result });
            }
            else{
                let result = this.state.lis.filter(obj => obj.Season == s );
                this.setState({ lis:result });
            }
        }
        
    }
    render() {
         
        return (
            
            <div align="center">
                
                <form  > 

                <select onChange={this.handleChange} >
                <option value="0"  >All</option>
                <option value="1"  >S1</option>
                <option value="2" >S2</option>
                <option value="3" >S3</option>
                <option value="4" >S4</option>
                <option value="5" >S5</option>
                <option value="6" >S6</option>
                <option value="7" >S7</option>
                </select>

                <select onChange={this.fun} >
                <option value="All"  >All</option>
                <option value="Male"  >Male</option>
                <option value="Female" >Female</option>
                </select>
                
                <button onClick = {this.filterall} > filterall </button>

                 </form>
                
                
                <table>
                    <tr>
                    <th>id</th>
                    <th> Season</th>
                    <th> No_in_series</th>
                    <th>Company </th>
                    <th> Deal</th>
                    <th>Industry </th>
                    <th>Entrepreneur_Gender </th>
                    <th>Amount </th>
                    <th>Equity </th>
                    <th>Valuation </th>
                    <th>Corcoran </th>
                    <th>Cuban </th>
                    <th> Greiner</th>
                    <th> Herjavec</th>
                    <th> John</th>
                    <th>Oleary </th>
                    <th> Harrington</th>
                    <th>Guest </th>
                    <th>Sharks </th>
                    <th> pershark</th>
                    <th>DetailsNotes </th>
                    </tr>
                    
                
                {this.state.lis.map(obj => (
                    <tr>
                    <td> {obj.id} </td>
        
                    <td> { obj.Season }</td>
                    <td> { obj.No_in_series }</td>
                    <td> <Link to= {`/Detail/${obj.Company}`}    > { obj.Company }</Link></td>

                    <td> { obj.Deal }</td>
                    <td> { obj.Industry }</td>
                    <td> { obj.Entrepreneur_Gender }</td>
                    <td> { obj.Amount }</td>
                    <td> { obj.Equity }</td>
                    <td> { obj.Valuation }</td>
                    <td> { obj.Corcoran }</td>
                    <td> { obj.Cuban }</td>
                    <td> { obj.Greiner }</td>
                    <td> { obj.Herjavec }</td>
                    <td> { obj.John }</td>
                    <td> { obj.Oleary }</td>
                    <td> { obj.Harrington }</td>
                    <td> { obj.Guest }</td>
                    <td> { obj.Sharks }</td>
                    <td> { obj.pershark }</td>
                    <td> { obj.DetailsNotes }</td>
                    </tr>
                ))}
                 </table>

            </div>
        )
    }
}

export default Filter
