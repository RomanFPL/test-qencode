import "@testing-library/jest-dom";

test('should return "detail": "OK" from the healthcheck API', async () => {
  const response = await fetch("https://auth-qa.qencode.com/healthcheck");
  const data = await response.json();

  expect(data.detail).toBe("OK");
});
