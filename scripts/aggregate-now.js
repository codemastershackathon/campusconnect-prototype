// Refresh the Insights numbers right now (otherwise they refresh nightly at 02:00 UTC).   npm run aggregate
require('./_env');
const { run } = require('../netlify/functions/aggregate-tags');
run().then(o => console.log(`✔ Insights refreshed: ${o.tags} tags from ${o.posts} posts`))
  .catch(e => { console.error('✖', e.message); process.exit(1); });
