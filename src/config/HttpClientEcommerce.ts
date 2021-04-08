import HttpClient from '../api/HttpClient';

export default class HttpClientEcommerce extends HttpClient {
  protected constructor() {
    const baseURL = {
      dev: 'https://pokeapi.co/api/v2/',
    };
    super(baseURL.dev, {
      ContentType: 'application/json',
    });
  }
}
