import express, { response, text } from 'express';
import fetch from 'node-fetch';


const app = express()
const port = 3000




const test = "http://{JIRA_BASE_URL}/rest/tempo-timesheets/4/timesheet-approval, http://{JIRA_BASE_URL}/rest/tempo-teams/2/team"
 // await fetch('https://abano-playground.atlassian.net/rest/api/3/project', {
    await fetch('https://abano-playground.atlassian.net/rest/api/3/issue/TT-1/worklog', {
  method: 'GET',
  headers: {
    'Authorization': `Basic ${Buffer.from(
      'manish.nepali@abano.be:2olF6uMJ7crhPyEgS68OEC4A'
    ).toString('base64')}`,
    'Accept': 'application/json'
  }
})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    )
    return response.json();
  })
  .then(text => app.get('/', (req, res) => {
    res.send(text)
    console.log(text)
  
  }))
  .catch(err => console.error(err));




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
