import { describe, expect, it } from 'vitest';
import validateFormData, { validateAccountingProvider, validateBusinessName, validateLoanAmount, validateYearEstablished } from './../../src/helper/validators';

describe('Validators', () => {
  it("Should validate businessName", () => {
    expect(validateBusinessName("")).toBeFalsy()
    expect(validateBusinessName("Sample")).toBeTruthy()
  })
  it("Should validate Year Established", () => {
    expect(validateYearEstablished(2024)).toBeFalsy();
    expect(validateYearEstablished(2020)).toBeTruthy()
  })
  it("Should validate loan amount", () => {
    expect(validateLoanAmount(0)).toBeFalsy();
    expect(validateLoanAmount(200000)).toBeTruthy()
  })
  it("Should validate accounting provider", () => {
    expect(validateAccountingProvider("")).toBeFalsy();
    expect(validateAccountingProvider("Xero")).toBeTruthy();
  })
  it("Should validate form data", () => {
    const formDataEmpty = {
        businessName: "",
        yearEstablished:2024,
        loanAmount:0,
        accountingProvider:""
    }
    const formData = {
        businessName: "Sample",
        yearEstablished:2020,
        loanAmount:200000,
        accountingProvider:"Xero"
    }
    expect(validateFormData(formDataEmpty)).toBeFalsy();
    expect(validateFormData(formData)).toBeTruthy()
  })
})
