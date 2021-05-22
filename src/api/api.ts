import axios from 'axios';

class Api {
  base_url: string;
  instance: any;

  constructor() {
    this.base_url = 'https://registry.npmjs.org/-/v1/';
    this.instance = axios.create({
      baseURL: this.base_url,
      timeout: 30000,
    });
  }

  async getPackages(term: string) {
    return await this.instance.get(
      'search',
      {
        params: {
          text: term,
        },
      }
    );
  }

}

export default new Api();