import "@testing-library/jest-dom/extend-expect"
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoList } from "./TodoList"

describe("TodoList", () => {
    it("if rendere TodoList", () => {
        render(<TodoList />);

        const addButton = screen.getByText("Add");
        // const resetButton = screen.getByText("Reset");
        // const removeButton = screen.getByText("Remove");

        const input = screen.getByTestId("todo-input")
        
        fireEvent.change(input, { target: { value: "Learn React" } });
        
        fireEvent.click(addButton);

        const itemList = screen.getByText('Learn React')

        expect(itemList).toBeInTheDocument()
    });
    it("if remove item in TodoList", () => {
        render(<TodoList />);

        const addButton = screen.getByText("Add");
        // const resetButton = screen.getByText("Reset");

        const input = screen.getByTestId("todo-input")
        
        fireEvent.change(input, { target: { value: "Learn React" } });
        fireEvent.click(addButton);
        
        const removeButton = screen.getByText("Remove");
        fireEvent.click(removeButton);

        expect(removeButton).not.toBeInTheDocument()
    });
    it("if reset TodoList", () => {
        render(<TodoList />);

        const addButton = screen.getByText("Add");
        const resetButton = screen.getByText("Reset");

        const input = screen.getByTestId("todo-input")
        
        fireEvent.change(input, { target: { value: "Learn React" } });
        fireEvent.click(addButton);
        
        const todoList = screen.getByText("Learn React")
        fireEvent.click(resetButton);

        expect(todoList).not.toBeInTheDocument()
    });
}) 