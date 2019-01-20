var root=document.getElementById('root')
root.innerHTML="coucou";
var ul=document.createElement('ul');
root.appendChild(ul);
var liste=['google','facebook','amazon','apple','microsoft'];
for (var i in liste){
	var li=document.createElement('li');
	ul.appendChild(li);
	li.innerHTML=liste[i];
}
var p=document.createElement('p');
root.appendChild(p);
function pop(){
	var prenom=prompt('Quel utilisateur est tu ?');
	
	p.innerHTML="Bonjour je m'appelle "+prenom+" ! ";
}