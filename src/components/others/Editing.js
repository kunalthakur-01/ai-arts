import React from 'react';
import { Link } from 'react-router-dom';

import './Editing.css';

const Editing = () => {
    return (
        <div>
            <div className="create-container">
                <div className="create-create-landing">
                    <div className="create-advanced">
                        <div className="create-frame"></div>
                        <img
                            alt="Vector1977"
                            src="public/playground_assets/vector1977-yai.svg"
                            className="create-vector"
                        />
                        <span className="create-text"><span>Advanced</span></span>
                    </div>

                    <div className="create-search-bar">
                        <img
                            alt="Vector1977"
                            src="public/playground_assets/vector1977-omp.svg"
                            className="create-vector1"
                            onclick="robottoggle()"
                        />
                        <span className="create-text02">
                            <input className="create-searchbar" placeholder="A corgi wearing a top hat as an oil painting" />
                        </span>
                    </div>
                    <div className="create-left">
                        <img
                            alt="Line11977"
                            src="public/playground_assets/line11977-wvpu.svg"
                            className="create-line1"
                        />
                        <img
                            alt="Line21977"
                            src="public/playground_assets/line21977-dtpw.svg"
                            className="create-line2"
                        />
                        <img
                            alt="Line31977"
                            src="public/playground_assets/line31977-m5x.svg"
                            className="create-line3"
                        />
                        <img
                            alt="Line41977"
                            src="public/playground_assets/line41977-w55.svg"
                            className="create-line4"
                        />
                        <img
                            alt="Line51977"
                            src="public/playground_assets/line51977-wp88.svg"
                            className="create-line5"
                        />

                        <div className="create-slider">
                            <span className="create-text04"><span>Width</span></span>
                            <div className="create-text06" id="SelectValue1"></div>
                            <div className="slider1">
                                <input type="range" min="512" max="1024" value="512" step="64" id="slider1" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar1"></div>
                        <div className="create-slider1">
                            <span className="create-text08"><span>Height</span></span>
                            <div className="create-text06" id="SelectValue2"></div>
                            <div className="slider2">
                                <input type="range" min="512" max="1024" value="512" step="64" id="slider2" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar2"></div>
                        <div className="create-slider2">
                            <span className="create-text12">
                                <span>Number of images to generate</span>
                            </span>
                            <span className="create-text14"></span>
                            <div className="create-text06" id="SelectValue3"></div>
                            <div className="slider3">
                                <input type="range" min="1" max="9" step="1" value="1" id="slider3" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar5"></div>
                        <div className="create-bar6"></div>
                        <div className="create-bar7"></div>
                        <div className="create-slider3">
                            <span className="create-text15" id="SelectValue4"><span>7.5</span></span>
                            <div className="create-text06"></div>
                            <div className="slider4">
                                <input type="range" min="1" max="30" step="0.5" value="7.5" id="slider4" className="slider" />
                            </div>
                        </div>
                        <div className="create-bar3"></div>
                        <span className="create-text17"><span>Temperature</span></span>
                        <span className="create-text19">
                            <span>Seed (leave blank to randomize)</span>
                        </span>
                        <div className="create-left-blank">
                            <input type="text" className="create-type-blank" />
                        </div>
                        <div className="create-bar4"></div>
                        <div></div>
                        <div>
                            <img
                                alt="Frame1977"
                                src="public/playground_assets/frame1977-dqqp.svg"
                                className="create-frame1"
                            />
                            <div className="file-uploader">
                                <input type="file" id="img_upload" name="img_upload" accept="image/png,image/jpeg" />
                            </div>
                        </div>
                        <div>
                            <span className="create-text23"><span className="text23-span">img2img</span></span>
                        </div>
                        <img
                            alt="Frame1977"
                            src="public/playground_assets/frame1977-mloi.svg"
                            className="create-vector0"
                        />
                        <img
                            alt="Vector1977"
                            src="public/playground_assets/vector1977-ovcf.svg"
                            className="create-vector2"
                        />
                    </div>
                    <img
                        alt="ezgif1ddf2dee27511978"
                        src={require("../../assets/playgrounds/image.gif")}
                        className="create-ezgif1ddf2dee2751"
                    />
                    <img
                        alt="Vector1978"
                        src="public/playground_assets/vector1978-7cg.svg"
                        className="create-vector3"
                    />



                    <div className="create-frame2">

                        <span className="create-text43"><span>1.0</span></span>
                    </div>
                    <span className="create-text45"><span>credits / image</span></span>
                    <img
                        alt="Select1978"
                        src="public/playground_assets/select1978-3gy.svg"
                        className="create-select"
                    />
                    <div className="create-center">
                        <div className="create-image-logo">
                            <img alt="Frame1978" src="public/playground_assets/animation_500_l9a3mes9.gif" className="create-image-logo" id="robot" />
                        </div>
                        <div className="main-dotted-line"></div>
                        <div className="create-text06" id="SelectValue4"></div>
                        <div className="slider5">
                            <input type="range" min="0" max="" value="" id="slider-main" />
                        </div>
                        <img
                            alt="Line51978"
                            src="public/playground_assets/line51978-19kh.svg"
                            className="create-line51"
                        />
                        <div className="create-frame71">
                            <span className="create-text33"><span>Images</span></span>
                            <img
                                alt="Frame1978"
                                src="public/playground_assets/frame1978-9pq.svg"
                                className="create-frame4"
                                style={{width: "10px"}} />
                        </div>
                        <img
                            alt="Icaspectratio48px11978"
                            src="public/playground_assets/icaspectratio48px11978-jnof.svg"
                            className="create-icaspectratio48px1"
                        />

                        <div className="create-frame9">
                            <Link to=""><span className="create-text37"><span>Push to img2img</span></span></Link>
                            <img
                                alt="Frame1978"
                                src="public/playground_assets/frame1978-9pq.svg"
                                className="create-frame5"
                            />
                        </div>
                        <div className="create-frame10">
                            <Link to="artlab.html" className="create-text39">
                                <span>Send to artlab</span>
                            </Link>
                            <img
                                alt="Frame1978"
                                src="public/playground_assets/frame1978-yszf.svg"
                                className="create-frame6"
                            />
                            <img
                                alt="Vector1978"
                                src="public/playground_assets/vector1978-xju.svg"
                                className="create-vector4"
                            />
                        </div>
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-vector">
                            <path d="M0 1.37188V17.3047C0 17.8289 0.433125 18.25 0.9625 18.25C1.23812 18.25 1.505 18.134 1.68875 17.9277L5.3025 13.8672L7.84438 18.8645C8.19 19.5434 9.03 19.8184 9.72125 19.4789C10.4125 19.1395 10.6925 18.3145 10.3469 17.6355L7.86625 12.75H13.0331C13.5669 12.75 14 12.3246 14 11.8004C14 11.5297 13.8819 11.2719 13.6763 11.0914L1.68875 0.628516C1.50062 0.465234 1.26437 0.375 1.015 0.375C0.455 0.375 0 0.821875 0 1.37188Z" fill="white" />
                        </svg>
                        <span className="create-text41">
                            <span>
                                Select an image from the gallery, then click one of the buttons
                                below to perform an action.
                            </span>
                        </span>
                        <div className="create-frame8">
                            <Link to=""><span className="create-text35"><span>Copy to clipboard</span></span></Link>
                            <img
                                alt="Frame1978"
                                src="public/playground_assets/frame1978-votm.svg"
                                className="create-frame7"
                            />
                        </div>
                        <div className="create-download"></div>
                    </div>
                    <div className="create-right">
                        <img
                            alt="Line11977"
                            src="public/playground_assets/line11977-trcl.svg"
                            className="create-line11"
                        />
                        <div className="create-slider4">
                            <span className="create-text25"><span>Sampling Steps</span></span>
                            <span className="create-text27">
                                <span>
                                    Sampling method (k-lms is default k-diffusion sampler)
                                </span>
                            </span>
                            <select name="sampling" id="samplingMethod" className="dropdown">
                                <option value="k_dpm_2_ancestra">k_dpm_2_ancestral</option>
                                <option value="ddim">ddim</option>
                                <option value="plms">plms</option>
                                <option value="k_euler">k_euler</option>
                                <option value="k_euler_ancestral">k_euler_ancestral</option>
                                <option value="k_heun">k_heun</option>
                                <option value="k_dpm_2">k_dpm_2</option>
                                <option value="k_dpm_2_ancestral">k_dpm_2_ancestral</option>
                                <option value="k_lms">k_lms</option>
                            </select>
                            <span className="create-text29"><span></span></span>
                            <div className="create-text06" id="SelectValue6">50</div>
                            <div className="slider3">
                                <input type="range" min="0" max="150" value="20" step="1" id="slider6" className="slider" />
                            </div>
                        </div>
                    </div>
                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu-hamburger-menu" id="subMenu">
                            <img
                                src="public/playground_assets/vector4996-l8qp.svg"
                                alt="Vector4996"
                                className="hamburger-menu-vector"
                            />
                            <span className="hamburger-menu-text"><span>MANAGE</span></span>
                            <span className="hamburger-menu-text02">
                                <span>
                                    <span><Link to="profile.html">Profile</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="purchases.html">Purchases</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="favorites.html">Favorites</Link> </span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="invoices.html">Invoices</Link></span>
                                </span>
                            </span>
                            <span className="hamburger-menu-text23">
                                <span>
                                    <span><Link to="browse.html">Stock photos</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="license.html">License</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="pricing.html">Pricing</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="create.html">Create</Link></span>
                                </span>
                            </span>
                            <span className="hamburger-menu-text44"><span>PAGES</span></span>
                            <span className="hamburger-menu-text46">
                                <span>
                                    <span><Link to="FoodandDrink.html">Food &amp; Drink</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="">Texture</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="">Mountain</Link></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span></span>
                                    <br />
                                    <span><Link to="">Portrait</Link></span>
                                </span>
                            </span>
                            <span className="hamburger-menu-text67"><span>CATERGORIES</span></span>
                            <img
                                src="public/playground_assets/line174996-fqx.svg"
                                alt="Line174996"
                                className="hamburger-menu-line17"
                            />
                            <div className="hamburger-menu-terms-conditions">
                                <div className="hamburger-menu-frame118">
                                    <span className="hamburger-menu-text69">
                                        <span><Link to="terms-agreement.html">Terms &amp; Conditions</Link></span>
                                    </span>
                                    <img
                                        src="public/playground_assets/line114996-snc8.svg"
                                        alt="Line114996"
                                        className="hamburger-menu-line11"
                                    />
                                </div>
                            </div>
                            <div className="hamburger-menu-privacy-policy">
                                <div className="hamburger-menu-frame117">
                                    <span className="hamburger-menu-text71">
                                        <span><Link to="privacy-policy.html">Privacy Policy</Link></span>
                                    </span>
                                    <img
                                        src="public/playground_assets/line124996-stwt.svg"
                                        alt="Line124996"
                                        className="hamburger-menu-line12"
                                    />
                                </div>
                            </div>
                            <div className="hamburger-menu-licensingagreement">
                                <div className="hamburger-menu-frame116">
                                    <span className="hamburger-menu-text73">
                                        <span><Link to="license.html">Licensing agreement</Link></span>
                                    </span>
                                    <img
                                        src="public/playground_assets/line134996-50xl.svg"
                                        alt="Line134996"
                                        className="hamburger-menu-line13"
                                    />
                                </div>
                            </div>
                            <div className="hamburger-menu-subprocessors">
                                <div className="hamburger-menu-frame115">
                                    <span className="hamburger-menu-text75">
                                        <span><Link to="sub-processors.html">Sub-processors</Link></span>
                                    </span>
                                    <img
                                        src="public/playground_assets/line144996-cm6g.svg"
                                        alt="Line144996"
                                        className="hamburger-menu-line14"
                                    />
                                </div>
                            </div>
                            <div className="hamburger-menu-subprocessors1">
                                <div className="hamburger-menu-frame1151">
                                    <span className="hamburger-menu-text77"><span><Link to="#">English</Link></span></span>
                                </div>
                                <img
                                    src="public/playground_assets/vector4996-i5rl.svg"
                                    alt="Vector4996"
                                    className="hamburger-menu-vector1"
                                />
                                <img
                                    src="public/playground_assets/frame4996-yac.svg"
                                    alt="Frame4996"
                                    className="hamburger-menu-frame"
                                />
                            </div>
                            <img
                                src="public/playground_assets/vector4996-jjvv.svg"
                                alt="Vector4996"
                                className="hamburger-menu-vector2"
                            />
                            <img
                                src="public/playground_assets/vector4996-s6b4.svg"
                                alt="Vector4996"
                                className="hamburger-menu-vector3"
                            />
                            <img
                                src="public/playground_assets/vector4996-on7.svg"
                                alt="Vector4996"
                                className="hamburger-menu-vector4"
                            />
                        </div>
                    </div>         
                </div>
            </div>     
        </div> 
    )
};

                    export default Editing;
