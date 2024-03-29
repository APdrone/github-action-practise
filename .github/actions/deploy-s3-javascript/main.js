const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // 1) Get some input values
  const bucket = core.getInput('bucket', { required: true });
  const bucketRegion = core.getInput('bucket-region', { required: true });
  const distFolder = core.getInput('dist-folder', { required: true });
  core.notice(bucket);
  core.notice(bucketRegion);
  core.notice(distFolder);
  //  2) upload files
  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  // to log messafe to gihub action

  // 3) getting website url
  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  core.notice(websiteUrl);
  core.setOutput('website-url', websiteUrl);

  core.notice('Hello from my custom Javascript action');
}

run();
