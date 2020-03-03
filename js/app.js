let Circles = function (radius) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * radius ** 2;
    }
    this.getRadius = function () {
        return radius;
    }
}
let circles = new Circles(5);
alert( "bán kính =" + circles.radius);
alert( "diện tích hình tròn  =" + circles.getArea());
alert( "radius =" + circles.getRadius());