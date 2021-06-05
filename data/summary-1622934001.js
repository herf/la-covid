$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,244,917",
								"death": "24,390",
								"dailycount": "285",
								"dailydeath": "15",
								"date":"06/05" ,
								"info":"through 6:00pm 06/04/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/05" ,
								"infom":"through 6:00pm 06/04/2021" ,

								"testingaverage":"59,475",
								"peopletested":"6,809,169",

								"positivity":"0.40%" ,
								"hospitalizations":"263" 



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



