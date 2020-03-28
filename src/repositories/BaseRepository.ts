import { Document, Model, Types } from 'mongoose'

export interface IBaseRepository<T> {
  create: (...item: T[]) => Promise<T[]>
  find: (query: any) => Promise<T[]>
  update: (id: Types.ObjectId, item: T) => Promise<T>
  remove: (id: Types.ObjectId) => Promise<T>
  findOne: (query: any) => Promise<T>
}


export class BaseRepository<T extends Document> implements IBaseRepository<T> {
  constructor(private _model: Model<Document>) {

  }

  async create(...items: T[]): Promise<T[]> {
    return await this._model.create(...items)
  }

  async find(query: object): Promise<T[]> {
    return await this._model.find(query)
  }

  async update(id: Types.ObjectId, item: T): Promise<T> {
    return await this._model.update({ _id: id }, item)
  }

  async remove(id: Types.ObjectId): Promise<T> {
    return await this._model.remove({ _id: id })
  }

  async findOne(query: object): Promise<T> {
    return await this._model.findOne(query)
  }
}