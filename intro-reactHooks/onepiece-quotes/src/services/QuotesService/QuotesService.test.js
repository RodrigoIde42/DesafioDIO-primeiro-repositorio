import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getQuotes } from './QuotesService';

const response = { test: 'testing' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transforms json response into object', async () => {
  const quote = await getQuotes();

  expect(quote).toStrictEqual(response);
});