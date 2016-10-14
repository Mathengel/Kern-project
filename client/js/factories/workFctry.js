app.factory('workFctry', ['$http', workFctry])

function workFctry($http){
    console.log("work factory loaded!!!.. ")

    return {

        create: function(newWork, success){
            console.log("workFctry.create fired!!!!", newWork)
            $http.post('/works', newWork).then(success);
        },

    }
}
