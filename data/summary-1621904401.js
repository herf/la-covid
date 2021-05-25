$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,238,919",





								"death": "24,175",





								"dailycount": "139",


								"dailydeath": "4",

								"date":"05/24" ,
								"info":"through 6:00pm 05/23/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/24" ,
								"infom":"through 6:00pm 05/23/2021" ,

								"testingaverage":"63,029",
								"peopletested":"6,706,213",

								"positivity":"0.50%" ,
								"hospitalizations":"319" 



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



