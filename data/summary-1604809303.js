$( document ).ready(function() {
    var data = {
				    "content": {            
				               								
								 "count": "319,977", 
								"death": "7,170" ,
								"dailycount": "2,418",
								"dailydeath": "15" ,
								"date":"11/07" ,
								"info":"through 8:00pm 11/06/2020" ,
								
								"testingaverage":"15,938" , 
								"peopletested":"3,236,249" , 
								"positivity":"3.9%" , 
								"hospitalizations":"840"	

								
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



