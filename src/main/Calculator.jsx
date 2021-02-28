import React, { Component } from 'react';
import '../assets/css/calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';
class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display defaultValue={11111111111111111111111111111111111111111} />

                {/** Linha1 */}
                <Button label='AC' type="size-3" />
                <Button label='÷' type="op" />

                {/** Linha2 */}
                <Button label='7' />
                <Button label='8' />
                <Button label='9' />
                <Button label='×' type="op" />

                {/** Linha3 */}
                <Button label='4' />
                <Button label='5' />
                <Button label='6' />
                <Button label='-' type="op" />

                {/** Linha4 */}
                <Button label='1' />
                <Button label='2' />
                <Button label='3' />
                <Button label='+' type="op" />

                {/** Linha5 */}
                <Button label='0' type="size-2"  />
                <Button label='.' />
                <Button label='=' type="op" />
            </div>
        );
    }
}

export default Calculator;