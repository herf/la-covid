$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "390,891",
								"death": "7,623" ,
								"dailycount": "3,143", 
								"dailydeath": "19" ,
								"date":"11/28" ,
								"info":"through 8:00pm 11/27/2020" ,
								
								"testingaverage":"70,215" , 
								"peopletested":"3,695,582" , 
								"positivity":"6.90%" , 
								"hospitalizations":"903"	

								
								
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



