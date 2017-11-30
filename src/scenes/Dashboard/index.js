'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

const mapStateToProps = ( state, ownProps ) => {

    return {
      profile : state.user.profile,
      token : state.user.token,
    }
}


@connect(mapStateToProps, null)
class Dashboard extends PureComponent {

    constructor(props) {
        super(props)
    }
    render(){
        return(
            <section id="dashboard" className="dashboard-section section">
                <Grid>
                    <Row>
                        <Col md={ 5 } mdOffset={ 1 }>
                            <h2 className="section-heading">
                                Hi { this.props.profile.firstName }
                            </h2>
                            <p className="buy-tokens">BUY TOKENS</p>
                            <div className="box-tokens">
                                <p>Address will be available at the start of the pre-ICO, on March 1st at 10AM UTC.</p>
                                <p>PRE-ICO STARTS IN</p>
                                <div id ="getting-started" className="getting-started"> </div>
                            </div>
                        </Col>
                        <Col md={ 5 }>
                            <Row>
                                <Col className="balance" md={ 12 }>
                                    <p className="text"> YOUR BALANCE </p>
                                    <p className="number"> 0 RST </p>
                                </Col>
                                <Col className="price" md={ 12 }>
                                    <p className="text"> RST TOKEN PRICE </p>
                                    <p className="text-secondary">First 10,000,000 RST - 30% discount, 1 RST </p>
                                    <p className="number">0,87 $ (Minimum pre-purchase: 1 RSO + 1 asset = 1100 RST ← 3.19 ETH </p>
                                    <p className="text-secondary">Next 15,000,000 RST - 15% discount, 1 RST </p>
                                    <p className="number">1,06 $ (Minimum pre-purchase of 1 RSO + 1 asset = 1100 RST ← 3.89 ETH </p>
                                    <p className="text-secondary">Next 25,000,000 RST - discount of 8%, 1 RST  </p>
                                    <p className="number">1,15 $ (Minimum pre-purchase of 1 RSO + 1 asset = 1100 RST ← 4.22 ETH </p>
                                    <p className="text-secondary">Final 25,000,000 RST - 1 RST </p>
                                    <p className="number">1,25 $ (Minimum pre-purchase of 1 RSO + 1 asset = 1100 RST ← 4.58 ETH</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Dashboard
