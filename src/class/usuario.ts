import { usuario } from '../models/usuario.model';
import { GenericDao } from '../interfaces/GenericDao';

export class Usuario implements usuario, GenericDao<usuario> {
  constructor(public nombre: string) {}

  public find(item: usuario): Promise<usuario[]> {
    throw new Error('Method not implemented.');
  }
  public findOne(id: string | number): Promise<usuario> {
    throw new Error('Method not implemented.');
  }
  public create(model: usuario): Promise<usuario> {
    throw new Error('Method not implemented.');
  }
  public update(id: string | number, item: usuario): Promise<usuario> {
    throw new Error('Method not implemented.');
  }
  public delete(id: string | number): Promise<usuario> {
    throw new Error('Method not implemented.');
  }
}
