import React from 'react';
import ReactDom, { render } from 'react-dom';
import {connect } from 'react-redux';
import { fetchAllSpaceLaunches } from './fetchAllSpaceLaunch';
import _ from 'lodash'


const SpaceLaunchDisplay1 ={
    border:'5px',
    display:'fixed',
    height:"100em",
    top:'15%',
    right:'23%',
    position:"absolute",
    float:"right"
}

const SpaceLaunchDisplay2 ={
    border:'5px',
    display:'fixed',
    height:"100em",
    top:'15%',
    position:"absolute",
    right:"60%",
    float:"left"
}

const SpaceLaunchDisplay3 ={
    border:'5px',
    display:'fixed',
    height:"100em",
    top:'15%',
    position:"absolute",
    right:"38%",
    float:"center"
}

const SpaceLaunchDisplay4 ={
    border:'5px',
    display:'fixed',
    height:"100em",
    top:'15%',
    position:"absolute",
    right:"3%",
    float:"right"
}

const displayStyle ={
    color:'blue'
}

class SpaceLaunch extends React.Component{
constructor(){
super();

}

componentDidMount(){
    this.props.dispatch(fetchAllSpaceLaunches());
}

displaySpaceLaunches(spaces){
    let content1 =[];
    let content2=[];
    let content3=[];
    let content4 =[];
    spaces.map((spacesDisplay,index)=>{
        let launchSuccess = _.get(spacesDisplay,'launch_success','').toString();
        let landSuccess = _.get(spacesDisplay,'rocket.first_stage.cores[0].land_success') && _.get(spacesDisplay,'rocket.first_stage.cores[0].land_success').toString();
        let spaceslength = spaces.length/4;
        let indexLength = Math.round(spaceslength);
        if(index>=0 && index<indexLength){
            content1.push(<tr role ="row" ><td id= {index}>
            <img src ={spacesDisplay.links.mission_patch} width="200" height="40"></img><br/>
            <span style={displayStyle}>{spacesDisplay.mission_name}</span><br/>
            Launch Year :<span style={displayStyle}>{spacesDisplay.launch_year}</span><br/>
            Successful Launch:<span style={displayStyle}>{launchSuccess}</span><br/>
            Successful Landing:<span style={displayStyle}>{landSuccess}</span>
            </td></tr>)
            }
            else if(index>=indexLength && index<(2*indexLength)){
                content2.push( <tr role ="row" >
                <td id= {index}><img src ={spacesDisplay.links.mission_patch} width="200" height="40"></img><br/>
                <span style={displayStyle}>{spacesDisplay.mission_name}</span><br/>
                Launch Year :<span style={displayStyle}>{spacesDisplay.launch_year}</span><br/>
                Successful Launch:<span style={displayStyle}>{launchSuccess}</span><br/>
                Successful Landing:<span></span>
                </td>
                </tr>)
            }
            else if(index>=(2*indexLength) && index<(3*indexLength)){
                content3.push(<tr role ="row">
                <td id= {index}><img src ={spacesDisplay.links.mission_patch} width="200" height="40"></img><br/>
                <span style={displayStyle}>{spacesDisplay.mission_name}</span><br/>
                Launch Year :<span style={displayStyle}>{spacesDisplay.launch_year}</span><br/>
                Successful Launch:<span style={displayStyle}>{launchSuccess}</span><br/>
                Successful Landing:<span></span>
                </td>
                </tr>)
            }
            else if(index>=(3*indexLength)&& index<spaces.length){
                content4.push(<tr role ="row">
                <td id= {index}><img src ={spacesDisplay.links.mission_patch} width="200" height="40"></img><br/>
                <span style={displayStyle}>{spacesDisplay.mission_name}</span><br/>
                Launch Year :<span style={displayStyle}>{spacesDisplay.launch_year}</span><br/>
                Successful Launch:<span style={displayStyle}>{launchSuccess}</span><br/>
                Successful Landing:<span></span>
                </td>
                </tr>)
            }
        });

    return(<div>
    <div style ={SpaceLaunchDisplay1}>{content1}</div>
    <div style ={SpaceLaunchDisplay2}>{content2}</div>
    <div style ={SpaceLaunchDisplay3}>{content3}</div>
    <div style ={SpaceLaunchDisplay4}>{content4}</div>
    </div>);
        /*return(
        spaces.map((spacesDisplay,index)=>{
            let launchSuccess = _.get(spacesDisplay,'launch_success').toString();
            return(
                <div align="left">
                <table width ="200px" height ="1px" padding="10px" ><tbody>
                <tr role ="row" colSpan ="4">
                <td id= {index}><img src ={spacesDisplay.links.mission_patch} width="200" height="40"></img>
                <span style={displayStyle}>{spacesDisplay.mission_name}</span><br/>
                Launch Year :<span style={displayStyle}>{spacesDisplay.launch_year}</span><br/>
                Successful Launch:<span style={displayStyle}>{launchSuccess}</span><br/>
                Successful Landing:<span></span>
                </td>
                </tr></tbody></table>
                </div>
            );

        })
    );*/

    };




render(){
    return(
    <div>
        <div > 
        {this.displaySpaceLaunches(this.props.launchSpace)}
        </div>
        </div>
    );   
}   
}


export const mapStateToProps = state =>(
    {
        launchSpace :state.years.launchSpace
    });

export default connect(mapStateToProps)(SpaceLaunch);