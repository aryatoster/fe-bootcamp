import getData from './data';
import "@testing-library/jest-dom";
import {mockReturnData} from './mock'

test('getData function works', async () => {
    const mockFetch = jest.fn(() => Promise.resolve(new Response(JSON.stringify(mockReturnData))));
    global.fetch = mockFetch;
    const functionResponse = await getData();
    expect(functionResponse).toStrictEqual(mockReturnData);
} )
