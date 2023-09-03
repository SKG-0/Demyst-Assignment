import simulateBackendCall, { initiateApplicationURI } from "../../src/helper/simulateBackendCall"
import { describe, expect, it } from 'vitest';

describe("Should simulate  backend call properly", () => {
    it("should return proper response on POST", async () => {
        const url = initiateApplicationURI;
        const method = "POST";
        const data = {
            isApplicationInitiated : true
        }

        expect(simulateBackendCall(url,method,data)).resolves.toEqual({error:false, message:true})
    })
    it("should return proper response on GET", async () => {
        const url = 'https://dummyjson.com/products/1';
        const method = "GET"

        expect(simulateBackendCall(url,method)).resolves.toHaveProperty("id")
    })
    it("Should throw error when parameter is missing", async () => {
        const url = initiateApplicationURI;
        const method = "POST";
        
        expect(simulateBackendCall(url,method)).rejects.toThrowError("Missing Parameters")
    })
})