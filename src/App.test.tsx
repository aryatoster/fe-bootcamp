import { render, waitFor } from '@testing-library/react';
import App from './App';
import Card from './Card';
import { cardData } from './mock';
import getData from './data';
import {mockReturnData} from './mock'
jest.mock('./data');
const mockGetData = jest.mocked(getData);
jest.mock('./Card')
const CardMock = jest.mocked(Card);

test('only 3 cards are rendered',async () => {
  mockGetData.mockReturnValue(Promise.resolve(mockReturnData));
  render(<App />);
  await waitFor(() => expect(CardMock).toHaveBeenCalledTimes(6));
  expect(CardMock.mock.calls[3][0]).toStrictEqual(cardData[0]);
  expect(CardMock.mock.calls[4][0]).toStrictEqual(cardData[1]);
  expect(CardMock.mock.calls[5][0]).toStrictEqual(cardData[2]);
})