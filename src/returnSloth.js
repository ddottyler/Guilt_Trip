import { arrayOfClassics, arrayOfRares } from "../src/svgLoader";

export function returnSloth(i) {
  if (i % 5 === 0) {
    let x = ((i / 5) % arrayOfRares.length) - 1;
    if (x < 0) {
      x = arrayOfRares.length - 1;
    }
    return arrayOfRares[x];
  } else {
    let x = ((i % 10) % arrayOfClassics.length) - 1;
    if (x < 0) {
      x = 0;
    }
    return arrayOfClassics[x];
  }
}
