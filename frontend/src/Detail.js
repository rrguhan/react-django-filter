import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Detail extends Component {
  
    

   constructor(props) {

        

       super(props)
   
       this.state = {
            
        Season: '',
        Episode: '',
        product: '',
        location: '',
        social001: '',
        social002: '',
        social003: '',
        social004: '',
        status: '',
        investors: '',
        kitna: '',
        companytitle: '',
        companylink: '',
        temp: [],
        lis : [],

       }
      this.refresh();
   
   }

      

   refresh = () =>{
    axios
    .get("http://127.0.0.1:8000/api/DetailView/?search="+this.props.match.params.slug)
    .then(res => this.setState({  temp:res.data , lis: res.data }));
    
    }

   
    


    render() {
        console.log("hiiiiiii",this.state.lis.companylink);
        return (
            <div align = "center">
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    
                {this.state.lis.map(obj => (
                   <>
                   <h1><a href = {obj.companylink} > {obj.companytitle} </a>
                    <a href={obj.social001} class="fa fa-facebook"></a>
                    <a href={obj.social002} class="fa fa-twitter"></a>
                    
                    </h1>
                    <h2>Season :{obj.Season}    </h2>
                    <h2> Episode :{obj.Episode}</h2>
                    <h2>state:{obj.status}</h2>
                    <br></br><br></br>
                    <Link to="/">Back</Link>
                  </>
                ))}

            </div>
        )
    }
}

export default Detail
