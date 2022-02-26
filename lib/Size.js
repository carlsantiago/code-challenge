const setSize = (item, orderTotal) => {
  console.log(`Size: ` + item);

  switch (item) {
    case "Standard":
      orderTotal = orderTotal;
      break;
    case "Child":
      orderTotal = orderTotal * 0.75;
      break;
    case "Large":
      orderTotal = orderTotal * 1.5;
      break;
    case "Addict":
      orderTotal = orderTotal * 2;
      break;
  }
  console.log(orderTotal + ` for ` + item + ` size`);
  return orderTotal;
};

module.exports = setSize;
