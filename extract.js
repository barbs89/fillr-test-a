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

  // Working key value that matches README instructions eg: "Ecom_ShipTo_Postal_Name_Prefix":"ship to title"
  // objKeys.forEach((element, index) => {
  //   data[element] = objValues[index];
  // });

  // Working key value that passes TESTS
  // Iterate objValues with forEach method to push key value pair to object
  objValues.forEach((element, index) => {
    data[element] = objValues[index] + " " + objKeys[index];
  });

  // stringify JSON to copy and paste data to mapping.json
  console.log(JSON.stringify(data));

  return data
  
}
