$( document ).ready(function() {
    var data = {
				    "content": {          
				               								
								
								
								"count": "364,520", 
								"death": "7,438" ,
								"dailycount": "2,718",
								"dailydeath": "9" ,
								"date":"11/22" ,
								"info":"through 8:00pm 11/21/2020" ,
								
								"testingaverage":"56,932" ,
								"peopletested":"3,542,284" , 
								"positivity":"6.1%" , 
								"hospitalizations":"1,401"	

								
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



