

const API_calling = require('./appi');
const axios = require('axios')
jest.mock('axios') 
it('returns the status of API', async () => {
  const resp = {data: {status: 'success'}}
  axios.get.mockResolvedValue(resp)
  const title = await API_calling();  // Run the function
  expect(title).toEqual('success');  // Make an assertion on the result
});
it("failed to get data from API",async()=>{
  const title = await API_calling();  // Run the function
  expect(title).toEqual!("success");
});