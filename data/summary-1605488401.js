$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "339,560", 
								"death": "7,269" ,
								"dailycount": "3,061",
								"dailydeath": "3" ,
								"date":"11/15" ,
								"info":"through 8:00pm 11/14/2020" ,
								
								"testingaverage":"48,911" , 
								"peopletested":"3,386,836" , 
								"positivity":"5.1%" , 
								"hospitalizations":"1,014"	

								
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



