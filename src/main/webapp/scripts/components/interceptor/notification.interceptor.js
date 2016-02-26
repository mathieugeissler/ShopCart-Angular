 'use strict';

angular.module('shopcartApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-shopcartApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-shopcartApp-params')});
                }
                return response;
            }
        };
    });
