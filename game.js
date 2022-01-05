mousedownevent = false;
points = [];
lines = [];
lastpressedindex = null;
mousedowneventhasbeenactivated = false;
counter = 0;
size = 20;
anglesbetweenpoints = [];
function update() {}
function draw() {
  if (!mousedownevent && mousedowneventhasbeenactivated) {
    counter++;
    if (counter > lastpressedindex) {
      counter = 0;
      size += 20;
    }
    points.push({
      x:
        points[counter].x -
        size * Math.cos(anglesbetweenpoints[counter] + Math.PI / 2),
      y:
        points[counter].y -
        size * Math.sin(anglesbetweenpoints[counter] + Math.PI / 2),
    });
    // lmaox = points[points.length - 1].x - 2 * Math.cos(anglebetweenpoints);
    //  lmaoy = points[points.length - 1].y - 2 * Math.sin(anglebetweenpoints);
    // if (!areColliding(lmaox, lmaoy, 40, 40, points[0].x, points[0].y, 40, 40)) {
    //   points.push({
    //     x: lmaox,
    //     y: lmaoy,
    //   });
    // }else{
    // }
  }
  context.fillStyle = "black";

  if (mousedownevent) {
    if (points.length > 1) {
      if (
        Math.sqrt(
          Math.pow(mouseX - points[points.length - 1].x, 2) +
            Math.pow(mouseY - points[points.length - 1].y, 2)
        ) > 20
      ) {
        //   if (
        //     mouseX != points[points.length - 1].x &&
        //     mouseY != points[points.length - 1].y
        //   ) {
        anglesbetweenpoints.push(
          Math.atan2(
            mouseY - points[points.length - 1].y,
            mouseX - points[points.length - 1].x
          )
        );
        points.push({ x: mouseX, y: mouseY });
      }
    } else {
      points.push({ x: mouseX, y: mouseY });
    }
  }
  for (i = 1; i < points.length; i++) {
    poqkanglebetweenpoints = Math.atan2(
      points[i - 1].y - points[i].y,
      points[i - 1].x - points[i].x
    );
    context.strokeStyle = "red  ";
    // drawLine(
    //   points[i - 1].x,
    //   points[i - 1].y,
    //   points[i - 1].x + 40 * Math.cos(poqkanglebetweenpoints + Math.PI / 2),
    //   points[i - 1].y + 40 * Math.sin(poqkanglebetweenpoints + Math.PI / 2)
    // );
    // context.fillRect(
    //   points[i - 1].x - 100 * Math.cos(poqkanglebetweenpoints),
    //   points[i - 1].y - 100 * Math.sin(poqkanglebetweenpoints),
    //   50,
    //   50
    // );
    context.lineWidth = 10;
    context.lineCap = "round";
    context.strokeStyle = "black  ";

    drawLine(points[i].x, points[i].y, points[i - 1].x, points[i - 1].y);
  }
  if (points.length > 2) {
    if (
      points[points.length - 1].x != points[points.length - 2].x &&
      points[points.length - 1].y != points[points.length - 2].y
    ) {
      anglebetweenpoints = Math.atan2(
        points[points.length - 2].y - points[points.length - 1].y,
        points[points.length - 2].x - points[points.length - 1].x
      );
    }
    if (typeof anglebetweenpoints != "undefined") {
      context.fillStyle = "red";

      context.fillText(anglebetweenpoints, 300, 300);
    }
  }
}
function mousedown() {
  mousedownevent = true;
  mousedowneventhasbeenactivated = true;
}
function mouseup() {
  mousedownevent = false;
  lastpressedindex = points.length - 1;
}
