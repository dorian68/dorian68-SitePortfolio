import React from 'react';
import varGraph from  './images/VaR.png'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { BlockMath, InlineMath } from 'react-katex';
export default function Project2() {
    return (
        <Container>
            <Jumbotron style={{marginTop:"3%"}} >
                <Container>
                    <h1>The Value at Risk</h1>
                    <p>The VaR gives a measure of the risk of a portfolio on a specific time horizon and for a specific confident level. It basically stand for the amount of loss that a given portfolio will not exceed over this period and for this probability.
                    Mathematically, we define the VaR as such : 
                    <BlockMath math="\alpha = Pr(VaR < r)"/>
                    In which alpha is the confident level , r the returns of the portfolio
                    </p>
                    <Row>
                        <Col>
                            <img src={varGraph} style={{objectFit:"cover",height:"100%",width:"100%"}}></img>
                        </Col>
                        <Col>
                            <p>See my work in Github by clicking <a href="https://github.com/dorian68/Monte-Carlo-VaR">here</a> ( Right click then open )</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Jumbotron style={{marginTop:"3%"}}>
                <h2>How do we compute it</h2> 
                <p>Three different methods can be used to compute the VaR.I will present briefly the two first method then we will focus on the last method, you will find my implementation on github if you want to take a closer look into my work. </p>
                <h3>The historical method :</h3>
                <p>In this method we use the historical datas of the returns of our portfolio over a given time horizon, we sort them and then depending of the confident level « Alpha » the VaR is determined as the Alpha-quantile of this sorted values.</p>
                <h3>The parametric method :</h3>
                <p>In this method we assume that our porfolio’s returns are normally distributed, then we are yet to compute its mean and standard deviation and use the VaR formula :
                    <BlockMath math="\sigma N^-1(X)"></BlockMath>
                    Then given a portfolio with an average return of R, a standard deviation <InlineMath math="\sigma"></InlineMath> and a value of V
                    The Value at risk is :
                    <BlockMath math="(R - z * \sigma) V"></BlockMath>
                </p>
                <h3>The Monte-Carlo method :</h3>
                <p> 
                    The Monte Carlo is the most complex and ressource consuming to compute the VaR and thus the more precise.
                    We use Monte Carlo to run several simulation of the portfolio's returns then we estimate the expected value of these scenarios and we compute the VaR as the n-quantile ( n depending of the confidence level).
                    Ultimately, having computed the expected value for each scenarios, we compute the variance for each scenario in order to have an estimation of the error of our method.

                    You can take a look at my implementation of this method in Python in my Github <a href="https://github.com/dorian68/Monte-Carlo-VaR">here</a></p>
                <h3>Pros ans cons: </h3>
                <li>It gives a rather straight forward and easy to understand way to get an estimate of the risks your portfolio is carrying</li>
                <li>The hypothesis taken on the market are too minimalist therefore sometimes unrealistic, for example VaR does not estimates well extreme events</li>
                <li>The VaR is not additive</li>
            </Jumbotron>
        </Container>
    )
}