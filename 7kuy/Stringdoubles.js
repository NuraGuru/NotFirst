//DESCRIPTION:
// In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other
//SOLUTION:
function doubles(s) {
    const cs = [];
    for (const c of s) {
        if (cs.length != 0 && cs[cs.length - 1] == c)
            cs.pop();
        else
            cs.push(c);
    }
    return cs.join('');
}