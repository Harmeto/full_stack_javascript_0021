const button = document.getElementById('getCodeButton');
const checkBox = document.getElementById('termsCheckbox');
const toast = new bootstrap.Toast(document.querySelector('.toast'));

button.addEventListener('click', function(event) {
  event.preventDefault();
  if (!document.getElementById('termsCheckbox').checked) {
  
    toast.show();
  } 
});


checkBox.addEventListener('change', function(){
    if (this.checked) {
        button.href = "#code-2"
        toast.hide();
    } else{
        button.href = ""
    }
});
