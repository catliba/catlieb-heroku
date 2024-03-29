'use strict';

/**
 * strip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strip.strip');
