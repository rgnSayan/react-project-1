import React, { useState } from 'react'
import StarIcon from '@material-ui/icons/Star';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import SendIcon from '@material-ui/icons/Send';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonIcon from '@material-ui/icons/Person';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './Display.css'

function Display() {
    const [user, setUser] = useState("")
    return (
        <div className="display">
            <div className="display__left">
                <div className="display__up">
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                </div>
                <div className="display__down">
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" className="display__img1" />
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" className="display__img1" />
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" className="display__img1" />
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" className="display__img1" />
                    <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" className="display__img1" />
                </div>
            </div>

            <div className="display__right">
                <div className="display__component1">
                    <span>APPLE iPhone X (Space Gray, 256 GB) with no cost EMI/Additional exchange offers</span>
                    <div className="display__rightDown">
                        <div className="star">
                            <StarIcon className="star1" />
                            <StarIcon className="star1" />
                            <StarIcon className="star1" />
                            <StarIcon className="star1" />
                            <StarIcon className="star2" />
                        </div>
                        <p>2,175 ratings  |  355 answered questions</p>
                    </div>
                </div>

                <div className="display__component2">
                    <div className="display__component2Left">
                        <span>M.R.P.: <del>₹29,900.00</del> </span>
                        <div className="display__component2LeftActualPrice">
                            <span>PRICE : ₹25,900.00</span>
                            <span>Ends In: 02h 45m 24s </span>
                        </div>
                        <div className="display__component2LeftSave">
                            <div className="display__component2LeftSave1">
                                <span>You Save: ₹</span>
                                <p>4,000.00 (13%)</p>
                                <span>Inclusive of all taxes</span>
                            </div>
                        </div>

                        <div className="display__component2Delivery">
                            <p>Free delivery: Tuesday, 23 July Details EMI starts at ₹1,233. No cost EMI available EMI</p>
                        </div>
                    </div>

                    <div className="display__component2Right">
                        <div className="display__component2RightCheck">
                            <CheckCircleOutlineIcon />

                            <p>Up to ₹16,750.00 off </p>
                        </div>
                        <div className="display__component2RightUnCheck">
                            <div className="display__component2RightUnCheck1">
                                <RadioButtonUncheckedIcon />
                                <span>Without Exchange</span>
                                <div className="display__component2RightUnCheck2">
                                    <span> ₹59,490.00 <del> ₹70,170.00</del></span>
                                </div>
                            </div>
                        </div>

                        <div className="display__size">
                            <div className="display__dp1">
                                <span>Size :</span>
                                <p className="size1">S</p>
                                <p className="size1">M</p>
                                <p className="size1">XL</p>
                                <p className="size1">XXL</p>
                            </div>
                            <div className="display__dp2">
                                <span>Colour :</span>
                                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                            </div>
                        </div>
                        <div className="display__dp3">
                            <span>SizeChart : 📏</span>
                        </div>
                        <div className="display__input">
                            <SendIcon />
                            <input type="text" placeholder="Enter Your PinCode" value={user}
                                onChange={(e) => setUser(e.target.value)} />
                            <button type="submit" >Try Now</button>
                        </div>
                        <div className="display__button">
                            <button variant="contained" color="secondary" className="display__button1">Buy Now</button>
                            <button variant="contained" color="primary" className="display__button2">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="display__middle1">
                    <div className="display__middle01">
                        <ErrorOutlineIcon />
                        <span>Save Extra </span>
                        <p> with 5 offers</p>
                    </div>
                    <div className="display__middle02">
                        <span>DetailsNo cost EMI:</span>
                        <p>Avail No Cost EMI on select cards for order above ₹3000 Details </p>
                    </div>
                    <div className="display__middle02">
                        <span>Exchange Offers:</span>
                        <p>Upto  ₹20,700.00 off on Exchange </p>
                    </div>
                    <div className="display__middle02">
                        <span>Bank Offers:</span>
                        <p>Get Rs. 500 on a minimum purchase of Rs 10000 with HDFC Bank Debit Card EMI transaction DetailsBank Offer: Get Rs. 500 Amazon Gift Card on a minimum purchase of Rs 10000 with HDFC Bank Debit Card EMI transaction Details</p>
                    </div>
                    <div className="display__middle02">
                        <span>Cashback:</span>
                        <p>5% back with Amazon Pay ICICI Bank credit card for Prime members. 3% back for others. Get up to ₹600 back on card approval Details</p>
                    </div>
                    <div className="display__middle02">
                        <span>Partner's Offer(2):</span>
                        <p>Extra Rs 2000 OFF on Exchange See AllPartner Offers (2): Extra Rs 2000 OFF on Exchange See All</p>
                    </div>
                </div>

                <div className="display__bottom1">
                    <div className="display__bottom01">
                        <span>In Stock,</span>
                        <p>Sold by Papago Retail Private Ltd By Prime Vogue.</p>
                    </div>
                </div>

                <div className="display__iconsText">
                    <div className="display__iconsTextRight">

                    </div>

                    <div className="display__iconsTextLeft">
                        <div className="display__row">
                            <DescriptionIcon />
                            <span>30 Days Return Policy</span>
                        </div>
                        <div className="display__row">
                            <FileCopyIcon />
                            <span>GST Invoice Available</span>
                        </div>
                        <div className="display__row1">
                            <LocalShippingIcon />
                            <span>Free Delivery Available</span>
                        </div>
                    </div>
                    <div className="display__iconsTextRight">
                        <div className="display__column">
                            <QueryBuilderIcon />
                            <span>1 Year Warranty</span>
                        </div>
                        <div className="display__column">
                            <AttachMoneyIcon />
                            <span>Cash on delivery Available</span>
                        </div>
                        <div className="display__column">
                            <PersonIcon />
                            <span>24 * 7 Customer Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Display
