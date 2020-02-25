export class RequestClient {
  constructor(axios, cookies, store) {
    this.axios = axios;
    this.cookies = cookies;
    this.store = store;
    this.hasRetried = false
  }

  async get(uri, params = {}) {
    const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');
    const query = queryString.length > 0 ? `${uri}?${queryString}` : uri;
    return await this.axios.$get(query)
  }

  async post(uri) {
    return await this.axios.$post(uri)
  }
}

export function createRequestClient(axios) {
  return new RequestClient(axios)
}
