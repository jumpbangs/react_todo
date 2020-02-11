import React from "react";


function Header() {

    return(
        <footer className='footerStyle'>
            <div className='container '>
                <div className='row mt-3'>
                    <div className='col-8'>
                        <h1>
                            <a href="https://jumpbangs.github.io/react_todo/">
                                Todo List
                            </a>
                        </h1>
                    </div>
                    <div className='col-3'>
                        <ul>
                            <li>
                                <a href="https://github.com/jumpbangs/react_todo">
                                    Github Repo Page
                                </a>

                            </li>
                            <li>
                                Links
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}


export default Header;