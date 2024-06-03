process.env.TZ = 'UTC'

const { getJestProjectsAsync } = require('@nx/jest')

module.exports = {
  projects: await getJestProjectsAsync()
}
