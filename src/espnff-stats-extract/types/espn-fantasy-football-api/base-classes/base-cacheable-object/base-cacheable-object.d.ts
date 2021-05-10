export default BaseCacheableObject;
/**
 * The base class for all project objects that can be cached. This class is extremely useful for
 * classes which have unique identifiers but cannot make API calls.
 *
 * Note: The id used for caching may be different than any id used by the response from the wire.
 * This allows for caching of an instance with the same id but different season data. Example:
 * League with different `seasonId`s can all be cached using this functionality. See the
 * `getCacheId` method for implementation.
 *
 * When managing the cache, never set an object to an `undefined` id. Always check that the result
 * from `getCacheId` is valid (see `_populateObject` for an example). Otherwise the cache will not
 * be in the correct state.
 *
 * @extends {BaseObject}
 */
declare class BaseCacheableObject extends BaseObject {
  /**
   * Sets the cache object.
   * @param {Object.<String, BaseCacheableObject>} cache
   */
  static set cache(arg: any);
  /**
   * Returns all cached instances of an BaseCacheableObject. If no cache exists, a cache object is
   * created. This implementation ensures each class has a unique cache of only instances of the
   * BaseCacheableObject that does not overlap with other BaseCacheableObject classes. The keys of
   * the cache should use the caching id implemented in `getCacheId`.
   * @return {Object.<String, BaseCacheableObject>} The cache of BaseCacheableObjects.
   */
  static get cache(): any;
  /**
   * Resets cache to an empty object.
   */
  static clearCache(): void;
  /**
   * Returns a cached instance matching the passed caching id if it exists. Otherwise, returns
   * undefined.
   * @param  {Number} id This id must match the form of the caching id provided by `getCacheId`.
   * @return {BaseCacheableObject|undefined}
   */
  static get(id: number): BaseCacheableObject | undefined;
  /**
   * Should be overridden by each subclass. Returns an object containing all IDs used for API
   * requests and caching.
   * @return {Object}
   */
  static getIDParams(): any;
  /**
   * Constructs and returns an id for the cache if possible from the passed params. If construction
   * is not possible, returns undefined.
   * @param  {Object} idParams
   * @return {string|undefined}
   */
  static getCacheId(idParams: any): string | undefined;
  /**
   * Returns an object containing all IDs used for API requests and caching for the instance.
   * @return {Object}
   */
  getIDParams(): any;
  /**
   * Returns the id used for caching. Important for classes that have multiple identifiers. Example:
   * League is identified by its `leagueId` and its `seasonId`. This method prevents separate
   * seasons from overriding each other's data.
   * @return {String|undefined}
   */
  getCacheId(): string | undefined;
}
import BaseObject from '../base-object/base-object.js';
