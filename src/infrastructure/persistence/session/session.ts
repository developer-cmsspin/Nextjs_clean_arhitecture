//https://medium.com/@majidkuhail/server-side-session-in-next-js-v13-app-router-2d55d15bafb1

import RedisStore from 'connect-redis';
import Redis from 'ioredis';
import nextAppSession, { promisifyStore } from 'next-app-session';

// Your session data type
type MySessionData = {
  access_token?: string;
  refresh_token?: string;
  counter?: number;
};

export const session = nextAppSession<MySessionData>({
  name: 'EXAMPLE_SID', // The cookie name that will hold sid
  secret: 'secret goes here', // Providing a secret will sign the SID before storing it in the cookie, providing extra security
  // Assign Redis store with connection details
  store: promisifyStore(
    new RedisStore({
      client: new Redis({
        // The redis instance connection details
        host: 'localhost',
        port: 6379
      }),
      prefix: 'exampleapp:' // having a prefix is optional but can be usefull if redis service is used by multiple applications
    })
  )
});
