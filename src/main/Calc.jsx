import React, {Component} from 'react'
import './Calc.css'
import Botao from '../Components/Botao'
import Display from '../Components/Display'

export default class Calc extends Component {
    render() {
        return(
            <div className="calc">
                <Botao label = 'AC' />
                <Botao label = '+/-' />
                <Botao label = '%' />
                <Botao label = '/' />
                <Botao label = '7' />
                <Botao label = '8' />
                <Botao label = '9' />
                <Botao label = '*' />
                <Botao label = '4' />
                <Botao label = '5' />
                <Botao label = '6' />
                <Botao label = '-' />
                <Botao label = '1' />
                <Botao label = '2' />
                <Botao label = '3' />
                <Botao label = '+' />
                <Botao label = '=' />
            </div>
        )
    }
}