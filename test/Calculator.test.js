import chai from 'chai';
import Calculator from '../src/Calculator';

const expect = chai.expect;

describe('Calculator class', () => {
    let calculator = null;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('(SUM) expect 5 + 4 = 9', () => {
        const result = calculator.sum(5, 4);
        
        expect(result).to.equal(9);
        expect(result).to.be.an('number');
    });

    it('(MINUS) expect 300 - 188 = 112', () => {
        const result = calculator.minus(300, 188);

        expect(result).to.equal(112);
        expect(result).to.be.an('number');
        expect(result).to.not.equal(100);
    });

    it('(MULT) expect 4 * 4 = 16', () => {
        const result = calculator.mult(4, 4);

        expect(result).to.equal(16);
        expect(result).to.be.an('number');
    });

    it('(DIV) expect 10 / 2 = 5', () => {
        const result = calculator.div(10, 2);

        expect(result).to.equal(5);
        expect(result).to.be.an('number');
    });
});