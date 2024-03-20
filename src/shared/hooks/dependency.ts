import DependencyInjectionApplication from '@/application/dependencyInjectionApplication';
import DependencyInjectionInfrastructurePersistence from '@/infrastructure/persistence/DependencyInjectionInfrastructurePersistence';
import { DependencyInjectionInfrastructureService } from '@/infrastructure/service/dependencyInjectionInfrastructureService';
import switchTheme from '@/package/switch-themes/switchTheme';
import 'reflect-metadata';
import { container } from 'tsyringe';
import ThemeTest from '../themes/test-theme/theme';

//import ThemetestUI from '../themes/testUI/theme';

export function dependencyInjection() {
  DependencyInjectionApplication();
  DependencyInjectionInfrastructureService();
  DependencyInjectionInfrastructurePersistence();

  switchTheme.LoadThemes(new ThemeTest());
  switchTheme.UseThemes(process.env.NEXT_PUBLIC_THEME);
}

export function getDependency<T>(token: string): T {
  return container.resolve<T>(token);
}
