
//
// Interfaces - equivalent to Protocols
//

interface Point2d {
    x: number;
    y: number;
}


function movePoint(point: Point2d, offset: Point2d): Point2d {
    return {
        x: point.x + offset.x,
        y: point.y + offset.y,
    }
}


// interfaces can be extended
interface Point3d extends Point2d {
    z: number;
}

let p: Point3d;


// TODO: interfaces can extend classes