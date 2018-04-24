import chai from 'chai';
import Square from './../src/Square';

const should = chai.should();

describe('Square', () => {
    let square;
    
    beforeEach(() => {
        square = new Square(10);
    });

    before(() => {

    });

    it('returns value', () => {
        square.value.should.equal(10);
    });

    it('getArea is equal 100', () => {
        square.getArea().should.equal(100);
    });    

    after(() => {

    });

    afterEach(() => {
        console.log('Afetr Each hook')
    });
});