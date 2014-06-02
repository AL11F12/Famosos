// JavaScript Document
 var panel='<div  data-role="panel" id="mipanel" data-theme="a" data-display="push"> <div class="panel-content" align="center"> <img src="imagenes/estrellas.jpg" width="200" height="100"> <div data-role="controlgroup"> <a data-role="button" href="#page" id="Boton"> Principal </a> <a data-role="button" href="#page2" id="Boton1"> Prince Royce </a> <a data-role="button" href="#page3" id="Boton2"> 2010–11: Prince Royce </a>   <a data-role="button" href="#page4" id="Boton3"> 2012: Phase II</a>  <a data-role="button" href="#page5" id="Boton4">2013-presente: Sony Music Entertainment y Soy el mismo </a><a data-role="button" href="#page6" id="Boton5">SELENA QUNTANILLA</a><a data-role="button" href="#page7" id="Boton6">Carrera Musical</a><a data-role="button" href="#page8" id="Boton7">Solista</a><a data-role="button" href="#page9" id="Boton8">Muerte</a><a data-role="button" href="#page10" id="Boton9">Acerca de</a></div>   </div>    </div>';

	$(document).on('pagebeforecreate','[data-role=page]', function(){
		if($(this).find('[data-role=panel]').length === 0)
		{
			$('[data-role=header]').before(panel);
			}
	});//before create
$(document).ready(function(e){
 document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(150);//milisegundos
	});
	},false); //deviceready
});//ready