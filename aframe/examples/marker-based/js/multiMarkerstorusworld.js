//Global Variable
var markersURLArray=[];
var markersNameArray=[];
var lat = '';
var long = '';


// window.onload = () => {
//
// 	if (navigator.geolocation) {
// 			navigator.geolocation.getCurrentPosition(function(position) {
//
// 			const newCoordinates = JSON.stringify({
// 				lat: position.coords.latitude,
// 				lng: position.coords.longitude
// 			});
// 			// console.log('stringified coordinates', newCoordinates);
// 			localStorage.setItem('coords', newCoordinates);
//
// 			}, error, optionsOldcoord);
//
// 		}
// 		else {
// 			console.log("Geolocation is not supported by this browser.");
// 		}
//
// 		const oldCoords = JSON.parse(localStorage.getItem('coords'));
//
// 		if (oldCoords) {
// 		  // showCoords(JSON.parse(oldCoords));
// 		  lat = oldCoords.lat;
// 		  long = oldCoords.lng;
// 		}
//
// };


var optionsOldcoord = {
  enableHighAccuracy: true,
  maximumAge: 0
};

var optionsNewcoord = {
  enableHighAccuracy: true,
  maximumAge: 0
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}



AFRAME.registerComponent('markers_start',{
	init:function(){


					var sceneEl = document.querySelector('a-scene');

					//list of the markers
					for(var i=1; i<15; i++)
					{
						var url="../assets/markers-new/pattern-"+i+".patt";
						markersURLArray.push(url);
						markersNameArray.push('Marker_'+i);
					}

					for(var k=0; k<14; k++)
					{
							var markerEl = document.createElement('a-marker');
							// var markerEl = document.createElement('a-marker-camera');
							markerEl.setAttribute('type','pattern');
							markerEl.setAttribute('url',markersURLArray[k]);
							markerEl.setAttribute('id',markersNameArray[k]);


							markerEl.setAttribute('registerevents','');
							sceneEl.appendChild(markerEl);

				}

				// var cameraEl = document.querySelector('#camera');
				// var worldPos = new THREE.Vector3();
				// worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
				// console.log("world pos: ", worldPos.x);
				//
				// cameraEl.addEventListener('componentchanged', function (evt) {
				//   if (evt.detail.name !== 'position') { return; }
				//   console.log("componentchanged : ", evt.detail.newData);
				// });
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


				var cameraPosition = document.querySelector('[gps-camera]').object3D.position;
				console.log('Marker Position: ', marker.position.add(cameraPosition));


				// ADD MODELS AFTER MARKER FOUND
				navigator.geolocation.getCurrentPosition(function(position) {

						const newCoordinates = JSON.stringify({
							lat: position.coords.latitude,
							lng: position.coords.longitude
						});
						// console.log('stringified coordinates', newCoordinates);
						// localStorage.setItem('coords', newCoordinates);


						var body = document.querySelector('a-scene');

						var spiral = document.createElement('a-entity');

						// spiral.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						spiral.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						spiral.setAttribute('obj-model', {
													obj: '#spiral-obj',
													mtl: '#spiral-mtl'
												});
						spiral.object3D.position.set(0, 0.5, 0);
						spiral.object3D.scale.set(0.2, 0.2, 0.2);
						spiral.object3D.rotation.set(0, 0, 0);

						spiral.setAttribute('animation', {
													'property': 'rotation',
													'to': '0 360 0',
													'loop': true,
													'dur': 5000,
													'dir': "alternate"
												});

						body.appendChild(spiral);


						/////////////////////////////////////////////////////////////////////////////
						var animation_sphere_gold_oldest = document.createElement('a-entity');
						var torus1 = document.createElement('a-entity');
						var sphere1 = document.createElement('a-entity');

						// animation_sphere_gold_oldest.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						animation_sphere_gold_oldest.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						animation_sphere_gold_oldest.setAttribute('animation', {
													'property': 'rotation',
													'to': '0 360 0',
													'loop': true,
													'dur': 60000
												});
						animation_sphere_gold_oldest.object3D.position.set(-1, 0, -6);

						sphere1.setAttribute('obj-model', {
													obj: '#sphere_gold_oldest-obj',
													mtl: '#sphere_gold_oldest-mtl',

												});
						// sphere1.setAttribute('gltf-model', '#sphere_gold_oldest-gltf');

						sphere1.object3D.position.set(6, 0, 0);
						sphere1.setAttribute('animation', {
													'property': 'position',
													'easing': 'linear',
													'from': '6 0 0',
													'to': '6 1 0',
													'loop': true,
													'dur': 3000,
													'dir': "alternate"
												});

						animation_sphere_gold_oldest.appendChild(sphere1);

						// torus1.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						torus1.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						torus1.setAttribute('obj-model', {
													obj: '#torus_gold_oldest-obj',
													mtl: '#torus_gold_oldest-mtl'
												});

						torus1.object3D.scale.set(1, 1, 1);
						torus1.object3D.position.set(-1, 0, -6);
						torus1.setAttribute('animation', {
													'property': 'position',
													'easing': 'linear',
													'from': '-1 0 -6',
													'to': '-1 1 -6',
													'loop': true,
													'dur': 3000,
													'dir': "alternate"
												});


						body.appendChild(animation_sphere_gold_oldest);
						body.appendChild(torus1);

						//////////////////////////////////////////////////////////////////////////////////////////////


						var animation_sphere_gold = document.createElement('a-entity');
						var torus2 = document.createElement('a-entity');
						var sphere2 = document.createElement('a-entity');

						// animation_sphere_gold.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						animation_sphere_gold.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						animation_sphere_gold.setAttribute('animation', {
													'property': 'rotation',
													'to': '0 360 0',
													'loop': true,
													'dur': 3600000
												});
						animation_sphere_gold.object3D.position.set(-1, 0, -6);

						sphere2.setAttribute('obj-model', {
													obj: '#sphere_gold-obj',
													mtl: '#sphere_gold-mtl',

												});
						// sphere2.setAttribute('gltf-model', '#sphere_gold-gltf');

						sphere2.object3D.position.set(6, 1, 0);
						sphere2.setAttribute('animation', {
													'property': 'position',
													'easing': 'linear',
													'from': '6 1 0',
													'to': '6 2 0',
													'loop': true,
													'dur': 4000,
													'dir': "alternate"
												});

						animation_sphere_gold.appendChild(sphere2);


						// torus2.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						torus2.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						torus2.setAttribute('obj-model', {
													obj: '#torus-obj',
													mtl: '#gold-mtl'
												});

						torus2.object3D.scale.set(1, 1, 1);
						torus2.object3D.position.set(-1, 1, -6);
						torus2.setAttribute('animation', {
													'property': 'position',
													'easing': 'linear',
													'from': '-1 1 -6',
													'to': '-1 2 -6',
													'loop': true,
													'dur': 4000,
													'dir': "alternate"
												});


						body.appendChild(torus2);
						body.appendChild(animation_sphere_gold);


						/////////////////////////////////////////////////////////////////////////////

						var animation_sphere_gold_older = document.createElement('a-entity');
						var torus3 = document.createElement('a-entity');
						var sphere3 = document.createElement('a-entity');

						// animation_sphere_gold_older.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						animation_sphere_gold_older.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						animation_sphere_gold_older.setAttribute('animation', {
													'property': 'rotation',
													'to': '0 360 0',
													'loop': true,
													'dur': 86400000
												});
						animation_sphere_gold_older.object3D.position.set(-1, 0, -6);

						sphere3.setAttribute('obj-model', {
													obj: '#sphere_gold_older-obj',
													mtl: '#sphere_gold_older-mtl',

												});
						// sphere3.setAttribute('gltf-model', '#sphere_gold_older-gltf');

						sphere3.object3D.position.set(6, 2, 0);
						sphere3.setAttribute('animation', {
													'property': 'position',
													'easing': 'linear',
													'from': '6 3 0',
													'to': '6 2 0',
													'loop': true,
													'dur': 4000,
													'dir': "alternate"
												});

						animation_sphere_gold_older.appendChild(sphere3);

						// torus3.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						torus3.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						torus3.setAttribute('obj-model', {
													obj: '#torus_gold_older-obj',
													mtl: '#torus_gold_older-mtl'
												});

						torus3.object3D.scale.set(1, 1, 1);
						torus3.object3D.position.set(-1, 2, -6);

						torus3.setAttribute('animation', {
													'property': 'position',
													'easing': 'linear',
													'from': '-1 3 -6',
													'to': '-1 2 -6',
													'loop': true,
													'dur': 4000,
													'dir': "alternate"
												});


						body.appendChild(torus3);
						body.appendChild(animation_sphere_gold_older);

						 console.log('successfully show AR on location based');

					}, error, optionsNewcoord);



			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});

