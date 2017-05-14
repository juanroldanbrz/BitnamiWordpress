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
6. Run Wordpress application