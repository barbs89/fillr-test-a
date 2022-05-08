module.exports.extract = function(window) {

  // Create JSON object
  const data = {};
  // Array of strings (form titles)
  const formTitle = ['Amazon commerce fields', 'RFC3106 ECLM eCommerce fields'];
  let arrayElements = [];
  
  // Find the form tag within the html document 
  const forms = window.document.getElementsByTagName('form');

  // Functino that finds the form that includes one/both of the form titles
  const findForm = forms => {
    let count = 0;
    while (count < forms.length + 1) {
      let formInnerHtml = forms[count].innerHTML;
      if (formInnerHtml.includes(formTitle[0] || formTitle[1])) {
        return arrayElements.push(forms[count].elements);
      } else {
        count += 1
      }
    }
  }
  
  findForm(forms)

  console.log('arrayElements: ' + arrayElements);

  
}
