$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,237,899",



								"death": "24,117",



								"dailycount": "255",

								"dailydeath": "16",

								"date":"05/19" ,
								"info":"through 6:00pm 05/18/2021" ,
								
								//update M-F only with same info as above,
								"datem":"05/19" ,
								"infom":"through 6:00pm 05/18/2021" ,

								"testingaverage":"61,942",
								"peopletested":"6,661,614",

								"positivity":"0.50%" ,	
								"hospitalizations":"352" 
								

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



