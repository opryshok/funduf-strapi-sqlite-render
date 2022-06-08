module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/data/public"
  },
  url: env('PUBLIC_URL', 'https://funduf.opryshok.com'),
});
