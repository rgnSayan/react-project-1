import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import AddIcon from '@material-ui/icons/Add';
import "./DisplayInput.css"

function DisplayInput() {
    return (
        <div>
            <div className="displayInput">
                <span>You Can Share Us About Product </span>
                <input type="text" placeholder="Leave a Message Here" />
                <button>SUBMIT</button>
            </div >

            <div className="displayInput__price" >
                <span>Buy Together</span>
                <div className="displayInput__product">

                    <div className="displayInput__items">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                        <p>OPPO F19 Pro+ 5G (Space <br /> Silver, 8GB RAM, 128GB <br /> Storage) with No Cost <br /> EMI/Additional Exchange <br /> Offers</p>

                        <div className="product__star">
                            <div className="star">
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star2" />
                            </div>
                            <div className="star__text">
                                <p>(4514)</p>
                                <p>2,172 ratings  </p>
                            </div>
                        </div>
                        <div className="input__price">
                            <p><b>Price: </b>₹1,20,000.00</p>
                        </div>
                    </div>

                    <div className="addIcon">
                        <AddIcon />
                    </div>

                    <div className="displayInput__items1">
                        <img src="https://i.pinimg.com/originals/34/86/54/348654cc9b185bcccbeea80d2fae2bf8.png" alt="" />
                        <p>OPPO F19 Pro+ 5G (Space <br /> Silver, 8GB RAM, 128GB <br /> Storage) with No Cost <br /> EMI/Additional Exchange <br /> Offers</p>

                        <div className="product__star">
                            <div className="star">
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star2" />
                            </div>
                            <div className="star__text">
                                <p>(4590)</p>
                                <p>2,172 ratings </p>
                            </div>
                        </div>
                        <div className="input__price">
                            <p><b>Price: </b>₹10,000.00</p>
                        </div>
                    </div>

                    <div className="addIcon">
                        <AddIcon />
                    </div>

                    <div className="displayInput__items1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png" alt="" />
                        <p>OPPO F19 Pro+ 5G (Space <br /> Silver, 8GB RAM, 128GB <br /> Storage) with No Cost <br /> EMI/Additional Exchange <br /> Offers</p>

                        <div className="product__star">
                            <div className="star">
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star1" />
                                <StarIcon className="star2" />
                            </div>
                            <div className="star__text">
                                <p>(4590)</p>
                                <p>2,172 ratings </p>
                            </div>
                        </div>
                        <div className="input__price">
                            <p><b>Price: </b>₹4,000.00</p>
                        </div>
                    </div>
                </div>
                <div className="input__total">
                    <div className="total__price">
                        <p>₹1,20,000.00 + </p>
                        <p> ₹10,000.00  +  </p>
                        <p> ₹4,000.00 =</p>
                    </div>
                    <div className="total__price1">
                        <span>Total Amount</span>
                        <p>₹1,34,000.00</p>
                    </div>
                </div>

            </div>


        </div >
    )
}

export default DisplayInput
