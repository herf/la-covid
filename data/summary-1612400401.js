$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,129,503", 

								"death": "17,308", 

								"dailycount": "5,189", 

								"dailydeath": "256", 

								"date":"02/03" ,
								"info":"through 6:00pm 02/02/2021" ,
								
								//update M-F only with same info as above,
								"datem":"02/03" ,
								"infom":"through 6:00pm 02/02/2021" ,
								
								"testingaverage":"75,583" ,
								"peopletested":"5,542,847" ,
								"positivity":"10.70%" ,	
								"hospitalizations":"5,165"									
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



