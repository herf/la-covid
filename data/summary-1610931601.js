$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,014,662", 
								"death": "13,848" ,
								"dailycount": "11,366", 
								"dailydeath": "108" ,
								"date":"01/17" ,
								"info":"through 6:00pm 01/16/2021" ,
																
								//update M-F only with same info as above,
								"datem":"01/15" ,
								"infom":"through 6:00pm 01/14/2021" ,
								
								"testingaverage":"109,060" ,
								"peopletested":"5,218,812" ,
								"positivity":"17.20%" ,		
								"hospitalizations":"7,498"		
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



