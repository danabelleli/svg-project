const { Shape } = require('./shapes');

// example of a pass
describe('Shape', () => {
    it('Should set color correctly', () => {
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toBe('red');
    });
});

// example of a fail
describe('Shape', () => {
    it('Should set color correctly', () => {
        const shape = new Shape();
        shape.setColor('yellow');
        expect(shape.color).toBe('red');
    });
});