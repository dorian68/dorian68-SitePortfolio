import React from 'react';
import './Project1.css';
import graph from './images/Share100.jpg';
import pricer from './images/pricer.PNG'
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { BlockMath, InlineMath } from 'react-katex';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
/* sommaire à récupérer:
C:\Users\ld\Documents\Projets Programmation\Dev app\Python Scripts\articles site perso*/

const BSformula = "def BlackScholes(S,K,r,T,sigma):\n" +
"    d1 = (np.log(S/K) + (r + 0.5 * sigma**2)*T)/ sigma * np.sqrt(T)\n" +
"    d2 = d1 - sigma * np.sqrt(T)\n" +

"    call = S * si.norm.cdf(d1,0,1) - K * np.exp(-r * T) * si.norm.cdf(d2,0,1)\n" +
"return call " ;

export default function Project1() {
    return (
        
        <Container>
            <Jumbotron style={{marginTop:"3%"}} >
            <Container>
                <h1>Black and Scholes Pricer</h1>
                <br></br>
                <Row>
                    <Col md={{span: 5,offset:0}}>
                        <Row><p> 
                            <h2>Summary</h2>
                            <a>Visit my Black and Scholes pricer web app fully powered by Django, the Python web framework : <a href="https://black-scholes-pricer.herokuapp.com/">European Option pricer</a> ( Right click then open ) </a>
                            </p>
                        </Row>
                        <Row><p>
                                <h3>Description</h3>
                                <a>This web app is created the Python web framework Django meaning the back-end is 100% Python.</a>
                                <a>Features:
                                    <li>Price a European option using Black and Scholes model</li>
                                    <li>Plot the implied volatility versus the strike for stock options using yahoo finance's datas</li>
                                    <li>Implement an option strategy and plot it's payoff. ( incoming: price the strategy using real-time stock price</li>
                                </a>
                            </p>
                        </Row>
                    </Col>
                    <Col md={{span: 7,offset:0}}>
                        <img src={pricer} width="90%"></img>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>
            <Jumbotron style={{marginTop:"3%"}} >
            <br></br>
            <h2>1/hypothesis</h2>
            <p><br/>The purpose of this project is to implement a python based option pricer using the Black and Scholes model.</p>


            <h4>Reminder, What are the Black and Scholes assumptions</h4>
            <p>This model is only valid to price a european options, we make the assumptions that:
            <li>There are no transaction costs</li>
            <li>The risk-free rate is constant</li>
            <li>Our underlying is not paying dividend</li>
            <li>The volatility of our underlying asset is constant</li>
            <li>The asset's returns are log-normal</li>
            </p>
            <img src={graph} width="80%"></img>

            <p>The Black and Scholes model provides an explicit formula for the price of a European option</p>
 
            <SyntaxHighlighter className="code1" language="python" style={docco}>
                {BSformula}
            </SyntaxHighlighter>
            <h2>2/Formulas </h2> 
            <p>As stated previously,the Black Scholes model takes the assumption that the underlying's returns are log-normal.
                therefore the assets returns are given by the following stochastic partial equation:
                <BlockMath math="\frac{dSt}{St}=\mu dt + \sigma dWt"/>
                <li><InlineMath math="St"/> is the underlying value</li>
                <li><InlineMath math="\mu"/> is the mean of the underlying</li>
                <li><InlineMath math="\sigma"/> is the volatility of the underlying</li>
            </p>
            <h3>2.1/Black Scholes equation</h3>
            <h3>2.2/call and put price</h3>
            <p>The price of a call :
                <tr style={{fontSize:"80%"}}><BlockMath math="C(S_0,K,r,T,\sigma) = S_0N(d_1) - K\exp(-r T)N(d_2)"/></tr>
            </p>

            <p >The price of a put :
                <tr style={{fontSize:"80%"}}><BlockMath  math="P(S_0,K,r,T,\sigma) = -S_0N(-d_1) + K\exp(-r T)N(-d_2)"/></tr>
            </p>
            <p>
                <li>N is the cumulative distribution fonction of the standard normal distribution</li>
                <li>"sigma" is the underlying volatility</li>
            </p>

            <h2>3/Implied volatility</h2>
            <p>The Implied volatility is the volatility that the current market is predicting.
                As we now have an explicit formula to calculate the price of a European option, we can use this formula to get the implied volatility.
                We will later see that this is the volatility that makes the Black Scholes option price equal to the market price of this same option.
            </p>
            <h2>4/skew and smile</h2>
            <p>
                It can be interesting to look at how the implied volatility behaves for differents strike.
                As we already know, the market is driven by the supplies and demands.
                By taking a look at how the implied volatility is currently behaving, we get an insight of the trend of the market.
                Is the volatility higher for call than it is for put? is the volatility of deeply out-the-money options higher than deeply in-the-money options ?
                This is the kind of informations we can get by graphing the implied volatility against the strike.  
            </p>
            <p>Visit the plot section of my <a href="https://black-scholes-pricer.herokuapp.com/">European Option pricer </a> to have a view of the volatility smile on stock market</p>
            </Jumbotron>
        </Container>        
    )
}
