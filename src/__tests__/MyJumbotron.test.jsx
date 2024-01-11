import MyJumbotron from "../components/MyJumbotron";
import { render, screen } from "@testing-library/react";

describe('Montaggio corretto di MyJumbotron', () => {
    it('monta correttamente "Welcome to EpiBooks!"', () =>{
        render(<MyJumbotron />);
        const heading = screen.getByText(/Welcome to Epibooks!/i)
        expect(heading).toBeInTheDocument()
    })
})