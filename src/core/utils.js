export const emailValidator = email => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const phoneValidator = name => {
  if (isNaN(name) || name.length != 10) return 'Mobile Number should be 10 digit.';

  return '';
};

export const numValidator = name => {
  if (!name || name.length <= 0) return 'field cannot be empty.';
  return '';
};
