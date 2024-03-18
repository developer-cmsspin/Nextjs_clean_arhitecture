import { CacheContainer, ICachingOptions, IStorage } from 'node-ts-cache';
import { MemoryStorage } from 'node-ts-cache-storage-memory';
import { injectable, singleton } from 'tsyringe';
import { RedisStorage } from '../redisStorage';

@injectable()
@singleton()
export default class CacheContextStrategy {
  private _cacheProvider: CacheContainer;

  public constructor() {
    this._cacheProvider = new CacheContainer(this.createCacheContainer());
  }

  public getItem<T>(key: string): Promise<T | undefined> {
    return this._cacheProvider.getItem(key);
  }
  public setItem(key: string, content: any, options: Partial<ICachingOptions>): Promise<void> {
    return this._cacheProvider.setItem(key, content, options);
  }
  public clear(): Promise<void> {
    return this._cacheProvider.clear();
  }

  private createCacheContainer(): IStorage {
    if (process.env.CACHE_PROVIDER === 'redis') return new RedisStorage();
    else return new MemoryStorage();
  }
}
