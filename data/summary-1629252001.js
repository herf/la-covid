$( document ).ready(function() {
    var data = {
				    "content": { 
								
								"count": "1,355,698" ,

								"death": "24,935" ,

								"dailycount": "2,907" ,

								"dailydeath": "30" ,
								"date":"08/17" ,
								"info":"through 6:00pm 08/16/2021" ,							
								

								"testingaverage":"96,104" ,

								"peopletested":"7,792,320" ,

								"positivity":"4.07%" ,
								"hospitalizations":"1,679"

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



