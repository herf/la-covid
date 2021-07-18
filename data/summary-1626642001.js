$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,267,860" ,

								"death": "24,583" ,

								"dailycount": "1,635" ,

								"dailydeath": "4" ,
								"date":"07/18" ,
								"info":"through 6:00pm 07/17/2021" ,							
								

								"testingaverage":"35,907" ,

								"peopletested":"7,175,294" ,

								"positivity":"3.17%" ,
								"hospitalizations":"507"

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



