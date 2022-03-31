//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){

		var sceneEl = document.querySelector('a-scene');

		//list of the markers
		for(var i=1; i<14; i++)
		{
			var url="../assets/markers-new/pattern-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
		}



		if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

				console.log("before: ", position);

				for(var k=0; k<13; k++)
				{
					var markerEl = document.createElement('a-marker');
					// var markerEl = document.createElement('a-marker-camera');
					markerEl.setAttribute('type','pattern');
					markerEl.setAttribute('url',markersURLArray[k]);
					markerEl.setAttribute('id',markersNameArray[k]);

					markerEl.setAttribute('registerevents','');
					sceneEl.appendChild(markerEl);


					//Adding element
					var textEl = document.createElement('a-entity');
					var textEl1 = document.createElement('a-entity');
					var textEl2 = document.createElement('a-entity');

					// obj model
					// 1
					// textEl.setAttribute('gltf-model','#monster');
					textEl.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude - 0.001}; longitude: ${position.coords.longitude +0.001}`);
					textEl.setAttribute('obj-model', {
					  obj: '#torus-obj',
					  mtl: '#gold-mtl'
					});
					textEl.object3D.position.set(0, 0, 0);
					textEl.object3D.scale.set(0.05, 0.05, 0.05);
					textEl.object3D.rotation.set(0, 0, 0);

					markerEl.appendChild(textEl);

					// 2
					textEl1.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude - 0.001}; longitude: ${position.coords.longitude +0.001}`);
					textEl1.setAttribute('obj-model', {
					  obj: '#torus_gold_older-obj',
					  mtl: '#torus_gold_older-mtl'
					});
					textEl1.object3D.position.set(0, 0, 0);
					textEl1.object3D.scale.set(0.1, 0.1, 0.1);
					textEl1.object3D.rotation.set(0, 0, 0);

					markerEl.appendChild(textEl1);

					// 3
					textEl2.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude - 0.001}; longitude: ${position.coords.longitude +0.001}`);
					textEl2.setAttribute('obj-model', {
						obj: '#torus_gold_oldest-obj',
						mtl: '#torus_gold_oldest-mtl'
					});
					textEl2.object3D.position.set(0, 0, 0);
					textEl2.object3D.scale.set(0.2, 0.2, 0.2);
					textEl2.object3D.rotation.set(0, 0, 0);

					markerEl.appendChild(textEl2);



					console.log('Model component registered successfully!' , ` latitude: ${position.coords.latitude - 0.001}; longitude: ${position.coords.longitude +0.001}`);
					console.log(markerEl);
				}
			});
    }
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;

				console.log('Marker Found: ', markerId);

			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
