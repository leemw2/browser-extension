alert('Hello! You are now kitty. Meow meow meow! :)');

function replaceText(element) {
    if (element.hasChildNodes()) {
      element.childNodes.forEach(replaceText);
    } else if (element.nodeType === Text.TEXT_NODE) {
       element.textContent = element.textContent.replace(/the/gi, 'meow');
       element.textContent = element.textContent.replace(/and/gi, 'meow');
       element.textContent = element.textContent.replace(/too/gi, 'meow');
       element.textContent = element.textContent.replace(/to/gi, 'meow');
       element.textContent = element.textContent.replace(/it/gi, 'meow');
       element.textContent = element.textContent.replace(/y/gi, 'meow');
       element.textContent = element.textContent.replace(/e/gi, 'meow');
    }
  }
  
  replaceText(document.body);

  
