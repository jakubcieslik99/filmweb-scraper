(async () => {
  console.log('Hello World!');
})().catch(error => {
  console.error(`[ERROR] ${error.message || error}`);
  process.exit(1);
});
