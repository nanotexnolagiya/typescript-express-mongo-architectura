import { Users } from '../models/Users';


export class UserSeeder {

  public static async seeding() {
    const user = new Users({
      phone: '998123123123',
      password: 'pageup16'
    });
    await user.save();
  }
}