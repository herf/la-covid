$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "430,583",
								"death": "7,842" ,
								"dailycount": "8,860", 
								"dailydeath": "60" ,
								"date":"12/04" ,
								"info":"through 8:00pm 12/03/2020" ,
								
								"testingaverage":"59,373" , 
								"peopletested":"3,838,249" , 
								"positivity":"8%" , 
								"hospitalizations":"2,668"	

								
								
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



