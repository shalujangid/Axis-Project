import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <section id="footer">
                    <section id="banner">
                        <div class="container-fluid" id="banner-container">
                            <div class="row" id="banner-row">
                                <div class="col-md-4" id="footer-col1">
                                    <h3>My Website</h3>

                                    <p>
                                        At Dream Jobs we believe that customers should always get
                                        easy-to-use, best in the kind and fast services.Dream Jobs has
                                        achieved standards which helps customer to achieve
                                        satisfaction and realize value for their hard earned money.
                                    </p>
                                </div>
                                <div class="col-md-4" id="footer-col2">
                                    <h3>Contact Us</h3>

                                    <p>Copyright@shaluJangid</p>

                                    <p>Email Us- support@xyz.com</p>
                                </div>

                                <div class="col-md-4" id="footer-col2">
                                    <h3>Subscribe</h3>
                                    <form>
                                        <div class="mb-3">
                                            <input
                                                type="email"
                                                placeholder="Enter Your Email"
                                                class="form-control"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                            />
                                            <div id="emailHelp" class="form-text">
                                                We'll never share your email with anyone else.
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        )
    }
}

export default Footer