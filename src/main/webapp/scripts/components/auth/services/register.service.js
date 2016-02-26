'use strict';

angular.module('shopcartApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


