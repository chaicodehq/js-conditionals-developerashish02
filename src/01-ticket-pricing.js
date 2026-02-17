/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {
  // Your code here

  const weekendSurcharge = 3;
  const priceForChildren = 8;
  const priceForTeens = 12;
  const priceForAdults = 15;
  const priceForSeniors = 10;

  let price;

  if (age < 0 || typeof age != "number" || isNaN(age)) {
    return -1;
  }

  if (age <= 12) {
    price = priceForChildren;
  }

  else if (age <= 17) {
    price = priceForTeens;
  }

  else if (age <= 59) {
    price = priceForAdults;
  }

  else {
    price = priceForSeniors;
  }

  if (isWeekend) {
    price = price + weekendSurcharge;
  }

  return price;
}
