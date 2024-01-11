import CommentArea from "../components/CommentArea";
import { render, screen } from '@testing-library/react';


describe('Verifica componente CommentArea', () => {
    it('renderizza componente CommentArea', () => {
        render(<CommentArea />)
        const listaCommenti = screen.getByTestId("comment-area")
        expect(listaCommenti).toBeInTheDocument()
    })
})
