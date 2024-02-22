An isogram isa word that has no repeating letters, consecutive or non-consecutive. This function determines whether astring that contains only letters is an isogram.
In line 4, we are using 'new Set()' to create a new empty set. In JavaScript, a Set is a built-in object that lets you store unique values of any type. It can only contain distinct elements, and if you try to add a duplicate value, it will be ignored.
In line 7, we are using a conditional statement to check if the 'char' variable is a lowercase letter using a regular expression.
'/.../' --> This denotes the start and end of a regular expression literal in JavaScript.
'^' --> This asserts the start of the string.
'[a-z]' --> This is a character class that matches any lower case letter from 'a' to 'z'.
'$' --> This asserts the end of the string.
