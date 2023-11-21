const MyApp = () => {
   
      const [state, setState] = React.useState({count: 0, increaseCount: true, decreaseCount: true});
 
    return (
            <div>
                <h3>{state.count}</h3>

            <button onClick={() => {
                setState({ ...state, count: count++, increaseCount: false,
                 
             
                });
                
            }}
         >+1</button>

         <button onClick={() => {
            setState({ ...state, count: count--, decreaseCount: false,
                 
             
            });
         }}
        >-1</button>
                </div>
            
        );
  
}


let myElement = <MyApp/>
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
