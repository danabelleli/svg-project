const Shape = require('./shapes');

describe("Shape", () => {
    const shape = new Shape();

    test("defines setColor()", () => {
        expect(typeof shape.render()).toBe("function");
    });
});
