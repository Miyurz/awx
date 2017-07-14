import EventService from './event.service';
import PathService from './path.service';
import BaseStringService from './base-string.service';
import AppStrings from './app.strings';

angular
    .module('at.lib.services', [])
    .service('EventService', EventService)
    .service('PathService', PathService)
    .service('BaseStringService', BaseStringService)
    .service('AppStrings', AppStrings);
