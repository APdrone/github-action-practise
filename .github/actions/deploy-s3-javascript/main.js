const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // 1) Get some input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });

  //  2) upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  // to log messafe to gihub action

  core.notice('Hello from my custom Javascript action');
}

run();
