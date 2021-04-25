$( document ).ready(function() {
    var data = {
				    "content": { 
								
								
								
								
								
								
"count": "1,231,163",



								"death": "23,775",


								"dailycount": "443",


								"dailydeath": "16", 

								"date":"04/23" ,
								"info":"through 6:00pm 04/23/2021" ,
								
								//update M-F only with same info as above,
								"datem":"04/23" ,
								"infom":"through 6:00pm 04/22/2021" ,

								"testingaverage":"62,554",
								"peopletested":"6,397,882",

								"positivity":"0.90%" ,	
								"hospitalizations":"453"
								
								
								
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



