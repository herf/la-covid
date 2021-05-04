$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,234,202",

								"death": "23,930",

								"dailycount": "273",

								"dailydeath": "18", 

								"date":"05/04" ,
								"info":"through 6:00pm 05/03/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/04" ,
								"infom":"through 6:00pm 05/03/2021" ,

								"testingaverage":"63,513",
								"peopletested":"6,524,891",

								"positivity":"0.70%" ,	
								"hospitalizations":"386"
								
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



