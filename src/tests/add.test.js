const add = (a, b) => a + b;
const generateGreeting = (name) => `hello ${name}!`;

test("add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Generate Greeting", () => {
  const result = generateGreeting("Tanmay");
  expect(result).toBe("hello Tanmay!");
});
