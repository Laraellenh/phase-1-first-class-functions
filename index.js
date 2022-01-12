

 function receivesAFunction(callback) {
     callback();
 }
 receivesAFunction(callback);

  function returnsANamedFunction() {
          return function namedFunc() {
              console.log('returning a named function for the love')
          }
        }

        function returnsAnAnonymousFunction() {
            return function () {
                console.log('aint got no name')
            }
        }