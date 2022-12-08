import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen } from "@testing-library/react";
import { UncontrolledLogin } from "./UncontrolledLogin"

describe("UncontrolledLogin", () => {
    it("if rendere UncontrolledLogin", () => {
        console.log = jest.fn();// mockconsole
        render(<UncontrolledLogin />);

        const addButton = screen.getByText("Login");

        const username = screen.getByTestId("username");
        const password = screen.getByTestId("password");
        const remember = screen.getByTestId("remember");

        fireEvent.change(username, { target: { value: "filippo" } });
        fireEvent.change(password, { target: { value: "password" } });
        fireEvent.change(remember, { target: { checked: true } });

        fireEvent.click(addButton);


        expect(console.log).toHaveBeenCalledWith({ username: 'filippo', password: 'password', remember: true });
    }),
    it("if reset UncontrolledLogin", () => {
        console.log = jest.fn();// mockconsole
        render(<UncontrolledLogin />);

        const addButton = screen.getByText("Login");
        const resetButton = screen.getByText("Reset");

        const username = screen.getByTestId("username");
        const password = screen.getByTestId("password");
        const remember = screen.getByTestId("remember");

        fireEvent.change(username, { target: { value: "filippo" } });
        fireEvent.change(password, { target: { value: "password" } });
        fireEvent.change(remember, { target: { checked: true } });

        fireEvent.click(resetButton);
        fireEvent.click(addButton);


        expect(console.log).toHaveBeenCalledWith({ username: '', password: '', remember: false });
    })

}) 