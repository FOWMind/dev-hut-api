const HTTP_RESPONSES = {
  SUCCESS: {
    CODE: 200,
    JSON: { message: 'success' },
  },
  CREATED: {
    CODE: 201,
    JSON: { message: 'created' },
  },
  NO_CONTENT: {
    CODE: 204,
    JSON: { message: 'no content' },
  },
  BAD_REQUEST: {
    CODE: 400,
    JSON: { message: 'bad request' },
  },
  NOT_FOUND: {
    CODE: 404,
    JSON: { message: 'not found' },
  },
  METHOD_NOT_ALLOWED: {
    CODE: 405,
    JSON: { message: 'method not allowed' },
  },
  CONFLICT: {
    CODE: 409,
    JSON: { message: 'conflict' },
  },
}

module.exports = { HTTP_RESPONSES }
