$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "663,954", 

								"death": "9,153" ,
								"dailycount": "16,525", 
								"dailydeath": "145" ,
								"date":"12/23" ,
								"info":"through 8:00pm 12/22/2020" ,
								
								"testingaverage":"96,023" ,
								"peopletested":"4,469,138" ,
								"positivity":"16.30%" , 
								"hospitalizations":"6,155" 						
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



