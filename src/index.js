import $ from 'jquery'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello OH!"
  
    return element;
  }
  
  document.body.appendChild(component());

  $(document).append('<p>jQuery loaded!</p>')