import { ICacheItem, IStorage } from 'node-ts-cache';
import { createClient } from 'redis';

export class RedisStorage implements IStorage {
  private _client: any = null;
  private _connectionString: string = '';

  public constructor(connectionString: string = 'redis://localhost:6379') {
    this._connectionString = connectionString;
  }

  private async createClient(): Promise<void> {
    if (!this._client)
      this._client = await createClient({ url: this._connectionString })
        .on('error', (err) => {
          console.error('Redis Client Error []', err);
        })
        .connect();
  }

  public async clear(): Promise<void> {
    this.createClient();
    this._client.flushdb();
  }
  public async getItem(key: string): Promise<ICacheItem | undefined> {
    await this.createClient();
    const data = await this._client.get(key);
    return JSON.parse(data);
  }
  public async setItem(key: string, content: ICacheItem | undefined): Promise<void> {
    await this.createClient();
    await this._client.set(key, JSON.stringify(content));
  }
}
