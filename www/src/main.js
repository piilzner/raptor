var app = angular.module('app', ['ngRoute']);
app.config(function ($locationProvider, $routeProvider) {
    
    
    $routeProvider.when('/', {
        templateUrl: 'www/views/home.html',
        controller: 'homeCtrl'
    })
    
    .when('/dashboard', {
        templateUrl: 'www/views/dashboard.html',
        controller: 'dashboardCtrl'
    })
    
    .when('/posts', {
        templateUrl: 'www/views/posts.html',
        controller: 'postCtrl'
    })
    
    .otherwise({
        redirectTo: '/'
    });
});
app.controller('dashboardCtrl', ['$scope', function ($scope) {


    //Project name **Make dynamic**
    $scope.projectName = "Raptor CMS Project"

    //User Name ** Make dynamic**
    $scope.user = 'Nils Löfgren'



}]);
app.controller('homeCtrl', ["$scope", function ($scope) {

    

}]);
app.controller('postCtrl', ['$scope', 'postsFactory', function ($scope, postsFactory) {

    $scope.posts = postsFactory.posts;
    
    $scope.postIndex = $scope.posts[0];
    
      //Preview state on post
    $scope.postPreview = false;
    
    $scope.setpreview = function(){
        $scope.postPreview = !$scope.postPreview;
    }
    
    //Markdown editor added
    var simplemde = new SimpleMDE({
        element: document.getElementById("editor")
    });
    
    //Show posts when click on posttab in menu
    $scope.postShow = true;

    
    //Find index from Posts
    $scope.postsIndex = function ($index) {
        $scope.postIndex = $scope.posts[$index];
    };


  

    
    //Add Active line and change text color on postlist
    $scope.select = function (item) {
        $scope.selected = item;

    };
    
    $scope.isActive = function (item) {
        return $scope.selected == item;
    };
    $scope.isActiveColor = function (item) {
        return $scope.selected == item;
    };




    //DROPZONE SNIPPET
    + function($) {
    'use strict';

    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var startUpload = function(files) {
        console.log(files)
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        startUpload(uploadFiles)
    })

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }

}(jQuery);
    
    
    
    
    


}]);
app.directive('sidebar', function() {
  return {
    restrict: 'E',
    controller: ['$scope', 'postsFactory', function($scope, postsFactory){
        
    $scope.posts = postsFactory.posts;
        
            //Project name **Make dynamic**
    $scope.projectName = "Raptor CMS Project"

    //User Name ** Make dynamic**
    $scope.user = 'Kent Sten'

    }],
    templateUrl: 'www/views/partials/sidebar.html'
  };    
});
app.factory('postsFactory', [ function () {

    return {
        posts: [
             {
            title: 'Temperament is a skill',
            body: 'Throwing tantrums, calling names, not doing the reading, making things up, demonizing the other, impulsivity, egomaniacal narcissism, breaking big promises... Waiting your turn, asking hard questions, thinking about others, slowing down in key moments... Telling the truth, taking responsibility... Giving others a chance to share their ideas, attracting and trusting talented people, trusting the right things and being skeptical of the others... These are all skills (or the lack thereof). Somewhere along the way, we accepted the baked-in, unchanging, what-you-see-is-what-you-get view of the world. It lets us off the hook, of course, because if this is the way we are, its certainly not our fault.The bravest and most optimistic thing we can do, though, is see that each of us has the opportunity to do precisely the opposite. We have far more choices, far more control and far more responsibility than we give ourselves (and others) credit for. Temperament matters. A lot.',
            category: 'Design',
            date: '12 Aug 2016',
            comments: '22',
            author: {
                name: 'Johan Svensson',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'
            }
        },
        {
            title: "The main topic that's been on everybody's mind",
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tBacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design',
            date: '20 Aug 2016',
            comments: '4',
            author: {
                name: 'Kent Sten',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/zakiwarfel/128.jpg'
            }
        },
        {
            title: 'Marketing in four steps',
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design',
            date: '4 Jul 2016',
            comments: '12',
            author: {
                name: 'Johan Svensson',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'
            }
        },
        {
            title: 'Joint ownership',
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design',
            date: '3 Jul 2016',
            comments: '23',
            author: {
                name: 'Kent Sten',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/zakiwarfel/128.jpg'
            }
        },
        {
            title: 'Pattern matching as a shortcut to growth',
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design',
            date: '24 Jun 2016',
            comments: '12',
            author: {
                name: 'Karin Söderlund',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }
        },
        {
            title: 'Bureaucracy, success and the status quo',
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design',
            date: '20 May 2016',
            comments: '23',
            author: {
                name: 'Karin Söderlund',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }
        },
        {
            title: 'Function (and the dysfunctional organization)',
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design',
            date: '12 May 2016',
            comments: '12',
            author: {
                name: 'Kent Sten',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/zakiwarfel/128.jpg'
            }
        },
        {
            title: "Don't argue about belief, argue about arguments",
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Webbdesign',
            date: '17 Apr 2016',
            comments: '23',
            author: {
                name: 'Karin Söderlund',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
            }
        },
        {
            title: 'The lottery winners (a secret of unhappiness)',
            body: 'Bacon ipsum dolor amet pig bacon ham ham hock tri-tip short ribs. Ground round sirloin pork fatback doner t-bone    frankfurter tri-tip ribeye jowl. Andouille cow biltong chuck boudin turkey swine short ribs pork loin sirloin meatloaf frankfurter ball tip flank. Capicola cow short ribs ground round bresaola turducken, pork belly frankfurter hamburger jowl pancetta. Chuck beef ribs doner, pork belly pig pork hamburger kevin tenderloin. Beef pork loin tri-tip beef ribs shank. Bacon ribeye ball tip, frankfurter short loin pork ham prosciutto pastrami t-bone shoulder salami.',
            category: 'Design, Media',
            date: '1 Apr 2016',
            comments: '12',
            author: {
                name: 'Johan Svensson',
                img: 'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'
            }
        }
        ]
    };



}]);