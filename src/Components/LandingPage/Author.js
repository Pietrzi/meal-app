import React from 'react';
import Wrapper from '../Wrapper';
import authorImage from "../../assets/images/author.jpg";


export default function Author() {
    return (
        <div className="author" id="aboutMe">
            <Wrapper>
                <div className='author__container'>
                    <div className="author__image">
                        <img src={authorImage} alt="author" />
                    </div>                    
                    <div className="author__text">
                        <h3>Lorem Ipsum dolor sit amet</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                            perspiciatis itaque accusantium temporibus nam quis saepe explicabo
                            aspernatur provident ab, illo omnis, at sequi dignissimos? Nemo quo a
                            soluta fuga. Nisi sapiente labore totam culpa placeat esse facilis maxime
                            cupiditate et, perferendis atque, iure quod error commodi, neque in sit
                            nihil sed molestias quis saepe odit sunt maiores. Ipsum, iste! Ut natus
                            nihil sed molestias quis saepe odit sunt maiores. Ipsum, iste! Ut natus
                            nihil sed molestias quis saepe odit sunt maiores. Ipsum, iste! Ut natus
                            nihil sed molestias quis saepe odit sunt maiores. Ipsum, iste! Ut natus
                            perspiciatis itaque accusantium temporibus nam quis saepe explicabo
                            aspernatur provident ab, illo omnis, at sequi dignissimos? Nemo quo a
                            soluta fuga. Nisi sapiente labore totam culpa placeat esse facilis maxime
                            cupiditate et, perferendis atque, iure quod error commodi, neque in sit
                            soluta fuga. Nisi sapiente labore totam culpa placeat esse facilis maxime
                            cupiditate et, perferendis atque, iure quod error commodi, neque in sit
                            nihil sed molestias quis saepe odit sunt maiores. Ipsum, iste! Ut natus
                            nihil sed molestias quis saepe odit sunt maiores. Ipsum, iste! Ut natus
                        </p>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}
