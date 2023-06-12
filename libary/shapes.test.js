const { Shape } = require('./shapes');

// Sample for test pass
describe('Shape', () => {
    it('Should set color correctly', () => {
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toBe('red');
    });
});

// Sample for test faile
describe('Shape', () => {
    it('Should set color correctly', () => {
        const shape = new Shape();
        shape.setColor('yellow');
        expect(shape.color).toBe('red');
    });
});