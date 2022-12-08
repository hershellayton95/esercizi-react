import "@testing-library/jest-dom/extend-expect"
import { render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter"

describe("Counter",()=>{
    it("if rendere Counter", async () => {
            render(<Counter />);
            const headerElement = screen.getByTestId("heading");
            await waitFor(() => expect(headerElement.innerHTML).toBe("count: 1"));
    })
})