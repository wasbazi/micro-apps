# Angular with RequireJS

## Dependencies
* AngularJS
* AngularJS UI Router
* RequireJS

## Pro's

The application can be made up of several different applications with different
controllers per application. If you were to move the `helloApp` into another
repository and include it using `bower` or `npm` you could have a single parent
application that strings multiple front-end applications together.


## Con's

The child applications need to be aware of where they are mounted on the parent
application for the routing to correctly work.
