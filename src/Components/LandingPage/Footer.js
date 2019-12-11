import React from 'react';
import Wrapper from '../Wrapper';
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
    return (
        <div>
            <footer>
                <Wrapper>
                    <div className="company" id="contact">
                        <div className='company__about'>
                            <h3 className='company__title'>Lorem ipsum dolor</h3>
                            <div className='company__desc'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, natus
                                    nisi eveniet soluta itaque ipsa veritatis ipsum aliquam explicabo
                                    delectus.
                                </p>
                            </div>
                        </div>
                    
                        <div className='company__about'>
                           <h3 className='company__title'>Lorem ipsum dolor</h3>
                            <div className='company__desc'>
                                <ul>
                                    <li>consectetur adipiscing elit</li>
                                   <li>sed do eiusmod tempor</li>
                                   <li>incididunt ut labore</li>
                                    <li>et dolore magna aliqua</li>
                               </ul>
                           </div>
                        </div>
                        <div className='company__about'>
                            <h3 className='company__title'>Lorem ipsum dolor</h3>
                            <div className='company__desc'>
                                <form>
                                    <input type='text' />
                                    <button type='submit'>Lorem</button>
                                </form>
                                <div className='company__social-icons'>
                                   <i className='fa fa-facebook-square fa-2x'></i>
                                    <i className='fa fa-twitter-square fa-2x'></i>
                                    <i className='fa fa-instagram fa-2x'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </footer>
        </div>
    )
}
