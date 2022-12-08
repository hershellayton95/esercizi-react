import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react";
import { Welcome } from "./Welcome"

describe("Welcome",()=>{
    it("if rendere welcome",()=>{
        render(<Welcome name="Filippo"/>);

        expect(screen.getByTestId("welcome")).toHaveTextContent("Welcome, Filippo")
    })
})