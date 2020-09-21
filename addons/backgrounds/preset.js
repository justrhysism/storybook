function config(entry = []) {
  return [...entry, require.resolve('./dist/esm/preset/defaultParameters')];
}

function managerEntries(entry = [], options) {
  return [...entry, require.resolve('./dist/esm/register')];
}

module.exports = {
  managerEntries,
  config,
};
