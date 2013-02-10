
/**
 * element-event
 * Element event component
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

/**
 * Expose `Event`.
 */

/**
 * Event
 * Initialize a new Event for `el`.
 *
 * @param {Element} el
 * @api public
 */

function Event (el) {
  this.el = el;
}

/**
 * on
 * Add event listener.
 *
 * @param {String} event event name
 * @param {Function} callback callback
 * @return {Event} this for chaining
 * @api public
 */

Event.prototype.on = function (event, callback) {
  this.el.addEventListener(event, callback, false);
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

Event.prototype.on = function (event, callback) {
  this.el.removeEventListener(event, callback, false);
  return this;
};
