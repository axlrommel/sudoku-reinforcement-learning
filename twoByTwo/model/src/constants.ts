import Redis from "ioredis";

export const redis = new Redis({
  port: 6379,
  host: "127.0.0.1",
  db: 1,
  maxRetriesPerRequest: 0,
  lazyConnect: true,
  reconnectOnError: function () {
    return false;
  },
});