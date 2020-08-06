function loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}

var newfile = loadjson("data.json");
newfile.then(data=>{
	console.log(data);
	// basic(data.details);
  basic1(data.details1);
});

var child2 = document.querySelector(".child2");

function basic1(det1){
	  var image16 = document.createElement("img");
	  image16.src = det1.image1;
	  child2.appendChild(image16);

	  var name16 = document.createElement("h4");
	  name16.textContent = det1.name1;
	  child2.appendChild(name16);

	  var number16 = document.createElement("h4");
	  number16.textContent = det1.number1;
	  child2.appendChild(number16);

}
