$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
                                "count": "1,247,032",

								"death": "24,428",
								"dailycount": "249",
								"dailydeath": "8",
								"date":"06/17" ,
								"info":"through 6:00pm 06/16/2021" ,
								
								//update M-F only with same info as above,
								"datem":"06/17" ,
								"infom":"through 6:00pm 06/16/2021" ,

								"testingaverage":"50,712",

								"peopletested":"6,926,377",

								"positivity":"0.50%" ,
								"hospitalizations":"223" 



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



