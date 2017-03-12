// Consider setting the mock api delay based on whether we are developing (1000) or testing (0).
export default process.env.NODE_ENV == 'test' ? 0 : 1000;
