export interface GenericDao<T> {
  find(item: T): Promise<T[]>;
  findOne(id: string | number): Promise<T>;
  create(model: T): Promise<T>;
  update(id: string | number, item: T): Promise<T>;
  delete(id: string | number): Promise<T>;
}
