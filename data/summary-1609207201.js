$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								

								"count": "733,325", 

								"death": "9,555" ,
								"dailycount": "13,661", 
								"dailydeath": "73" ,
								"date":"12/28" ,
								"info":"through 8:00pm 12/27/2020" ,
								
								"testingaverage":"102,600" , 
								"peopletested":"4,629,840" ,
								"positivity":"16.80%" , 
								"hospitalizations":"6,914" 						
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



