
function largestForwardDiagonal(M) {
    let result = 0;
    let n = M.length;
    let m = M[0].length;
    for (let row = 0; row < n; row++) {
        let sum = 0;
        let r = row, c = 0;
        while (r < n && c < m) {
            sum += M[r][c];
            r++;
            c++;
        }
        result = Math.max(result, sum);
    }

    for (let col = 1; col < m; col++) {  
        let sum = 0;
        let r = 0, c = col;
        while (r < n && c < m) {
            sum += M[r][c];
            r++;
            c++;
        }
        result = Math.max(result, sum);
    }
    return result;
}

let mat = [[2,9,3,5], [2,5,4,0], [5,2,8,5]]

let ans = largestForwardDiagonal(mat);
console.log(ans)