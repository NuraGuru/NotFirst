/*DESCRIPTION:
Task
Some people are standing in a row in a park. There are trees between them which cannot be moved.

Your task is to rearrange the people by their heights in a non-descending order without moving the trees.*/
// SOLUTION:
const sortByHeight = a =>
    (arr => a.map(val => ~val ? arr.shift() : -1))
    (a.filter(val => ~val).sort((a, b) => a - b));