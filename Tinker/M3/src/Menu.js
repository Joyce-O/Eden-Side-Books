import React, { Component } from 'react';
import Link from 'next/link';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link href="/">
                                <a className="nav-link">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/comments">
                                <a className="nav-link">Comments</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/sessions">
                                <a className="nav-link">Sessions</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;