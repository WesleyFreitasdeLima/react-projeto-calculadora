import React, { Component } from 'react';
import '../assets/css/calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';
class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayValue: 0,
            memoryValue: null
        };
    }

    clearMemory = () => {
        this.setState({
            displayValue: 0,
            memoryValue: null
        });
    }

    setOperation = (operation) => {
        let display = String(this.state.displayValue);

        this.setState({
            memoryValue: display,
            displayValue: 0
        });

        console.log(this.state.memoryValue);
    }

    addDigit = (n) => {
        let display = String(this.state.displayValue);
        let digit = String(n);

        // Ignores zero on left
        if (display === '0' && digit === '0') return;

        // Allow zero on left only if we click on dot
        if (display === '0' && digit === '.')
            display = `${display}${digit}`;
        else
            display = display === '0' ? digit : `${display}${digit}`;

        this.setState({
            displayValue: display
        });
    }

    render() {
        return (
            <div className="calculator">
                <Display defaultValue={this.state.displayValue} />

                {/** Linha1 */}
                <Button label='AC' type="size-3" click={this.clearMemory} />
                <Button label='÷' type="op" />

                {/** Linha2 */}
                <Button label='7' click={this.addDigit} />
                <Button label='8' click={this.addDigit} />
                <Button label='9' click={this.addDigit} />
                <Button label='×' type="op" />

                {/** Linha3 */}
                <Button label='4' click={this.addDigit} />
                <Button label='5' click={this.addDigit} />
                <Button label='6' click={this.addDigit} />
                <Button label='-' type="op" />

                {/** Linha4 */}
                <Button label='1' click={this.addDigit} />
                <Button label='2' click={this.addDigit} />
                <Button label='3' click={this.addDigit} />
                <Button label='+' type="op" />

                {/** Linha5 */}
                <Button label='0' type="size-2" click={this.addDigit} />
                <Button label='.' click={this.addDigit} />
                <Button label='=' type="op" />
            </div>
        );
    }
}

export default Calculator;