$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,237,681",



								"death": "24,106",



								"dailycount": "159",

								"dailydeath": "12",

								"date":"05/18" ,
								"info":"through 6:00pm 05/17/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/18" ,
								"infom":"through 6:00pm 05/17/2021" ,

								"testingaverage":"61,131",
								"peopletested":"6,653,474",

								"positivity":"0.50%" ,	
								"hospitalizations":"338" 
								

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



