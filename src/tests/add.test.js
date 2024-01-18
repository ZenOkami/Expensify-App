const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello, ${name}! Today's lucky number is ${add(100, 4819)}!`

test('Should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7); 
});

test('Should greet with proper name and number', () => {
    const result = generateGreeting('MattPat')
    expect(result).toBe("Hello, MattPat! Today's lucky number is 4919!");
});

test('Should generate Greeting with no name', () => {
    const result = generateGreeting();
    expect(result).toBe("Hello, Anonymous! Today's lucky number is 4919!")
});

const generateBio = (name, age) => `${name} is ${age} year${age > 1 ? "s" : ""} old!`;

test('Should generate proper bio', () => {
    const result = generateBio('MattPat', 35);
    expect(result).toBe("MattPat is 35 years old!")
})