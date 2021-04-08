import { AxiosPromise } from 'axios';
import { IPokemonInterface } from '../@types/PokemonTypes';
import HttpClientEcommerce from '../config/HttpClientEcommerce';

export default class PokemonService extends HttpClientEcommerce {
  private static classInstance?: PokemonService;

  public static getInstance(): PokemonService {
    if (!this.classInstance) {
      this.classInstance = new PokemonService();
    }

    return this.classInstance;
  }

  public getAll = (): AxiosPromise =>
    this.instance.get<IPokemonInterface>(`/pokemon`);
}
