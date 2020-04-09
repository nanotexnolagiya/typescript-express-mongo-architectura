import { BaseHttpController } from 'inversify-express-utils';

export abstract class BaseController extends BaseHttpController {
  private readonly httpStatusMessages: any = {
    200: 'Данные успешно получены',
    201: 'Данные успешно созданы',
    202: 'Данные успешно обновлены',
    204: 'Данные успешно удалены',
    400: 'Параметры запроса не прошли валидацию',
    404: 'Данные не существует',
    500: 'Ошибка в сервере'
  };
  protected sendResponse(input: any, code: number = 200) {
    return this.json({
      message: this.httpStatusMessages[code],
      data: code >= 400 ? null : input,
      error: code >= 400 ? input : null
    }, code);
  }
}