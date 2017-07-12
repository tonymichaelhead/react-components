// TODO
// 

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false  
    };
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  //   onListItemClick() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }
  
  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    //  var style = {
    //   textDecoration: this.state.done ? 'line-through' : 'none'
    // };

    return ( 
      <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.item}</li> 
    );
  }
};

const GroceryList = (props) => (

<ul>
  {props.items.map(item => <GroceryListItem item={item}/>)}
</ul>
);

const App = () => (
  <div>
    <h1>Grocery List</h1>
    <GroceryList items={['burrito', 'pizza', 'chocolate']}/>
  </div>
);



// // Here we create a `TodoList` component
// var TodoList = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );


ReactDOM.render(<App />, document.getElementById("app"));