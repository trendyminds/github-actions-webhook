const core = require("@actions/core");
const fetch = require("node-fetch");

const OPTS = {
  url: core.getInput("url") || "",
  method: core.getInput("method") || "GET",
  data: core.getInput("data") || "{}",
  headers: core.getInput("headers") ? JSON.parse(core.getInput("headers")) : {}
};

(async () => {
  const res = await fetch(OPTS.url, {
    method: OPTS.method,
    headers: OPTS.headers,
    data: OPTS.data
  });

  console.log(`Response: ${res.status} ${res.statusText}`);

  if (!res.ok) {
    core.setFailed(`Reaching webhook failed!`);
    return false;
  }

  return true;
})();
