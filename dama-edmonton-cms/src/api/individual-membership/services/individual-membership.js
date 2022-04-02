'use strict';

/**
 * individual-membership service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::individual-membership.individual-membership');
