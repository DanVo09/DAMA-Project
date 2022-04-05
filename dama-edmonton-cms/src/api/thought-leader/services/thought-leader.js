'use strict';

/**
 * thought-leader service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::thought-leader.thought-leader');
