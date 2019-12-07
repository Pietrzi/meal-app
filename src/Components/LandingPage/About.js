import React from 'react';
import Wrapper from '../Wrapper';
import "font-awesome/css/font-awesome.min.css";

export default function About() {
    return (
        <div className="aboutapp" id="aboutApp">
            <Wrapper>
                <div className="aboutapp__desc">
                    <div className='aboutapp__item'>
                        <div className='aboutapp__icon'>
                            <i className='fa fa-check fa-5x'></i>
                        </div>

                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
                            porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
                            faucibus arcu condimentum sed.
                        </p>
                    </div>
                </div>
                <div className='aboutapp__item'>
      <div className='aboutapp__icon'>
        <i className='fa fa-clock-o fa-5x' aria-hidden='true'></i>
      </div>

      <h3>Lorem ipsum dolor sit amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
        faucibus arcu condimentum sed.
      </p>
    </div>
    <div className='aboutapp__item'>
      <div className='aboutapp__icon'>
        <i className='fa fa-list fa-5x'></i>
      </div>

      <h3>Lorem ipsum dolor sit amet</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
        porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
        faucibus arcu condimentum sed.
      </p>
    </div>
            </Wrapper>
        </div>
    )
}