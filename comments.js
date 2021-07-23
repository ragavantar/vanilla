const container = document.getElementById('root');

let comments = [{
    id: "001",
    text: "level 1",
    replies: [
        {
            id: "0011",
            text: "level 2 child 1",
            replies: [
                {
                    id: "00111",
                    text: "level 3 - level 2 of child 1"
                }
            ]
        },
        {
            id: "0012",
            text: "level 2 child 2"
        }
    ]
}]

container.dataset.comments = comments[0];
container.onclick = (e => console.log(e, container.dataset))

displayComments = (root, val, level, path) => {
    let ele = document.createElement('div');
    ele.style.marginLeft = level * 20;
    ele.innerHTML = `
    <p>${path} - ${val.text}</p>
    `
    root.appendChild(ele);

    // check replies
    val.replies &&
        val.replies.forEach(
            (reply, index) => displayComments(ele, reply, level + 1, path + '.' + index)
        )
}

displayComments(container, comments[0], 0, 'cmt.1');

getCommentById = (arr, targetId) => {
    const comment = arr.find(({ id }) => id === targetId);
    if (comment) return comment;
    for (let comments of arr) {
        if (comments.replies) {
            let comm = getCommentById(comments.replies, targetId);
            if (comm) return comm;
        }
    }

    return undefined;
}

let a = getCommentById(comments, '0012');
a.text = "modified";
displayComments(container, comments[0], 0, 'cmt.1');

console.log(comments)

console.log('---', product(11222))

function product(n, sum) {
  let s = ''+n;
  let p = 1;
//   let sum = 0;
  [...s].forEach(v => p*=parseInt(v));
  [...s].forEach(v => sum+=parseInt(v));
//  return [sum, p];
// if(p >= sum) console.log(p, sum);
  return  [p >= sum, p];
}

let k = 4, ones=0, num=2, n, limit;
while( k < 7){
    k++;
    min = 999999;
    n = 0;
    limit = Math.pow(10, k)
    while(num < limit){
        let [cond, val] = product(num, ones);
        if(cond && val<min) {
            min = val;
            n = num;
        }
        num++;
    }
    let a = n.toString().split(1);
    val = parseInt(a.pop());
    ones = a.length;
    console.log(k, n, ones, new Array(ones).fill(1).join('')+val)
}
