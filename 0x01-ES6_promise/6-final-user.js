import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)])
    .then((results) => {
      const result = [];
      results.forEach((element) => {
        element.status === 'fulfilled' ? result.push({ status: element.status, value: element.value }) : result.push({ status: element.status, value: element.reason });
      });
      return result;
    });
}
