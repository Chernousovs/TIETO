const { test } = require('@jest/globals');
const { getTriangleType } = require('../triangle');


describe("Checks triangle type", () => {
    const notExisting = 0;
    const equilateral = 1;
    const isosceles = 2;
    const scalene = 3;

    test("Should return equilateral triangle", () =>{
        expect(getTriangleType(5, 5, 5)).toBe(equilateral);
    });

    test('should return isosceles triangle', () =>{
        expect(getTriangleType(4,5,4)).toBe(isosceles);
    });

    test('should return scalene triangle', () =>{
        expect(getTriangleType(3,5,4)).toBe(scalene);
    });

    test('Cant return any triangle type', () =>{
        expect(getTriangleType(1,1,5)).toBe(notExisting);
    });

    test('Cant return any triangle type', () =>{
        expect(getTriangleType(-1, -1, -1)).toBe(notExisting);
    });
});

