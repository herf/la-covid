$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "387,793",
								"death": "7,604" ,
								"dailycount": "4,544", 
								"dailydeath": "24" ,
								"date":"11/27" ,
								"info":"through 8:00pm 11/26/2020" ,
								
								"testingaverage":"68,292" , 
								"peopletested":"3,681,714" , 
								"positivity":"6.90%" , 
								"hospitalizations":"1,893"	

								
								
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



