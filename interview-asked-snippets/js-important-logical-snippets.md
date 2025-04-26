
```var num = 10;

function fun() {
    num = 100;
    return;
    function num() {}  // function declaration inside fun
}

fun();
console.log(num);
```
![alt text](image-1.png)




```
var num = 10;

function fun() {
    num = 100;
    function num() {
        return num;
    }
    console.log(num());  // Error: num is not a function
}

```
![alt text](image.png)



------------------------------------------------------------------------------------------------------------
```
var num = 10;

function fun() {
    num = 100;
    function num1() {
        return num;
    }
    
    console.log(num1()); 
}


  console.log(fun()); 

````

```
  // 100
  ```
  ```
  // undefined
  ```

