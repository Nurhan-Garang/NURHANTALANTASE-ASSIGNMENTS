import React from 'react';

interface TimerState{
    seconds:number;
          }

class Timer extends React.Component<{},TimerState>{
    intervalId: number | undefined;

    constructor(props:{}){
        super(props);
        this.state={
            seconds:0,
        };
        console.log('constructor:component is created');
    }

    componentDidMount(): void {
        console.log('componentDidMount:component is mounted');
        this.intervalId = window.setInterval(()=> {
            this.setState((prevState) => ({
                seconds:prevState.seconds + 1,
            }));
        }, 1000);
    }

        
    componentDidUpdate(prevProps: {},prevState: TimerState ): void {
        console.log('componentDidUpdate:component updated');
    }

    componentWillUnmount():void{
        console.log('componentWillUnmount : component will be removed');
clearInterval(this.intervalId);
    }

    render():React.ReactNode{
        console.log('Render:Component is rendering');
        return(
            <div style={{textAlign: 'center',marginTop:'40px'}}>
                <h2>Timer</h2>
                <p>Seconds passed:{this.state.seconds}</p>
            </div>
        );
    }
}
export default Timer;