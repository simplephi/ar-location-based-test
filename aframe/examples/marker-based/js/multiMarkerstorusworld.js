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
						var spiral = document.createElement('a-entity');
						var textEl = document.createElement('a-entity');
						var textEl1 = document.createElement('a-entity');
						var textEl2 = document.createElement('a-entity');

						// OBJ model

						// Spiral
						// textEl.setAttribute('gltf-model','#monster');
						// spiral.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// spiral.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						spiral.setAttribute('obj-model', {
							obj: '#spiral-obj',
							mtl: '#spiral-mtl'
						});
						spiral.object3D.position.set(0, 0, 0);
						spiral.object3D.scale.set(0.08, 0.08, 0.08);
						spiral.object3D.rotation.set(0, 0, 0);
						spiral.emit('rotate');

						spiral.addEventListener('loaded', () => {
							window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
						});

						markerEl.appendChild(spiral);


						// Torus 1
						// textEl.setAttribute('gltf-model','#monster');
						// textEl.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// textEl.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						textEl.setAttribute('obj-model', {
							obj: '#torus_gold_oldest-obj',
							mtl: '#torus_gold_oldest-mtl'
						});
						textEl.setAttribute('obj-model', {
							obj: '#sphere_gold_oldest-obj',
							mtl: '#sphere_gold_oldest-mtl'
						});

						textEl.object3D.position.set(0, 0, 0);
						textEl.object3D.scale.set(0.05, 0.05, 0.05);
						textEl.object3D.rotation.set(0, 0, 0);

						textEl.addEventListener('loaded', () => {
							window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
						});

						markerEl.appendChild(textEl);


						// Torus 2
						// textEl1.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// textEl1.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						textEl1.setAttribute('obj-model', {
							obj: '#torus-obj',
							mtl: '#gold-mtl'
						});
						textEl1.setAttribute('obj-model', {
							obj: '#sphere_gold-obj',
							mtl: '#sphere_gold-mtl'
						});
						textEl1.object3D.position.set(0, 0, 0);
						textEl1.object3D.scale.set(0.1, 0.1, 0.1);
						textEl1.object3D.rotation.set(0, 0, 0);

						textEl1.addEventListener('loaded', () => {
							window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
						});

						markerEl.appendChild(textEl1);



						// Torus 3
						// textEl2.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// textEl2.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						textEl2.setAttribute('obj-model', {
							obj: '#torus_gold_older-obj',
							mtl: '#torus_gold_older-mtl'
						});
						textEl2.setAttribute('obj-model', {
							obj: '#sphere_gold_older-obj',
							mtl: '#sphere_gold_older-mtl'
						});
						textEl2.object3D.position.set(0, 0, 0);
						textEl2.object3D.scale.set(0.2, 0.2, 0.2);
						textEl2.object3D.rotation.set(0, 0, 0);


						textEl2.addEventListener('loaded', () => {
							window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
						});
						markerEl.appendChild(textEl2);


						console.log('Model component registered successfully!' , ` latitude: ${lat}; longitude: ${long}`);
						console.log(markerEl);
				}
						// console.log('Model component registered successfully!' , ` latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);


	}

});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;


						console.log('Marker Found: ', markerId);


            var cameraEl = document.querySelector('#camera');
            var worldPos = new THREE.Vector3();
            worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
            console.log(worldPos.x);



			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