// AFRAME.registerComponent('camera-listener', {
//   tick: function () {
//     var cameraEl = this.el.sceneEl.camera.el;
//     console.log("yang posisi ", cameraEl.getAttribute('position'));
//     console.log("yang rotasi ", cameraEl.getAttribute('rotation'));
//
//     // Do something.
//   }
// });
//
// AFRAME.registerComponent('rotation-reader', {
//   /**
//    * We use IIFE (immediately-invoked function expression) to only allocate one
//    * vector or euler and not re-create on every tick to save memory.
//    */
//   tick: (function () {
//     var position = new THREE.Vector3();
//     var quaternion = new THREE.Quaternion();
//
//
//     return function () {
//       var tes_position = this.el.object3D.getWorldPosition(position);
//       var rotation = this.el.object3D.getWorldQuaternion(quaternion);
// 			// position.setFromMatrixPosition(this.el.object3D.matrixWorld);
// 			// console.log("Position from setFromMatrixPosition: " + position.x + " " + position.y + " " + position.z);
// 			// console.log("Position from getWorldPosition: ", tes_position);
// 			// console.log("Position from getWorldPosition: ", position.setFromMatrixPosition(this.el.object3D.matrixWorld));
// 			// console.log("rotation: ", rotation);
//       // position and rotation now contain vector and quaternion in world space.
//     };
//   })()
// });
