/**
 * Validate email using a regex
 * @param {String} email
 * @returns Boolean
 */
export function validateEmail(email) {
  const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexMail.test(String(email).toLowerCase());
}

/**
 * Check if age > 18
 * @param {Date} dateOfBirth
 * @returns Age
 */
export function validateAge(dateOfBirth) {
  // [1] new Date(dateString)
  const birthday = new Date(dateOfBirth); // transform birthday in date-object

  /**
   * Calculate age from a date (date object)
   * @param {Date} birthday
   * @returns Age of the user
   */
  function calculateAge(birthday) {
    // diff = number of ms since 1970 (to now) - number of ms since 1970 (to birthday)
    // diff = age in ms
    const diff = Date.now() - birthday.getTime();

    // [2] new Date(value); -> value = date based on ms since 1970
    // = do as if the person was born in 1970
    // so calculate the date of birth based on the age in ms with 1970 as start ref
    const ageDate = new Date(diff);

    // Give the year based on the complete date of birth (ageDate)
    const yearOfBirth = ageDate.getUTCFullYear();

    // age = year of birth (calculated from 1970) - 1970. Ex : age = 1989 - 1970 = 19
    // return absolute value
    let age;
    return (age = Math.abs(yearOfBirth - 1970));
  }
  // console.log(calculateAge(birthday))
  return calculateAge(birthday);
}
