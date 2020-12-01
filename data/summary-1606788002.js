$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "400,919",
								"death": "7,655" ,
								"dailycount": "5,150", 
								"dailydeath": "17" ,
								"date":"11/30" ,
								"info":"through 8:00pm 11/29/2020" ,
								
								"testingaverage":"73,578" , 
								"peopletested":"3,734,055" , 
								"positivity":"6.90%" , 
								"hospitalizations":"2,185"	

								
								
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



