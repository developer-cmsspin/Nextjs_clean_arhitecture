import { classes } from '@automapper/classes';
import { Mapper, createMapper } from '@automapper/core';

/**
 * The pre-configured instance of the Mapper class.
 *
 * @remarks
 * This Mapper instance is initialized with a strategyInitializer using the 'classes' function from the '@automapper/classes' module.
 * It can be used for object mapping operations.
 */
export const mapper: Mapper = createMapper({
  /**
   * The strategyInitializer option for the Mapper configuration.
   *
   * @remarks
   * The strategyInitializer is set to the 'classes' function from the '@automapper/classes' module.
   * This initializes the mapper with default strategies for mapping classes.
   */
  strategyInitializer: classes()
});
