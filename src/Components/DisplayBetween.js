import React, { useState } from 'react'
import Modal from 'react-modal';
import './DisplayBetween.css'
import ClearIcon from '@material-ui/icons/Clear';

Modal.setAppElement('#root')

function DisplayBetween() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <div className="displayBetween">
            <div className="displayBetween__LeftSide">
                <div className="displayBetween__Text">
                    <p>Product Details</p>
                </div>

                <div className="displayBetween__LeftDetails">
                    <div className="displayBetween__Left">
                        <span>Wireless Entertainment</span>
                        <p> Wireless Entertainment Using Bluetooth technology, connect your smart devices to this headset and groove to your favorite melodies for up to 8 hours. Let the high-definition sound of this headset serenade  your soul without any wires.</p>
                    </div>

                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>

                <div className="displayBetween__LeftDetails">
                    <div className="displayBetween__Left">
                        <span>Stylish and Classy</span>
                        <p> This boAt headset is lightweight, sleek, and sturdy to make your musical
                            experience stylish and convenient. It features an ergonomic base that
                            ensures that this headset offers a custom fit as per your head's shape.
                        </p>
                    </div>
                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>

                <div className="displayBetween__LeftDetails">
                    <div className="displayBetween__Left">
                        <span>Extra Bass</span>
                        <p> This boAt headset is lightweight, sleek, and sturdy to make your musical
                            experience stylish and convenient. It features an ergonomic base that
                            ensures that this headset offers a custom fit as per your head's shape.
                        </p>
                    </div>
                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>

                <div className="displayBetween__LeftDetails">
                    <div className="displayBetween__Left">
                        <span>Lightweight and Portable</span>
                        <p> Compact and lightweight - this boAt headset is ideal to carry along with
                            you without hassles.</p>
                    </div>
                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>

                <div className="displayBetween__LeftDetails">
                    <div className="displayBetween__Left">
                        <span>Passive Noise Cancellation</span>
                        <p> This headset is made of materials that cancel ambient noises.Furthermore,
                            the Passive Noise Cancellation feature creates an ideal balance between
                            your favorite melodies and the outside sounds of the world.So, you can
                            enjoy your music whenever and wherever you want.</p>
                    </div>
                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>

                <div className="displayBetween__LeftDetails">
                    <div className="displayBetween__Left">
                        <span>Easy Controls</span>
                        <p> One ear cup of this headset also has a control panel that lets you
                            pause / play, change songs, increase / decrease volume, and even answer
                            calls with the touch of a button.The control panel is clutter - free,
                            and it has a seamlessly integrated design that allows an instinctive use.</p>
                    </div>
                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>

                <div className="displayBetween__LeftDetails1">
                    <div className="displayBetween__Left">
                        <span>Dual Mode: Wired and Wireless</span>
                        <p> You can enjoy your music wirelessly on this headset, and if it runs out of
                            battery, then you can use the 3.5 - mm audio jack to keep on listening to
                            your favorite songs.</p>
                    </div>
                    <div className="displayBetween__RightImg">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="displayBetween__RightSide">
                <div className="displayBetween__Text1">
                    <p>Specifications</p>
                </div>
                <div className="displayBetween__RightText">
                    <p>General</p>
                    <span><b>Model Name:</b> Rockerz 400/ Rockerz 410</span>
                    <span><b>Color:</b> Red / Black</span>
                    <span><b>Headphone Type:</b> On the Ear</span>
                    <span><b>Inline Remote:</b> No</span>
                    <span><b>Sales Package:</b> Rockerz 400, Charging Cable, User Manual, Warranty Card , Aux cable
                    </span>
                    <span><b>Connectivity:</b> Bluetooth</span>
                    <span><b>Headphone Design:</b> Foldable Over the Head </span>
                </div>

                <div className="displayBetween__RightText">
                    <p>Product Details</p>
                    <span><b>Sweet Proof:</b> No</span>
                    <span><b>Foldable/Collapsible:</b> No</span>
                    <span><b>Deep Bass:</b> Yes</span>
                    <span><b>Water Resistant:</b> No</span>
                    <span><b>Designed For:</b> Mobiles, Tablet</span>
                    <span><b>Headphone Driver Units:</b> 40 mm</span>
                    <span><b>With Microphone:</b> Yes </span>
                </div>

                <div className="displayBetween__RightText">
                    <p>Sound Features:</p>
                    <span><b>Sensitivity:</b> 110 dBmW</span>
                    <span><b>Impedance:</b> 32 ohm</span>
                    <span><b>Minimum Frequency Response:</b> 20 Hz</span>
                    <span><b>Maximum Frequency Response:</b> 20 Hz</span>
                    <span><b>Noise Reduction:</b> 75 dB </span>
                </div>

                <div className="displayBetween__RightText">
                    <p>Connectivity Features:</p>
                    <span><b>Wireless Range:</b> 10 m</span>
                    <span><b>Bluetooth Version:</b> 5.0</span>
                    <span><b>Bluetooth Range:</b> 10 m</span>
                    <span><b>Battery Type:</b> Rechargeable 300mAh Li-Polymer battery</span>
                    <span><b>Battery Life:</b> 8 hrs</span>
                    <span><b>Play Time:</b> 8 hrs</span>
                    <span><b>Standby Time:</b> 100 hr </span>
                </div>

                <div className="displayBetween__RightText">
                    <p>Dimensions:</p>
                    <span><b>Width:</b> 175 mm</span>
                    <span><b>Height:</b> 180 mm</span>
                    <span><b>Depth:</b> 70 mm</span>
                    <span><b>Weight:</b> 120 grams</span>
                </div>

                <div className="displayBetween__RightText">
                    <p>Warranty:</p>
                    <span><b>Domestic Warranty:</b> 1 Year</span>
                    <span><b>Warranty Summary:</b> 1 Year</span>
                </div>
                <div className="displayBetween__TextForModal">
                    <p onClick={() => setModalIsOpen(true)}>Manufacturing, Packaging and Import Info</p>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={
                            {
                                overlay: {
                                    backgroundColor: 'grey'
                                }
                            }
                        }
                    >
                        <div className="modal__clear">
                            <ClearIcon onClick={() => setModalIsOpen(false)} />
                        </div>

                        <div className="modal__info">
                            <h1>Manufacturing , Packaging  and Import Info</h1>
                        </div>

                        <div className="modal__infoMain">
                            <div className="modal__info__Left">
                                <p>Generic Name</p>
                                <p><b>Headphone</b></p>
                            </div>
                            <div className="modal__info__Right">
                                <p>Country Of Origin</p>
                                <p><b>South Korea</b></p>
                            </div>
                        </div>

                        <div className="modal__info__Main">
                            <div className="modal__info__leftList">
                                <p>A. Manufacture's Details</p>
                                <p>B. Importer's Details</p>
                                <p>C. Package's Details</p>'
                            </div>
                            <div className="modal__info__RightList">
                                <p>Manufactured By</p>
                                <span>1. Fyoung Town, Shenzhen, China - 518103</span>
                            </div>
                        </div>

                    </Modal>
                </div>

            </div>
        </div >
    )
}

export default DisplayBetween
