$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "1,031,874", 

								"death": "14,122", 

								"dailycount": "7,902", 

								"dailydeath": "186", 

								"date":"01/19" ,
								"info":"through 6:00pm 01/18/2021" ,
								
								//update M-F only with same info as above,
								"datem":"01/19" ,
								"infom":"through 6:00pm 01/18/2021" ,
								
								"testingaverage":"103,299" ,
								"peopletested":"5,266,941" ,
								"positivity":"15.90%" ,		
								"hospitalizations":"7,322"									
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



