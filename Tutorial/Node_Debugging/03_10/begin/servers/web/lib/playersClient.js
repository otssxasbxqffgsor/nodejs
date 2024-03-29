const httpClient = require('./httpClient');

module.exports = (config) => {
  /**
   * Create a player.
   *
   * @param {string} requestId - X-Request-Id.
   * @returns {Promise<Player>} New player.
   */
  function create(requestId) {
    return httpClient({
      uri: `${config.protocol}://${config.host}:${config.port}/api/v1/players`,
      method: 'POST',
    }, requestId);
  }

  /**
   * Get a player by ID.
   *
   * @param {integer} id - target identifier.
   * @returns {Promise<Player>} Player matched by id.
   */
  function get(id) {
    return httpClient({
      uri: `${config.protocol}://${config.host}:${config.port}/api/v1/players/${id}`,
      method: 'GET',
    });
  }

  return {
    create,
    get,
  };
};
