// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const test = "http://{JIRA_BASE_URL}/rest/tempo-timesheets/4/timesheet-approval/pending"

  await fetch('https://abano-playground.atlassian.net/rest/workload-schemes', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'manish.nepali@abano.be:2DIT995tAEWgQDBYyChP2R1DSTyLNO'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    )
    return response.text();
  })
  .then(text => console.log(text))
  .catch(err => console.error(err));

