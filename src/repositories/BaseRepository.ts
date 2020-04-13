import { Document, Model, FilterQuery } from 'mongoose';
import { injectable, unmanaged } from 'inversify';

@injectable()
export abstract class BaseRepository<T extends Document> {
  protected constructor(@unmanaged() private _model: Model<T>) {}

  async create(...items: T[]): Promise<T> {
    return this._model.create(...items);
  }

  async find(query: object): Promise<T[]> {
    return this._model.find(query);
  }

  async update(conditions: FilterQuery<T>, item: T): Promise<T> {
    return this._model.update(conditions, item);
  }

  async remove(conditions: FilterQuery<T>): Promise<any> {
    return this._model.remove(conditions);
  }

  async findOne(query: object): Promise<T> {
    return this._model.findOne(query);
  }
}
