export const ENV = 'dev';

const HOST = {
  dev: 'http://localhost:8080',
  qa: 'http://localhost:8080',
  uat: 'http://localhost:8080',
  prod: 'http://localhost:8080',
};

export const currentHost = HOST[ENV];
