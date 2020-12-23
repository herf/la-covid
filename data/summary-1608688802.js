$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								"count": "647,542", 

								"death": "9,016" ,
								"dailycount": "12,954", 
								"dailydeath": "88" ,
								"date":"12/22" ,
								"info":"through 8:00pm 12/21/2020" ,
								
								"testingaverage":"93,909" ,
								"peopletested":"4,425,112" ,
								"positivity":"15.90%" , 
								"hospitalizations":"5,866" 						
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



