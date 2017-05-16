## REQUIREMENTS
1. NPM And angular-cli `https://cli.angular.io/`

2. Install bower (Will be deprecated by NPM soon)

```
$ npm install -g bower
```
3. Java 1.8

4. MySQL

## HOW TO RUN

1. Install MySQL

2. Create database `bitwordpress`

3. Create user `bitnami`:`bitnami`

4. Build bower

``` 
$ cd src/main/resources/static/public
$ bower install
```
5. Release the frontend (Angular 4)

``` 
$ cd app
$ npm install
$ ng build
```
6. Run from command line
```
$ mvn spring-boot:run
```

## HOW TO USE

1. Register a new user with your AWSClientId and SecretID.

2. Now you can launch an instance and check the status

## KNOWN BUGS

1. There is a bug when the server is shutdown and needs to valida an user.
It doesn't featch it well and I think it is related:
    1. With the Hashing algorithm BCrypt configuration
    2. With the length of the column of the key
    3. With the Spring security auth provider
    
2. There can be inconsistent between the "intance" in the db and the real aws instance.
This can be a problem for example if we terminate the bitnami AMI outside the application.
Anyway, I have tried to reduce the scope of this issue as much as possible.

## TODO

1. Create more testing cases (we need to cover at least all the providers and services).

2. Move to a full one-page-app, providing custom authentication.

3. Deprecate bower.json

4. Fetch the instance configuration from bitnami
