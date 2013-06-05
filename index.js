/**
 * element-event
 * event plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `event`
 */

module.exports = event;

/**
 * event
 * 
 * @param {element} element
 * @return {element} element
 */

function event (element) {

  /**
   * on
   * Add event listener.
   *
   * @param {String} event event name
   * @param {Function} callback callback
   * @return {Event} this for chaining
   * @api public
   */
  
  element.prototype.on = function (event, callback, capture) {
    this.el.addEventListener(event, callback, capture || false);
    return this;
  };
  
  /**
   * off
   * Remove event listener.
   *
   * @param {String} event event name
   * @param {Function} callback callback
   * @return {Event} this for chaining
   * @api public
   */
  
  element.prototype.off = function (event, callback) {
    this.el.removeEventListener(event, callback, capture || false);
    return this;
  };
  
  return element;
}
