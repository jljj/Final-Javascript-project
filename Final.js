var a = [];
var b = [];
var c = [];
var d = [];
var e = [];
var f = [];
var g = [];
var h = [];
var re =0;

var totalItems = 0;



function monday() {
    // if the array is less than 10, add item
    // else don't do anything
    if (length){}
    // adds the thing on the list
    document.querySelector(".one-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function tuesday() {
   // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".two-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }
// -------------------------------------------------------------------------------------------------------------------------------

function wednesday() {
    // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".three-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function thursday() {
   // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".four-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function friday() {
    // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".five-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function saturday() {
   // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".six-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function sunday() {
   // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".seven-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function emergency() {
    // if the array is less than 10, add item
    // else don't do anything

    // adds the thing on the list
    document.querySelector(".eight-display").innerHTML += '<div class="list-item" onclick="remove(this)">' + document.querySelector(".word").value + '</div>';
    // adds 1 to the total items variable
    totalItems = totalItems + 1;
    // displays the total items
    document.querySelector(".items-display").innerHTML = totalItems; 
  }

    function remove(element) {
        element.remove();
        totalItems= totalItems - 1;
        document.querySelector(".items-display").innerHTML = totalItems; 
  }

// -------------------------------------------------------------------------------------------------------------------------------
function reset(){
    // document.querySelector(".one-display",".two-display",".three-display",".four-display",".five-display",".six-display",".seven-display",".eight-display").innerHTML = a,b,c,d,e,f,g,h="  ";
    // 1. reset the arrays to empty
    // 2. display the arrays
    a = [];
    b = [];
    c = [];
    d = [];
    e = [];
    f = [];
    g = [];
    h = [];
    i = 0;
    document.querySelector(".one-display").innerHTML = a;
    document.querySelector(".two-display").innerHTML = b;
    document.querySelector(".three-display").innerHTML = c;
    document.querySelector(".four-display").innerHTML = d;
    document.querySelector(".five-display").innerHTML = e;
    document.querySelector(".six-display").innerHTML = f;
    document.querySelector(".seven-display").innerHTML = g;
    document.querySelector(".eight-display").innerHTML = h;
    document.querySelector(".items-display").innerHTML = a.length+b.length+c.length+d.length+e.length+f.length+g.length+h.length;  
  
    document.querySelector(".word").value = '';
    };
