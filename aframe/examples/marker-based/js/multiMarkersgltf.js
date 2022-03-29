//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){

		var sceneEl = document.querySelector('a-scene');

		//list of the markers
		for(var i=1; i<14; i++)
		{
			var url="../assets/markers/pattern-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
		}

		for(var k=0; k<13; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var textEl = document.createElement('a-entity');

			textEl.setAttribute('id','text');
			// textEl.setAttribute('text',{color: 'red', align: 'center', value:markersNameArray[k], width: '5.5'});

			// gltf model

			textEl.setAttribute('gltf-model', '#monster');
			textEl.object3D.position.set(0, 0, 0);
			textEl.object3D.scale.set(0.2, 0.2, 0.2);
			textEl.object3D.rotation.set(0, 0, 0);
			textEl.setAttribute('animation-mixer');


			console.log('Model component registered successfully 1!');
			markerEl.appendChild(textEl);
			console.log('Model component registered successfully 2!');
			console.log(markerEl);
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
