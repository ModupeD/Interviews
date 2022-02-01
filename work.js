let a = [1,3,5,6,4,2]

function solution(a){
let b = []
while (a.length > 0) {
    b.push(a.shift())
    if (a.length > 0) { 
        b.push(a.pop())
        }
}


console.log(b)
}

solution(a)