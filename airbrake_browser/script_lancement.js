import { Notifier } from '@airbrake/browser';

const airbrake = new Notifier({
  projectId: 413395,
  projectKey: '1f04822c4b952e201cbd5e9ea4102e25',
  environment: 'production',
});


let promise = airbrake.notify(`user id=${user_id} not found`);
promise.then((notice) => {
  if (notice.id) {
    console.log('notice id', notice.id);
  } else {
    console.log('notify failed', notice.error);
  }
});
// or
try {
    throw new Error('Hello from Airbrake!');
  } catch(err) {
    airbrake.notify(err);
  }
// Alternatively
let startApp = () => {
    throw new Error('Hello from Airbrake!');
  };
  startApp = airbrake.wrap(startApp);
  
  // Any exceptions thrown in startApp will be reported to Airbrake.
  startApp();
// Or - In alternatylely
