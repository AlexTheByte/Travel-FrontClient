import { CreateUserDto } from 'dtos/create-user.dto';
import { HttpService } from './http.service';
import { User } from 'entities/user';
import { UpdateUserDto } from 'dtos/update-user.dto';

class UsersService extends HttpService {
  async createUser(createUserDto: CreateUserDto): Promise<void> {
    try {
      await this.post(`${this.BASE_URL}/users`, createUserDto);
      // L'utilisateur a été créé avec succès
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    }
  }

  async getUserMe(): Promise<User> {
    try {
      const response = await this.get(`${this.BASE_URL}/users/me`);
      return response.data as User;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur actuel :', error);
      throw error;
    }
  }

  async updateUserInfo(updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const response = await this.patch(`${this.BASE_URL}/users`, updateUserDto);
      return response.data as User;
    } catch (error) {
      console.error('Erreur lors de la mise à jour des informations de l\'utilisateur :', error);
      throw error;
    }
  }

  async deleteUser(): Promise<void> {
    try {
      await this.delete(`${this.BASE_URL}/users`);
      // L'utilisateur a été supprimé avec succès
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur :', error);
      throw error;
    }
  }
}

export default UsersService;
