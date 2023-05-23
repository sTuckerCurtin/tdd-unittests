import { add, subtract, mutiply, divide  } from "./mathFunctions/mathFunctions";


describe("Math Functions - Add", () => {
    test("Adds numbers for positive value", () => {
      let value = add(2, 2);
  
      expect(value).toBe(4);
      expect(value).toBeGreaterThan(2);
      expect(value).not.toBe(undefined);
    });
  
    describe("Test add function using 2 + 2", () => {
      it("should not be more than4", () => {
        expect(add(2, 2)).not.toBeGreaterThan(4);
      });
    });
  });
  
  
  
  
describe("Subtracts numbers for negative value", ()=> {
    let result = subtract(4,2);
    it("should be less than 4", () =>{
        expect(subtract(4,2)).toBe(2)
    })

    it("should not retrun undefined", () => {
        expect(result).not.toBe(undefined);
    })
})
describe("Multiplies numbers for positive value", ()=> {
    const result = mutiply(2,5);

    it("should not retrun undefined", () => {
        expect(result).not.toBe(undefined);
    })

    it("should return a number greater than 10", ()=> {
        expect(mutiply(2,5)).toBeGreaterThan(5)
    })
})
describe("Divides numbers for negative value", ()=> {
    const result = divide(10,2);

    it("should not retrun undefined", () => {
        expect(result).not.toBe(undefined);
    })

    it("shouldnt return a number greater than 6", ()=> {
        expect(result).toBeLessThan(6)
    })
})