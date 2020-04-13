import { Users } from '../models/Users';
import { Roles } from "../models/Roles";
import { Permissions } from '../models/Permissions'
import { Languages } from "../models/Languages";
import { IRoles } from "../schemas/roles";
import { IUser } from "../schemas/users";


export class UserSeeder {

  public static async seeding() {
    try {
      console.log('Start User seeding')
      await Languages.remove({})
      const languages = await Languages.create([
        {
          code: 'ru',
          name: 'Русский',
          defaultLang: true
        }
      ])
      console.log('seed languages')
      await Permissions.remove({})
      const permissions = await Permissions.create([
        {
          name: 'Создать',
          code: 'create',
          languageId: languages[0]._id
        },
        {
          name: 'Читать',
          code: 'read',
          languageId: languages[0]._id
        },
        {
          name: 'Обновить',
          code: 'update',
          languageId: languages[0]._id
        },
        {
          name: 'Удалить',
          code: 'delete',
          languageId: languages[0]._id
        }
      ])
      console.log('seed permissions')

      await Roles.remove({})
      const roles = await Roles.create([
        {
          name: 'Супер админ',
          code: 'superadmin',
          languageId: languages[0]._id
        },
        {
          name: 'Админ',
          code: 'admin',
          languageId: languages[0]._id
        }
      ])
      console.log('seed roles')

      roles.forEach((role: IRoles) => {
        role.setPermissions(permissions)
      })
      console.log('seed set by role permissions')

      await Users.remove({})
      const users = await Users.create([
        {
          phone: '998123123123',
          password: 'pageup16'
        }
      ]);
      console.log('seed users')

      users.forEach((user: IUser) => {
        user.setRoles(roles)
      })
      console.log('seed set by user roles')
      console.log('End User seeding')
    } catch (e) {
      console.log('Error User seeding')
      console.log(e)
    }
  }
}
