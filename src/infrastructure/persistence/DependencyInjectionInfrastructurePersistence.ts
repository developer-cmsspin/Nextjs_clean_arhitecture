import 'reflect-metadata';
import { Lifecycle, container } from 'tsyringe';
//import ContentSiteCache from './cache/contentSite/contentSiteCache';
import CacheContextStrategy from './cache/strategy/cacheContextStrategy';

export const DependencyInjectionInfrastructurePersistence = (): void => {
  //container.register('ICustomerTemplateAction', { useClass: ContentSiteCache });
  container.register('CacheContextStrategy', { useClass: CacheContextStrategy }, { lifecycle: Lifecycle.Singleton });
};
export default DependencyInjectionInfrastructurePersistence;
