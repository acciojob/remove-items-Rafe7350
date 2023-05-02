//your JS code here. If required.
// const element=document.getElementById("colorSelect");
// colorSelect.eventListner("click" function() {
	
// })
function removeColor() {
  const selectElement = document.getElementById("colorSelect");
  const selectedOption = selectElement.options[selectElement.selectedIndex];

  if (selectedOption) {
    selectElement.removeChild(selectedOption);
  }
}

const removeButton = document.querySelector('input[type="button"]');
removeButton.addEventListener('click', removeColor);
		
