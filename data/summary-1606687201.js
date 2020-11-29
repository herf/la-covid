$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
								
								"count": "395,843",
								"death": "7,639" ,
								"dailycount": "5,014", 
								"dailydeath": "16" ,
								"date":"11/29" ,
								"info":"through 8:00pm 11/28/2020" ,
								
								"testingaverage":"71,363" , 
								"peopletested":"3,712,775" , 
								"positivity":"6.90%" , 
								"hospitalizations":"2,049"	

								
								
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



