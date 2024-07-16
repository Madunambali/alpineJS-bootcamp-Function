function transportFee(shift) {
  const fees = {
      morning: "R20",
      afternoon: "R10",
      night: "R30"
  };
  return fees[shift] || "Invalid shift";
}
