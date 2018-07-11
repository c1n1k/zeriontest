const division = (a, b) => {
  const TAILLENGTH = 2;

  // const d = String(a / b).split(".");
  const d = String((a / b).toFixed(2)).split(".");
  console.log(d);

  if (!d[1]) {
    return "$" + d[0];
  } else {
    const dTail = d[1];
    let tail = "";

    for (let i = TAILLENGTH - 1; i >= 0; i--) {
      dTail[i] === undefined || (dTail[i] === "0" && tail.length == 0)
        ? ""
        : (tail += dTail[i]);
    }

    tail = tail
      .split("")
      .reverse()
      .join("");

    return tail !== "" ? "$" + d[0] + "." + tail : "$" + d[0];
  }
};

console.log(division(1, 2));
