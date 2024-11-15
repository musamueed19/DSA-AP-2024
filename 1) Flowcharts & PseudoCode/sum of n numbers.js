
// (Problem) -
// Sum: of numbers from 1 to (n)


// using Mathematics:
// ∑ = n(n + 1)
//     _______
//        2


// e.g,

// n = 5

// Local variables, initial State - i = 0, sum = 0
// FlowChart - Start -> Input n -> Decision (if i <= n)     ->  sum = sum + i -> i = i + 1  ->
//                               ↑                           ↓                               ↓
//                               ↑                          Exit                             ↓
//                               <------------------------------------------------------------


/*
 Pseudo code - (Fake Code)

1) input n
2) sum = 0
3) loop i = 0; i <= n; i++
    sum = sum + i
4)  print sum
5) end
 */

let n = 5

function sumToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++)
        sum += i;
    console.log(sum);
}


sumToN(n);