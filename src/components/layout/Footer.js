import React from "react";


function Header() {

    return(
        <footer className='footerStyle'>
            <div className='container '>
                <div className='row mt-3'>
                    <div className='col-8'>
                        <h1>Todo List </h1>
                    </div>
                    <div className='col-3'>
                        <ul>
                            <li>
                                Github
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