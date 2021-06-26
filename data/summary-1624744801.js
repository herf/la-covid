$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,249,065",

								"death": "24,474",

								"dailycount": "366",
								"dailydeath": "7",
								"date":"06/26" ,
								"info":"through 6:00pm 06/25/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/25" ,
								"infom":"through 6:00pm 06/24/2021" ,

								"testingaverage":"33,863",

								"peopletested":"6,999,377",

								"positivity":"0.74%" , 
								"hospitalizations":"229" 

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



