window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 4,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 9000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
    document.getElementsByClassName('slider')[0].style.marginBottom = '25px';

    document.getElementsByClassName('slider-pagination')[0].style.marginBottom = '-25px';
    
    // // Loop on each carousel initialized
    // for(var i = 0; i < carousels.length; i++) {
    // 	// Add listener to  event
    // 	carousels[i].on('before:show', state => {
    // 		console.log(state);
    // 	});
    // }

    // // Access to bulmaCarousel instance of an element
    // var element = document.querySelector('#my-element');
    // if (element && element.bulmaCarousel) {
    // 	// bulmaCarousel instance is available as element.bulmaCarousel
    // 	element.bulmaCarousel.on('before-show', function(state) {
    // 		console.log(state);
    // 	});
    // }
    // bulmaSlider.attach();

    $("#celebrity_button").click(function () {
      var button = document.getElementById('celebrity_button');
      var row_list = document.getElementsByClassName('celebrity_hide_row');
      if (button.value == '▶ Show More') {
        for (var i = 0; i < row_list.length; i++) {
          row_list[i].style.display = 'table-row';
        }
        button.value = '▼ Show Less';
      } else {
        for (var i = 0; i < row_list.length; i++) {
          row_list[i].style.display = 'none';
        }
        button.value = '▶ Show More';
      }
    });

    $("#fictional_button").click(function () {
      var button = document.getElementById('fictional_button');
      var row_list = document.getElementsByClassName('fictional_hide_row');
      if (button.value == '▶ Show More') {
        for (var i = 0; i < row_list.length; i++) {
          row_list[i].style.display = 'table-row';
        }
        button.value = '▼ Show Less';
      } else {
        for (var i = 0; i < row_list.length; i++) {
          row_list[i].style.display = 'none';
        }
        button.value = '▶ Show More';
      }
    });

    $("#general_button").click(function () {
      var button = document.getElementById('general_button');
      var row_list = document.getElementsByClassName('general_hide_row');
      if (button.value == '▶ Show More') {
        for (var i = 0; i < row_list.length; i++) {
          row_list[i].style.display = 'table-row';
        }
        button.value = '▼ Show Less';
      } else {
        for (var i = 0; i < row_list.length; i++) {
          row_list[i].style.display = 'none';
        }
        button.value = '▶ Show More';
      }
    });

    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    var modelviewer = document.getElementById("myModelViewer");
    var downloadbtn = document.getElementById("model_download");
    // var fbxdownloadbtn = document.getElementById("fbx_download");
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
      modelviewer.setAttribute('src', '');
      modelviewer.modelCacheSize = 0;
      downloadbtn.setAttribute('href', '');
    }
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //     modelviewer.setAttribute('src', '');
    //     modelviewer.modelCacheSize = 0;
    //     downloadbtn.setAttribute('href', '');
    //   }
    // }
    $("#abrahamlincoln_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/abrahamlincoln.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#obama_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/obama.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#trump_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/trump.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#clinton_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/clinton.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#joebiden_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/joebiden.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#hinton_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/hinton.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#bengio_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/bengio.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#lecun_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/lecun.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#andrewng_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/andrewng.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#gates_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/gates.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#elvispresley_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/elvispresley.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#freddiemercury_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/freddiemercury.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#drake_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/drake.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#kanyewest_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/kanyewest.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#johnlennon_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/johnlennon.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#ellendegeneres_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/ellendegeneres.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#karllagerfeld_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/karllagerfeld.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#simoncowell_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/simoncowell.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#ronaldo_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/ronaldo.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#messi_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/messi.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#jobs_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/jobs.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#pope_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/pope.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#LeonardoDiCaprio_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/LeonardoDiCaprio.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#tomcruise_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/tomcruise.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#keanureeves_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/keanureeves.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#antman_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/antman.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#captainamerica_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/captainamerica.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#thor_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/thor.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#loki_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/loki.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#strange_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/strange.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#superman_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/superman.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#deadpool_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/deadpool.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#batman_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/batman.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#NickFury_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/NickFury.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#captainmarvel_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/captainmarvel.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#lukeskywalker_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/lukeskywalker.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#jedi_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/jedi.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#potter_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/potter.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#sheldoncooper_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/sheldoncooper.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#forrestgump_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/forrestgump.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#godfather_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/godfather.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#sherlockholmes_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/sherlockholmes.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#FlynnRider_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/FlynnRider.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#elsa_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/elsa.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#gintoki_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/gintoki.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#jamesbond_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/jamesbond.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#johnwick_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/johnwick.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#godzilla_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/godzilla.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#alien_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/alien.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#zombie_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/zombie.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#witch_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/witch.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#wizard_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/wizard.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#robot_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/robot.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#warrior_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/warrior.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#ancientprinceofindia_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/ancientprinceofindia.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#teenager_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/teenager.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#seniorcitizen_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/seniorcitizen.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#gardener_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/gardener.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#constructionmanager_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/constructionmanager.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#casinodealer_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/casinodealer.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#rockstar_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/rockstar.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#soldier_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/soldier.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#firefighter_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/firefighter.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#pilot_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/pilot.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#astronaut_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/astronaut.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#scientist_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/scientist.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#researcher_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/researcher.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#professor_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/professor.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#softwaredeveloper_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/softwaredeveloper.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#lawyer_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/lawyer.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#accountant_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/accountant.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#policeofficer_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/policeofficer.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#graduatestudent_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/graduatestudent.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#highschoolteacher_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/highschoolteacher.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
    $("#doctor_button").click(function() {
      modal.style.display = "block";
      var file_path = '/assets/AvatarCLIP/models/doctor.glb';
      modelviewer.setAttribute('src', file_path);
      downloadbtn.setAttribute('href', file_path);
      var fbx_file_path = file_path.replace('models', 'fbx_models');
      fbx_file_path = fbx_file_path.replace('glb', 'fbx');
      // fbxdownloadbtn.setAttribute('href', fbx_file_path);
    });
})


// $(window).on("load", function() {
//   $('.preload').attr('src', function(i,a){
//       $(this).attr('src','')
//           .removeClass('preload')
//           .attr('src',a);
//   });
// });
