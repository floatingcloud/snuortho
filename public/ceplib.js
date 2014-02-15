function radianToAngle(radian){
  return radian*(180/Math.PI);
}

function lineDistance(point1, point2) {
    
    var xdif = point1.x - point2.x;
    var ydif = point1.y - point2.y;
    
    xdif = xdif * xdif;
    ydif = ydif * ydif;
    
    return Math.sqrt(xdif+ydif);
}



function pointLineDistance(linePoint1, linePoint2, point) {
    
    var xdif = linePoint2.x - linePoint1.x;
    var ydif = linePoint2.y - linePoint1.y;
    var lineLengthSquare = xdif*xdif + ydif*ydif;
    
    var u = ((point.x - linePoint1.x)*xdif + (point.y - linePoint1.y)*ydif)/lineLengthSquare;
    
    if( u >1){
        u=1; }
     
    else if(u<0){
        u=0;
           }
    
    var nx = linePoint1.x + u*xdif;
    var ny = linePoint1.y + u*ydif;
    
    var sx = nx - point.x;
    var sy = ny - point.y;
    
    return Math.sqrt(sx*sx + sy*sy);
        
}  

function pointLineDifference(linePoint1, linePoint2, point) {
    
    var xdif = linePoint2.x - linePoint1.x;
    var ydif = linePoint2.y - linePoint1.y;
    var lineLength = Math.sqrt(xdif*xdif + ydif*ydif);
    
    
    var u = (ydif*point.x) - (xdif*point.y);
    var e = linePoint1.y*linePoint2.x - linePoint1.x*linePoint2.y;

    return (u+e)/lineLength;
        
}

function pointLineXlocationDifference(linePoint1, linePoint2, point) {
    
    var xdif = linePoint1.x - linePoint2.x;
    var ydif = linePoint2.y - linePoint1.y;
    
    var e = linePoint1.y*linePoint2.x - linePoint1.x*linePoint2.y;
    var u = xdif*point.y + e;
    var k = u/ydif;


    return k+point.x;
        
}




//B is center 
function find_angle(A,B,C) {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));    
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2)); 
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    var radian = Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
    return radianToAngle(radian);
}

