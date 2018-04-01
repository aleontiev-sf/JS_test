const form = d3.select('form');

form.on('submit', () => {
  d3.event.preventDefault();
  console.log('My code runs!');

  const inputField = d3.select('#textbox');
  console.log(`The user entered: ${inputField.node().value}`);
  endpoint = '/send?textbox='.concat(inputField.node().value);
  d3.json(endpoint, function(error, response) { 
    if (error) return console.warn(error);
    console.log('response: ', response);
  })
})