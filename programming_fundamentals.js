
//Section 1: Programming Fundamentals ----------------------------

//DRY 
//An acronym, Don't Repeat Yourself, encouraging programming brevity.
//KISS
//Another acronym, Keep it Simple Stupid, also focusing on programming brevity. 
//Avoid creating a YAGNI
//Another acronym, You aren't going to need it, which encourages limiting functionality unless until it is needed. 
//Do the simplest thing that could possibly work
//Like KISS and YAGNI, it encourages promgramming brevity (I'll note brevity often means clever ideas, which isn't always an easy task).
//Don't make me think
//A recommendation to maintain readable code.
//Write code for the maintainer
//A recommendation to avoid the assumption that becuase you wrote the code, you'll automatically remember and understand it. 
//Single responsibility principle
//A recommendation to create "well defined" components intended for one purpose.
//Avoid premature optimization
//A recommendation to avoid making perfection the enemy of the good. Stay focused on achieving the primary goal of "working" code.
//Separation of concerns
//A recommendation to use easily recognized and mostly separate code areas for different functionality. 

//Which ones suprised you?
//I don't really think any of these surprised me. They all made sense. They all were logical.

//Which one is currently giving you the most struggle?
//KISS and Do the simplest thing that could possibly work aren't easy lifts. They often require clevering coding, something which doesn't always come naturally to me.

const f = l => { // creates a function called f with the parameter l 
    let es = 0, p = 0, c = 1, n = 0 // creates the variables es, p, c and n; it assigns es, p and n the value 0 and c the value 1
    while (c <= l) { //creates a while loop that runs while c is less than or equal to l
      n = c + p; // the first line of code block within the while loop; states n is equal to c plus p, or n is equal to 1
      [c, p] = [n, c] //[1, 0] = [1, 1] assigns the values of n and c
      es += (c % 2 === 0) ? c : 0 // assigns es the balue of c under the condition c goes into 2 equally 
    } //closing bracket of the while loop
    return es // return the value of es
  } //closing bracket of the function 
  
  console.log(f(55)) // calls the function, f, passing in the argument 55; within a console.log

  //A function should be descriptive and provide the maintainer an explanation of the functions purpose; so, determineNumber is a camelcase, descriptive alternative
  //f2
  // Yes; removing the semicolon triggers an error message