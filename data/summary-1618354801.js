$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								"count": "1,226,596",


								"death": "23,498",

								"dailycount": "448",


								"dailydeath": "23", 


								"date":"04/13" ,
								"info":"through 6:00pm 04/12/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/13" ,
								"infom":"through 6:00pm 04/12/2021" ,

								
								"testingaverage":"43,278", 
								"peopletested":"6,223,280",
								"positivity":"1.40%" ,	
								"hospitalizations":"471"
				        }       
				};	
				
				
				var content = data.content;
				
				$('#ctn').html(content.count);
				$('#det').html(content.death);
				$('#dctn').html(content.dailycount);
				$('#ddet').html(content.dailydeath);
				$('#dte').html(content.date);
				$('#dte_1').html(content.date);
				$('#dte_2').html(content.date);
				$('#dte_3').html(content.date);
				$('#cse').html(content.info);	
				
				$('#dte_m').html(content.datem);
				$('#cse_m').html(content.infom);
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



