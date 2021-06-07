const notExisting = 0;
const equilateral = 1;
const isosceles = 2;
const scalene = 3;

/**
 * Function that checks triangle possibility.
 * @param {Number} aLength Length of triangle A side.
 * @param {Number} bLength Length of triangle B side.
 * @param {Number} cLength Length of triangle C side.
 * @return {Boolean} Tringle is possible = True, otherwise = False.
 */
function isTrianglePossible(aLength, bLength, cLength){
    var result = true;
    
    if ((aLength + bLength <= cLength)
    || (aLength + cLength <= bLength)
    || (bLength + cLength <= aLength)) {
        result = false;
    }
    
    return result;
}

/** 
 * Function that defines tiangle type.
 * @param {Number} aLength Length of triangle A side.
 * @param {Number} bLength Length of triangle B side.
 * @param {Number} cLength Length of triangle C side.
 * @return {Number} Type of triangle in number way.
*/
function getTriangleType(aLength, bLength, cLength){
    var type = notExisting;

    if (!isTrianglePossible(aLength, bLength, cLength)){
        type = notExisting;
    }
    else if (aLength === bLength && bLength === cLength){
        type = equilateral;
    }
    else if (aLength === bLength || aLength === cLength || bLength === cLength){
        type = isosceles;
    }
    else{
        type = scalene;
    }
    
    return type;
}

/** 
 * Function that writes triangle type information on canvas.
 * @param {Number} type Type of triangle in number way.
 * @param {HTMLElement} canvas Canvas element to put text on.
*/
function triangleTypeOutput(type, canvas) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "15px Arial";
    ctx.fillStyle = "black";
    var text;
    var lineheight = 15;
    
    switch (type) {
        case notExisting:
            text = "Is not possible to calculate\nthis kind of triangle";
            break;
        case equilateral:
            text = "Equilateral triangle";
            break;
        case isosceles:
            text = "sosceles triangle";
            break;
        case scalene:
            text = "Scalene triangle";
            break;
    }

    var lines = text.split('\n');

    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], canvas.width/4, canvas.height/1.2 + (i * lineheight));
    }
}

/**
 * Function that outputs triangle image and type on canvas.
 * @param {Number} aLength Length of triangle A side.
 * @param {Number} bLength Length of triangle B side.
 * @param {Number} cLength Length of triangle C side.
 * @param {HTMLElement} canvas Canvas element to put image and text on.
 */
function resultOutput(aLength, bLength, cLength, canvas){
    var type = getTriangleType(aLength, bLength, cLength);
    triangleTypeOutput(type, canvas);

    if ( isTrianglePossible(aLength, bLength, cLength)) {
        drawTriangle(aLength, bLength, cLength, canvas);
    }
}

/**
 * Function that draws triangle image on canvas. 
 * @param {Number} aLength Length of triangle A side.
 * @param {Number} bLength Length of triangle B side.
 * @param {Number} cLength Length of triangle C side.
 * @param {HTMLElement} canvas Canvas element to put image on.
 */
function drawTriangle(aLength, bLength, cLength, canvas) {
    var Ax = 0;
    var Ay = 0;
    var Cy = 0;
    var By = 0;
    var Cx = bLength;
    var Bx = ((Math.pow(aLength, 2)) + (Math.pow(Cx,2)) - (Math.pow(cLength, 2)))  / (2 * Cx);

    var perimeter = (aLength + bLength + cLength) / 2;
    var area = Math.sqrt(perimeter * (perimeter - aLength) * (perimeter - bLength) * (perimeter - cLength));
    var height = (2 * area) / bLength;
    var coefficient = height >= bLength ? (canvas.height / 2) / height : (canvas.width / 3) / bLength;

    Cx = Cx * coefficient;
    Bx = Bx * coefficient;
    By = height * coefficient;

    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(Bx + (canvas.width - Cx) / 2, canvas.height * 0.7 - By);
    ctx.lineTo(Ax + (canvas.width - Cx) / 2, canvas.height * 0.7 - Ay);
    ctx.lineTo(Cx + (canvas.width - Cx) / 2, canvas.height * 0.7 - Cy);
    ctx.lineTo(Bx + (canvas.width - Cx) / 2, canvas.height * 0.7 - By);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();

}

// Uncomment to run Unit tests. 
//module.exports = { getTriangleType };