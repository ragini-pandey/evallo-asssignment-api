export const CONSTANTS = {
  LOG_HEADER: 'LOGS',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
  SESSION_SECRET: 'fsdfdfsdfdsfadfsf',
  DATABASE_COLLECTIONS: {
    CONTENT: 'CONTENT',
  },
  STATUS: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },
  FILENAME: {
    LOG: {
      COMBINED: 'combined.log',
      EXCEPTIONS: 'exceptions.log',
    },
  },
  MESSAGES: {
    ERROR: {
      DEFAULT_TEXT: 'Error occurred',
      INVALID_JSON: 'Invalid JSON in request',
      PAYLOAD_SIZE_EXCEEDED: 'Request Payload size exceeded',
      TOKEN_REQUIRED: 'Authentication token is required!',
      INVALID_AUTH_TOKEN: 'Invalid Authentication token. Please request a new one',
      TOKEN_EXPIRED: 'Authentication token expired. Please request a new one',
      TOKEN_BEFORE_ACTIVE: 'Authentication token not active yet. Please request a new one',
    },
    API_WORKING: 'evallo-assignment-api API is working!',
    ENDPOINT_NOT_FOUND: 'Endpoint not found!',
  },
  BODY_PARSER_LIMIT: '1mb',
  JWT_SECRET: process.env.JWT_SECRET || 'T1ke1tBlltchwa123!',
  JWT_EXPIRY_TIME: '8h',
  ALLOWED_FILE_EXTENSIONS: ['jpeg', 'jpg', 'png', 'pdf'],
  MAX_FILE_SIZE_ALLOWED: 1024 * 1000 * 5, // 5 Mb
  RECORD_EXPIRES: 60 * 15 * 60,
  CURRENT_ENVIRONMENT: process.env.NODE_ENV || 'development',
  PAGINATION_LIMIT: 10,
  COMMENTS_LIMIT: 10,
};
