$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "818,639", 
								"death": "10,773" ,
								"dailycount": "12,488", 
								"dailydeath": "91" ,
								"date":"01/03" ,
								"info":"through 8:00pm 01/02/2021" ,
								
								"testingaverage":"77,520" , 
								"peopletested":"4,787,140" ,
								"positivity":"18.40%" ,		
								"hospitalizations":"7,544"		
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



