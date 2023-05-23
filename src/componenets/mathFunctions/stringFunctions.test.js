import { capitalizer, connect, secondWord } from "./stringFunctions";


describe("Capitalizes the first word in a string", ()=> {
    const result = capitalizer("pizza");

    it("should not retrun undefined", () => {
        expect(result).not.toBe(undefined);
    })
    it("Should capitalize the first letter of 'pizza'", () => {
        const result = capitalizer("pizza");
        expect(result).toMatch("Pizza");
      });
      
})
describe("Concatinates two strings together", ()=> {
    const result = connect("Papa", "Johns");

    it("should not retrun undefined", () => {
        expect(result).not.toBe(undefined);
    })
    it("Should expect to read Papa Johns", ()=>{
        const result = connect("Papa", "Johns");
        expect(result).toMatch("Papa Johns")
    })
})
describe("returns the second word in a string", ()=> {
    const result = secondWord("Scuba Dive");

    it("should not retrun undefined", () => {
        expect(result).not.toBe(undefined);
    })
    it ("Should read as Dive as op to Scuba dive", () =>{
        expect(result).toMatch("Dive")
    })
})