/**
 * AbstractConverter Class
 *
 * This abstract class defines a converter that converts between two types, E and D.
 * It provides two abstract methods to convert from a DTO (Data Transfer Object) to an entity of type E,
 * and from an entity of type E to a DTO.
 *
 * @typeparam E The type of the entity being converted.
 * @typeparam D The type of the DTO being converted.
 */
export default abstract class AbstractConverter<E, D> {
  /**
   * Converts a DTO (Data Transfer Object) of type D to an entity of type E.
   *
   * @param dto The DTO to be converted.
   * @returns The converted entity of type E.
   */
  abstract fromDto(dto: D): E;

  /**
   * Converts an entity of type E to a DTO (Data Transfer Object) of type D.
   *
   * @param entity The entity to be converted.
   * @returns The converted DTO of type D.
   */
  abstract fromEntity(entity: E): D;
}
