$( document ).ready(function() {
    var data = {
				    "content": { 								

								"count": "906,171", 
								"death": "12,084" ,
								"dailycount": "16,982", 
								"dailydeath": "221" ,
								"date":"01/09" ,
								"info":"through 8:00pm 01/08/2021" ,
								
								"testingaverage":"77,492" , 
								"peopletested":"4,957,136" ,
								"positivity":"20.90%" ,		
								"hospitalizations":"7,966"		
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



