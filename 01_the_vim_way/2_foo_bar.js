var foo = 1
var bar = 'a'
var foobar = foo + bar

from the given example, we need to append a semicolon at the end of each line. $ command will handle the motion for us and then we can run a;

$: moving out cursor to the end of the line
a: appends after the current cursor position
if we do $a; then it will be...
var foo = 1;
var bar = 'a'
var foobar = foo + bar

We can use A for easier way. 
A: switch to Insert mode and move the cursor to the end of the line.
lets do...
A;<ESC>
j
.
j.

var foo = 1;
var bar = 'a';
var foobar = foo + bar;

By using A instead of $a, we give the dot command a boost.


