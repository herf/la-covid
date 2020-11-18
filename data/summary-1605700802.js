$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								"count": "344,523", 
								"death": "7,299" ,
								"dailycount": "2,301",
								"dailydeath": "25" ,
								"date":"11/17" ,
								"info":"through 8:00pm 11/16/2020" ,
								
								"testingaverage":"50,833" , 
								"peopletested":"3,422,263" , 
								"positivity":"5.3%" , 
								"hospitalizations":"1,126"	

								
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



