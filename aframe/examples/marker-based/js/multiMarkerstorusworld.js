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


						var torus1_parent = document.createElement('a-entity');
						var torus1 = document.createElement('a-entity');
						var sphere1 = document.createElement('a-entity');

						var torus2_parent = document.createElement('a-entity');
						var torus2 = document.createElement('a-entity');
						var sphere2 = document.createElement('a-entity');

						var torus3_parent = document.createElement('a-entity');
						var torus3 = document.createElement('a-entity');
						var sphere3 = document.createElement('a-entity');

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
						spiral.object3D.scale.set(0.1, 0.1, 0.1);
						spiral.object3D.rotation.set(0, 0, 0);
						spiral.emit('rotate');

						markerEl.appendChild(spiral);


						// Torus 1
						// textEl.setAttribute('gltf-model','#monster');
						// textEl.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// textEl.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);

						torus1.setAttribute('obj-model', {
							obj: '#torus_gold_oldest-obj',
							mtl: '#torus_gold_oldest-mtl'
						});
						torus1.object3D.position.set(1, 0, 0);
						torus1.object3D.scale.set(0.1, 0.1, 0.1);
						torus1.object3D.rotation.set(0, 0, 0);

						sphere1.setAttribute('obj-model', {
							obj: '#sphere_gold_oldest-obj',
							mtl: '#sphere_gold_oldest-mtl'
						});
						sphere1.object3D.position.set(1, 0, 0);
						sphere1.object3D.scale.set(0.05, 0.05, 0.05);
						sphere1.object3D.rotation.set(0, 0, 0);


						markerEl.appendChild(torus1);
						markerEl.appendChild(sphere1);
						// markerEl.appendChild(torus1_parent);


						// Torus 2
						// textEl1.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// textEl1.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						torus2.setAttribute('obj-model', {
							obj: '#torus_gold_oldest-obj',
							mtl: '#torus_gold_oldest-mtl'
						});
						torus2.object3D.position.set(1.3, 0, 0);
						torus2.object3D.scale.set(0.2, 0.2, 0.2);
						torus2.object3D.rotation.set(0, 0, 0);

						sphere2.setAttribute('obj-model', {
							obj: '#sphere_gold_oldest-obj',
							mtl: '#sphere_gold_oldest-mtl'
						});
						sphere2.object3D.position.set(1.3, 0, 0);
						sphere2.object3D.scale.set(0.05, 0.05, 0.05);
						sphere2.object3D.rotation.set(0, 0, 0);


						markerEl.appendChild(torus2);
						markerEl.appendChild(sphere2);
						// markerEl.appendChild(torus2_parent);



						// Torus 3
						// textEl2.setAttribute('gps-entity-place', `latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude}`);
						// textEl2.setAttribute('gps-entity-place', `latitude: ${lat}; longitude: ${long}`);
						torus3.setAttribute('obj-model', {
							obj: '#torus_gold_oldest-obj',
							mtl: '#torus_gold_oldest-mtl'
						});
						torus3.object3D.position.set(1.6, 0, 0);
						torus3.object3D.scale.set(0.3, 0.3, 0.3);
						torus3.object3D.rotation.set(0, 0, 0);

						sphere3.setAttribute('obj-model', {
							obj: '#sphere_gold_oldest-obj',
							mtl: '#sphere_gold_oldest-mtl'
						});
						sphere3.object3D.position.set(1.6, 0, 0);
						sphere3.object3D.scale.set(0.05, 0.05, 0.05);
						sphere3.object3D.rotation.set(0, 0, 0);


						markerEl.appendChild(torus3);
						markerEl.appendChild(sphere3);
						// markerEl.appendChild(torus3_parent);


						// console.log('Model component registered successfully!' , ` latitude: ${lat}; longitude: ${long}`);
						console.log('Model component registered successfully!' );
						console.log(markerEl);
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


            // var cameraEl = document.querySelector('#camera');
            // var worldPos = new THREE.Vector3();
            // worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
            // console.log("yang world pos: ", worldPos.x);

						// tick: function () {
					  //   var cameraEl = this.el.sceneEl.camera.el;
					  //   console.log("yang tick", cameraEl.getAttribute('position'));
					  //   console.log("yang tick" , cameraEl.getAttribute('rotation'));
						//
					  //   // Do something.
					  // }

			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});

AFRAME.registerComponent('camera-listener', {
  tick: function () {
    var cameraEl = this.el.sceneEl.camera.el;
    console.log("yang posisi ", cameraEl.getAttribute('position'));
    console.log("yang rotasi ", cameraEl.getAttribute('rotation'));

    // Do something.
  }
});

AFRAME.registerComponent('rotation-reader', {
  /**
   * We use IIFE (immediately-invoked function expression) to only allocate one
   * vector or euler and not re-create on every tick to save memory.
   */
  tick: (function () {
    var position = new THREE.Vector3();
    var quaternion = new THREE.Quaternion();

    return function () {
      var position = this.el.object3D.getWorldPosition(position);
      var rotation = this.el.object3D.getWorldQuaternion(quaternion);
			console.log("Position: ", position);
			console.log("rotation: ", rotation);
      // position and rotation now contain vector and quaternion in world space.
    };
  })()
});
