
// Class Button Component

class Button extends React.Component {
    render() {
        const handleButtonClick = () => {
            alert(this.props.message);
        }
        return (
            <button onClick={handleButtonClick} style={{ margin: "10px" }}>
                {this.props.children}
            </button>
        );
    }
}

// Class MyApp Component
class MyApp extends React.Component{
    render() {
      return  <div>
        <h1>Learn React</h1>
        <Button message="Learn React">React</Button>
        <Button message="Learn JavaScript">JavaScript</Button>
    </div>
    }
}


let myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

