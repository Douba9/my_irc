import logo from '../logo.png';
import '../App.css';
import React from 'react';
import { socket } from '../socket';

export default function Chat() {
    
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Chat</h1>
            </header>
        </div>
    );
}