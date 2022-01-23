// There are many ways to pick a DOM node; here we get the form itself and the dni
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const dni = document.getElementById('idni');
const dniError = document.querySelector('#dni + span.error');
const gobiernoletras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
const tablaSustitucionNIE = {'X':0, 'Y':1, 'Z':2};
dni.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (dni.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    dniError.textContent = ''; // Reset the content of the message
    dniError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the dni field is valid, we let the form submit

  if(!dni.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(dni.validity.valueMissing) {
    dniError.textContent = 'You need to enter an identification-id';
  } else if(dni.validity.typeMismatch) {
    dniError.textContent = 'Entered value needs to be an identification-id';
  } else if(dni.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    dniError.textContent = `dni should be at least ${ dni.minLength } characters; you entered ${ dni.value.length }.`;
  } else if (dni.validity.patterMismatch) {
    dniError.textContent = 'error en formato';
  }
  else {
    dniError.textContent = `La letra debe ser ${calculaultletra(dni.value)}`; 
  }

  // Set the styling appropriately
  dniError.className = 'error active';
}
function calculaultletra(numero) {
   
   return gobiernoletras[numero.replace(numero.substring(0,1),tablaSustitucionNIE[numero.substring(0,1).toUpperCase]).map(number).reduce(function (a, b) {
        return a + b;
    }, 0)%23];
}