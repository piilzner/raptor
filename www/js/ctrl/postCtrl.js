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