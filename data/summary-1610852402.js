$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,003,923", 

								"death": "13,741" ,

								"dailycount": "14,669", 

								"dailydeath": "253" ,
								"date":"01/16" ,
								"info":"through 6:00pm 01/15/2021" ,
																
								//update M-F only with same info as above,
								"datem":"01/15" ,
								"infom":"through 6:00pm 01/14/2021" ,
								
								"testingaverage":"109,360" ,
								"peopletested":"5,190,051 " ,
								"positivity":"17.30% " ,		
								"hospitalizations":"7,597"		
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



