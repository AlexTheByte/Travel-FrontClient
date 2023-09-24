import axios from 'axios';

class HttpService {
  BASE_URL = 'https://votre-serveur-nestjs.com/api'; // Remplacez par l'URL correcte

  async get(url: string, config = {}) {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(url: string, data = {}, config = {}) {
    try {
      const response = await axios.post(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put(url: string, data = {}, config = {}) {
    try {
      const response = await axios.put(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async patch(url: string, data = {}, config = {}) {
    try {
      const response = await axios.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(url: string, config = {}) {
    try {
      const response = await axios.delete(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export { HttpService };