const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // to log messafe to gihub action
  core.notice('Hello from my custom Javascript action');
}

run();
