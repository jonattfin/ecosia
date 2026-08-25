import {seedDb} from "@/app/api/mocks/seed-db";

export const initializeMocks = () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const {server} = require('./server');
    server.listen();
  }
  seedDb();
}
