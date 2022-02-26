const setSize = (item, orderTotal) => {
  console.log(item + ` size added`);

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
  console.log(`Total: $` + orderTotal);
  return orderTotal;
};

module.exports = setSize;
