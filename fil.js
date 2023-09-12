const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const moment = require('moment');

app.get('/endpoint', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    const current_day = moment().format('dddd');
    const utc_time = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

    const github_file_url = 'https://github.com/username/repo/blob/main/file_name.ext';
    const github_repo_url = 'https://github.com/username/repo';

    const response_data = {
        slack_name: slack_name,
        current_day: current_day,
        utc_time: utc_time,
        track: track,
        github_file_url: github_file_url,
        github_repo_url: github_repo_url,
        status_code: 200,
    };

    res.json(response_data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

