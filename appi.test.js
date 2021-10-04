

const getFirstAlbumTitle = require('./appi');

it('returns the status of api', async () => {
  const title = await getFirstAlbumTitle();  // Run the function
  expect(title).toEqual('success');  // Make an assertion on the result
});