$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "719,833", 

								"death": "9,482" ,
								"dailycount": "13,580", 
								"dailydeath": "44" ,
								"date":"12/27" ,
								"info":"through 8:00pm 12/26/2020" ,
								
								"testingaverage":"101,464" ,
								"peopletested":"4,600,764" ,
								"positivity":"16.80%" , 
								"hospitalizations":"6,815" 						
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



