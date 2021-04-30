$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,232,727",

								"death": "23,872",

								"dailycount": "416",

								"dailydeath": "42", 

								"date":"04/29" ,
								"info":"through 6:00pm 04/28/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/29" ,
								"infom":"through 6:00pm 04/28/2021" ,

								"testingaverage":"66,146",
								"peopletested":"6,477,072 ",

								"positivity":"0.80%" ,	
								"hospitalizations":"410"
								
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



