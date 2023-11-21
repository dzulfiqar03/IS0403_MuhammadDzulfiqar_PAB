class MyApp extends React.Component {
    state = { 
        increaseCount: true,        
        decreaseCount: true,
        count: 0,
    };

    render() {
        
        return (
            <div>
                <h3>{count}</h3>

            <button onClick={() => {
                this.setState({ 
                    increaseCount: false,
                count: count++,
                });
            }}
         >
            +1</button>

         <button onClick={() => {
             this.setState({  
                decreaseCount: false,
                count: count--,
            });
         }}
         >
          -1</button>
                </div>
            
        );
    }
}




let myElement = <MyApp/>
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);