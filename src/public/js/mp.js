let Checked = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('chk')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}