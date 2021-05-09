export default BaseObject;
/**
 * The base class for all project objects. Provides data mapping functionality.
 */
declare class BaseObject {
    /**
     * The class name. Minification will break `this.constructor.name`; this allows for readable
     * logging even in minified code.
     * @type {String}
     */
    static displayName: string;
    /**
     * Helper for processing items on `responseMap`s that are objects.
     * @private
     *
     * @param  {Object} options.data
     * @param  {BaseObject} options.instance The instance to populate. This instance will be mutated.
     * @param  {Object} options.constructorParams Params to be passed to the instance's constructor.
     *                                            Useful for passing parent data, such as `leagueId`.
     * @param  {String} options.value The value of the responseMap entry being parsed.
     * @return {*}
     */
    private static _processObjectValue;
    /**
     * Helper method for `_populateObject` that houses the attribute mapping logic. Should never be
     * used by other methods. See {@link ResponseMapValueObject} for `responseMap` documentation.
     * @private
     *
     * @param  {Object} options.data
     * @param  {BaseObject} options.instance The instance to populate. This instance will be mutated.
     * @param  {Object} options.constructorParams Params to be passed to the instance's constructor.
     *                                            Useful for passing parent data, such as `leagueId`.
     * @param  {Boolean} options.isDataFromServer When true, the data came from the ESPN API over the
     *                                            wire. When false, the data came locally.
     * @param  {String} options.key The key of the responseMap entry being parsed.
     * @param  {String} options.value The value of the responseMap entry being parsed.
     */
    private static _processResponseMapItem;
    /**
     * Returns the passed instance of the BaseObject populated with the passed data, mapping the
     * attributes defined in the value of responseMap to the matching key.
     * @private
     *
     * @param  {Object} options.data The data to map onto the passed instance.
     * @param  {BaseObject} options.instance The instance to populate. This instance will be mutated.
     * @param  {Boolean} options.isDataFromServer When true, the data came from ESPN. When false, the
     *                                            data came locally.
     * @return {BaseObject} The mutated BaseObject instance.
     */
    private static _populateObject;
    /**
     * Returns a new instance of the BaseObject populated with the passed data that came from ESPN,
     * mapping the attributes defined in the value of responseMap to the matching key. Use this method
     * when constructing BaseObjects with server responses.
     * @param  {Object} data Data originating from the server.
     * @param  {Object} constructorParams Params to be passed to the instance's constructor. Useful
     *                                    for passing parent data, such as `leagueId`.
     * @return {BaseObject} A new instance of the BaseObject populated with the passed data.
     */
    static buildFromServer(data: any, constructorParams: any): BaseObject;
    /**
     * @param {Object} options Properties to be assigned to the BaseObject. Must match the keys of the
     *                         BaseObject's `responseMap` or valid options defined by the class's
     *                         `constructor`.
     */
    constructor(options?: any);
}
