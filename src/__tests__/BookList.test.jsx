import BookList from "../components/BookList";
import App from "../App";
import { render, screen, fireEvent, getAllByPlaceholderText } from "@testing-library/react";
import fantasy from '../data/books/fantasy.json';

describe('Test sulla componente Booklist', () => {
    it('renderizza correttamente tutte le card dei libri', () => {
        render(<BookList books={fantasy} />);

        const bookCards = screen.getAllByTestId('book-card');
        expect(bookCards).toHaveLength(fantasy.length)
    })

    it('test sul filtro della ricerca libri', () =>{
       
    })
})