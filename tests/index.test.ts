describe('index', () => {
  test('index.js has no error', () => {
    document.body.innerHTML = '<div id="root"></div>';
    require('../src/index');
  });
});
