import { UpdateAuthDto } from 'dtos/update-auth.dto';
import { HttpService } from './http.service';
import { AuthLogin } from 'entities/auth-login';
import { ResetPasswordDto } from 'dtos/reset-password.dto';

class AuthService extends HttpService {
  async login(username: string, password: string): Promise<AuthLogin> {
    try {
      const response = await this.post('/auth/login', { username, password });
      return response.data as AuthLogin;
    } catch (error) {
      throw error;
    }
  }

  async update(updateAuthDto: UpdateAuthDto): Promise<void> {
    try {
      await this.patch('/auth', updateAuthDto);
    } catch (error) {
      throw error;
    }
  }

  async forgotPassword(email: string): Promise<void> {
    try {
      await this.post('/auth/forgot-password', { email });
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<void> {
    try {
      await this.post('/auth/reset-password', resetPasswordDto);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;