import React from 'react';
import ReactDom, { render } from 'react-dom';
import  {fetchAllLaunchYears} from './fetchAllLaunchYears';
import {connect } from 'react-redux';
import { fetchAllSpaceLaunches } from './fetchAllSpaceLaunch';
import SpaceLaunch from './SpaceLaunch.js'
import { fetchSuccessfulLaunch } from './fetchSuccessfulLaunch';
import {fetchByYear} from './fetchByYear';
import {fetchSuccessfulLand} from './fetchSuccessfulLand';
   
const SpaceLaunchDisplay ={
    display:'block',
    fontsize:'2em',
    color:'grey',
    top:'100px',
    padding:'20px'
}

const listStyle ={
    backgroundColor : 'green',
    border:'none',
    overflow:'hidden',
    color:'black',
    cursor:'pointer',
    backgroundRepeat:'noRepeat'
}

const heading={
    display:'block',
    fontsize:'2em',
    textAlign:'left',
    color:'black'
}

const launchYear={
    display:'block',
    fontsize:'2em',
    color:'grey',
    top:'100px',
    padding:'20px'
    
}

const displaySize={
    width:"30px",
    height:"10px",
    padding:"10px"
}


class DisplayAllLaunch extends React.Component{
constructor(){
super();
this.displayYearLaunch = this.displayYearLaunch.bind(this);
this.launchesYear = this.launchesYear.bind(this);
this.launchesSuccessful=this.launchesSuccessful.bind(this);
this.landSuccessful=this.landSuccessful.bind(this);
this.state={launched:true};
}

componentDidMount(){
    this.props.dispatch(fetchAllLaunchYears());
}



launchesSuccessful(value){
        this.setState({launched:value});
        this.props.dispatch(fetchSuccessfulLaunch(value));
}

landSuccessful(value){
    this.props.dispatch(fetchSuccessfulLand(value));
}

launchesYear(value){
    if(value){
        this.props.dispatch(fetchByYear(this.state.launched,true,value));
    }
}




displayYearLaunch (years){
    return(
        years.map((yearDisp,index)=>{
            return(
                <div align="left">
                    <table width ="200px" height ="1px" padding="10px" ><tbody>
                        <tr role ="row">
                            <td  width ="30%" role ="gridCell" key={index}>{(index+1)%2!==0 && 
                                <button type="button" key={index} onClick={(e)=>this.launchesYear(yearDisp.year)} style={listStyle}>{yearDisp.year}</button>}
                            </td>
                            <td width= "30%" role ="gridCell" key={index}>{(index+1)%2 ===0  && 
                                <button type="button" key={index} onClick={(e)=>this.launchesYear(yearDisp.year)} style={listStyle}>{yearDisp.year}</button>}
                            </td>
                        </tr></tbody></table>
                </div>
            );

        })
    );

};



render(){
    return(
        <div>
            <h1 style ={heading}>Space X Launch Programs</h1>
            <h4 >Filters</h4>
            <h5 style ={launchYear}>Launch Year</h5>
            <div>{this.displayYearLaunch(this.props.year)}</div>
            <div style = {launchYear}><h5>Successful Launch</h5></div>
            <table><tbody><tr><td width ="30%"><button onClick= {(e)=>this.launchesSuccessful(true)} style ={listStyle}>true</button>
            </td><td width="30%"><button onClick= {(e)=>this.launchesSuccessful(false)} style ={listStyle}>false</button></td></tr></tbody></table>
            <div style = {launchYear}><h5>Successful Landing</h5></div>
            <table><tbody><tr><td width ="30%"><button onClick= {(e)=>this.landSuccessful(true)} style ={listStyle}>true</button>
            </td><td width="30%"><button onClick= {(e)=>this.landSuccessful(false)} style ={listStyle}>false</button></td></tr></tbody></table>
           <div style = {SpaceLaunchDisplay}><SpaceLaunch/></div>
        </div>
    );
}   
}


export const mapStateToProps = state =>(
    {
        year :state.years.launchYear,
        launchSuccess : state.years.launchSuccess
    });

export default connect(mapStateToProps)(DisplayAllLaunch);