import "@testing-library/jest-dom";
import Card from "./Card";
import { render, screen } from '@testing-library/react';
import { cardData} from './mock'

test('Card component renders correct and has proper data', () => {
    render(<Card {...cardData[0]}/>);
    expect(screen.getByTestId('userName')).toHaveTextContent(cardData[0].name);
    expect(screen.getByTestId('userCity')).toHaveTextContent(cardData[0].city);
    expect(screen.getByTestId('userPostal')).toHaveTextContent(cardData[0].postcode);
    expect(screen.getByTestId('trophyIcon')).toBeVisible();
})