
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!matrix){
        return [];
    }
    
    let res = matrix.map((el,i)=> {
        if(i%2 !==0){
            el = el.sort((a,b)=> b-a);
        }
        return el;
    });
    console.log('Console'+res+typeof res);
    res = res.flat(Infinity);
    return res;
  
}
