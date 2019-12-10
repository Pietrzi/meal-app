import React from 'react';
import Wrapper from '../Wrapper';
import { Link } from "react-router-dom";

export default function Redirect() {
    return (
        <div className='redirect' id='goToApp'>
            {/* <Wrapper> */}
                <div className='redirect__desc'>
                    <div className='redirect__info'>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.
                        </p>
                    </div>
                    <div className='redirect__btn'>
                        <button>
                            <Link to='/app'>Lorem ipsum</Link>
                        </button>
                    </div>
                </div>
            {/* </Wrapper> */}
        </div>
    )
}
