/*

Problem:
    Let 'n' be a any non-negative integer.

Output: Square Pattern (
                       1 2 3 4
                       1 2 3 4
                       1 2 3 4
                       1 2 3 4
                               ), for n = 4

Logic Building:

1) For, 'n' number, there must be 'n' lines
    The Outer Loop, must runs only for 'n' times. (Outer Loop, variable -> i)

2) Inner Loop: represents the logic between each or single row (each single line).
    Inner loop print numbers from 1 -> n. (Inner Loop, variable -> j)
    Hence, our problem states that, our pattern will print n lines (outer loop logic), while print numbers from 1 -> n at each line (inner loop logic).


Pseudo Code:
1) input 'n'
2) loop (i = 0, i < n, i++)
3)   loop (j = 1, j <= n, j++)
4)     print(j);
5)     print(" ");
6)   print("\n");
7) end

*/


let n = 10;
let line = ""

function squarePattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++)
            line += j + " "
        console.log(line);
        line = ""
    }
}

squarePattern(n);