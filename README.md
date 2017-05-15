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
$ cd src/main/resources/static/public/app
$ ng build
```
6. Run Spring boot application