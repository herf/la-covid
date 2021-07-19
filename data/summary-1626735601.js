$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,269,090" ,

								"death": "24,585" ,

								"dailycount": "1,233" ,

								"dailydeath": "2" ,
								"date":"07/19" ,
								"info":"through 6:00pm 07/18/2021" ,							
								

								"testingaverage":"40,238" ,

								"peopletested":"7,182,073" ,

								"positivity":"3.23%" ,
								"hospitalizations":"528"

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
			
				
				$('#tstavg').html(content.testingaverage);	
				$('#ppltst').html(content.peopletested);	
				$('#pos').html(content.positivity);	
				$('#hosp').html(content.hospitalizations);
			
							


});



