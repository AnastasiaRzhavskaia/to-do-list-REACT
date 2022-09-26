import { Component } from "react";
import One from './checkbox.png';
// import Two from './checkbox (1).png';

export class ToDoList extends Component {

    state = {
        inputField: '',
        toDoList: [],
        image: One
    }

    onChangeEvent(e) {
        this.setState({inputField: e});
        console.log(e)
    }

    addItem (field) {
        if (field === '') {
            alert('Please enter an item')
        }
        else {
            let toDoArray = this.state.toDoList;
        toDoArray.push(field);
        this.setState({toDoList: toDoArray, inputField: ''});
        }
    }

    enterPressed(e) {
        e.preventDefault();
    }
    crossedWord (e) {
        const listItem = e.target;
        listItem.classList.toggle('crossed');
    }
    // changeIcon = () => {
    //     this.setState({image: Two})
    // }
    deleteItem () {
        let toDoArray = this.state.toDoList;
        toDoArray = [];
        this.setState({toDoList: toDoArray})
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=> {this.enterPressed(event)}}>
                    <input type="text" placeholder="Add a todo..."
                    onChange={(event)=> {this.onChangeEvent(event.target.value)}}
                    value={this.state.inputField}/>
                    <button onClick={() => this.addItem(this.state.inputField)} className="btn add">ADD</button>
                    <div className="container">
                        <ul className="uList">
                            {this.state.toDoList.map((item, index) => (
                                <li onClick={this.crossedWord} key={index}> 
                                <img src={this.state.image} width='13px' alt='check'/> {item}</li>
                            ))} 
                        </ul>
                        <div className="container">
                            <button onClick={() => this.deleteItem()} className='btn delete'>DELETE</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}