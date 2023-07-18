import React, { useState } from 'react';
import ReactDom from 'react-dom';
import Timer from './Duration';


class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { time : new Date() };
    }

    componentDidMount(){
        this.timer = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({
            time : new Date()
        });
    }

    btnTimeIn = () => {
        this.setState({
            timeIn: this.state.time.toLocaleTimeString(),


        });        

    }

    btnTimeOut = () => {
        this.setState({
            timeOut: this.state.time.toLocaleTimeString(),
        });
        
    }

    btnReset = () => {
        this.setState({
            timeIn: this.state.none,
            timeOut: this.state.none,
            duration:this.state.none
        })



    }

    render(){
        return (
            <div>
               
                <div className='card'>
                    <h1>Manual Time Tracking</h1>

                    <table className='date-time'>
                        <th>
                            <p id='date'>{this.state.time.toLocaleDateString()} -- </p>
                        </th>
                        
                        <th>
                            <p id='clock'>{this.state.time.toLocaleTimeString()}</p>
                        </th>
                    </table>
                    

                    <h4>Time in: </h4>
                    <p id='time'>{this.state.timeIn}</p>

  
                    <h4>Time out: </h4>
                    <p id='time'>{this.state.timeOut}</p>

                

                    <button id='timein' className='stop' onClick={this.btnTimeIn}>Time in</button>
                    <button id='timeout' className='stop' onClick={this.btnTimeOut}>Time out</button>
                    <br/>
                    <button id='reset' onClick={this.btnReset}>Reset</button>
                    
                </div>
            </div>
        );
    }

   

}


export default Clock;
