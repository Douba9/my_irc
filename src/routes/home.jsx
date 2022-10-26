import logo from '../logo.png';
import '../App.css';
import React from 'react';
import { Navigate} from 'react-router-dom';
import { socket } from '../socket';
import Cookies from 'universal-cookie';

export default function Home() {

    socket.on("Valid Name", name => {
        console.log("Valid Name");
        const cookies = new Cookies();
        cookies.set('NameTag', name, { path: '/' });
        window.location = "/home/chat";
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Home</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    var name = document.getElementById('inputName').value;

                    socket.emit("NameTag", name);
                }}>

                    <div className="form-group">
                        <label for="inputName">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                    </div>

                    <button type="submit" className="btn btn-primary">Start Chating</button>
                </form>
            </header>
        </div>
    );
}