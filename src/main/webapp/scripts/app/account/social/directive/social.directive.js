'use strict';

angular.module('shopcartApp')
    .directive('jhSocial', function($filter, SocialService) {
        return {
            restrict: 'E',
            scope: {
                provider: "@ngProvider"
            },
            templateUrl: 'scripts/app/account/social/directive/social.html',
            link: function(scope, element, attrs) {
                scope.label = $filter('capitalize')(scope.provider);
                scope.providerSetting = SocialService.getProviderSetting(scope.provider);
                scope.providerURL = SocialService.getProviderURL(scope.provider);
                scope.csrf = SocialService.getCSRF();
            }
        }
     });
