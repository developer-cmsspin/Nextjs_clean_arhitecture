'use client';
import useTestAction from '@/infrastructure/persistence/redux/test/testAction';
import 'reflect-metadata';
import { container } from 'tsyringe';

/**
 * Dependency Injection for Client Infrastructure Persistence.
 *
 * @remarks
 * This function performs dependency injection using the tsyringe library. It registers an instance of the `useTestAction` object as a dependency
 * with the key 'ITestAction' in the container. This allows other parts of the application to resolve and use the registered instance when needed.
 */
const DependencyInjectionClientInfrastructurePersistence = () => {
  const testData = useTestAction();
  container.registerInstance('ITestAction', testData);
};

export default DependencyInjectionClientInfrastructurePersistence;
