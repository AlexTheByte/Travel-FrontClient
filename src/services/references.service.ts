import { HttpService } from './http.service';

class InterestsService extends HttpService {
  async getAllInterests(lang: string) {
    try {
      const response = await this.get(`${this.BASE_URL}/references/interests?lang=${lang}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des centres d\'intérêt :', error);
      throw error;
    }
  }

  async getAllLanguages(lang: string) {
    try {
      const response = await this.get(`${this.BASE_URL}/references/languages?lang=${lang}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des langages :', error);
      throw error;
    }
  }
}

export default InterestsService;
