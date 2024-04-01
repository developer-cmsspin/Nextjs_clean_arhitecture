import DependencyInjectionApplication from '@/application/dependencyInjectionApplication';
import DependencyInjectionDomain from '@/domain/dependencyInjectionDomain';
import DependencyInjectionInfrastructurePersistence from '@/infrastructure/persistence/DependencyInjectionInfrastructurePersistence';
import { DependencyInjectionInfrastructureService } from '@/infrastructure/service/dependencyInjectionInfrastructureService';

import 'reflect-metadata';
import { container } from 'tsyringe';

/**
 * Perform Dependency Injection.
 *
 * @remarks
 * This function performs dependency injection for the application, infrastructure service, and infrastructure persistence layers.
 * It imports the necessary functions from their respective modules and invokes them to register dependencies in the tsyringe container.
 * Dependencies can later be resolved using the `getDependency` function provided by this module.
 */
export function dependencyInjection() {
  DependencyInjectionDomain();
  DependencyInjectionApplication();
  DependencyInjectionInfrastructureService();
  DependencyInjectionInfrastructurePersistence();
}

/**
 * Get a resolved dependency from the container.
 *
 * @typeparam T - The type of the dependency being requested.
 * @param token - The key or token associated with the registered dependency.
 * @returns The resolved instance of the requested dependency.
 *
 * @remarks
 * This function retrieves a dependency from the tsyringe container using the specified token/key.
 * The resolved instance of the dependency is returned, allowing it to be used in other parts of the application.
 */
export function getDependency<T>(token: string): T {
  return container.resolve<T>(token);
}
