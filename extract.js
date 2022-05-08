module.exports.extract = function(window) {

  // Create JSON object
  const data = {};
  // Array of strings (form titles)
  const formTitle = ['Amazon commerce fields', 'RFC3106 ECLM eCommerce fields'];
  let arrElements = [];
  let objKeys = [];
  let objValues = [];

  
  // Find the form tag within the html document 
  const forms = window.document.getElementsByTagName('form');

  // Functino that finds the form that includes one/both of the form titles
  const findForm = forms => {
    let count = 0;
    while (count < forms.length + 1) {
      let formInnerHtml = forms[count].innerHTML;
      if (formInnerHtml.includes(formTitle[0] || formTitle[1])) {
        return arrElements.push(forms[count].elements);
      } else {
        count += 1
      }
    }
  }

  findForm(forms)

  // Iterate through array of form elements and extract form attribute name and 'td' values
  for (let i = 0; i < arrElements[0].length; i++) {
    objKeys.push(objKey = arrElements[0].item(i).name);
    objValues.push(objValue = arrElements[0].item(i).parentNode.previousSibling.innerHTML.trim());
  }

  console.log('objKeys: ' + objKeys)
  console.log('objValues: ' + objValues)
  
}
