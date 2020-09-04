import React from 'react';
import './Project1.css';
import graph from './images/Share100.jpg';
import pricer from './images/pricer.PNG'
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Container, Row, Col } from 'react-bootstrap';
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
        
        <Container className="body" >
            <h1>Black and Scholes Pricer</h1>
            <h2>Summary</h2>
            <Container>
                <Row>
                    <Col md={{span: 5,offset:0}}>
                        <p> Visit my Black and Scholes pricer web app fully powered by Django, the Python Web framework : <a href="https://black-scholes-pricer.herokuapp.com/">European Option pricer </a></p>
                    </Col>
                    <Col md={{span: 7,offset:0}}>
                        <img src={pricer} width="90%"></img>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <h2>1/hypothesis</h2>
            <p><br/>The purpose of this project is to implement a python based option Pricer using the Black and Scholes Model</p>


            <h4>Reminder, What are the Black and Scholes assumptions</h4>
            <p>In order to use the Black and Scholes model to price a european option, we will need to make some assumptions first to make sure the market is complete</p>
            <li>There is no transactions cost</li>
            <li>The risk-free rate is constant</li>
            <li>Our underlying is not paying dividend</li>
            <li>The volatility of our underlying asset is constant</li>
            <li>The Black and Scholes model assumes that the asset's return are log-normal</li>
            
            <img src={graph} width="80%"></img>

            <p>The Black and Scholes model provides an explicit formula for the price of a European option<br/></p>

            <SyntaxHighlighter className="code1" language="python" style={docco}>
                {BSformula}
            </SyntaxHighlighter>
            <h2>2/Formulas</h2> 
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
            <h3>4.1/Application to real data</h3>
            <h2>5/Pros ands cons</h2>

        </Container>        
    )
}
