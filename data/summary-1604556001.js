$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "313,526", 
								"death": "7,117" ,
								"dailycount": "1,843",
								"dailydeath": "22" ,
								"date":"11/04" ,
								"info":"through 8:00pm 11/03/2020" ,
								
								"testingaverage":"16,173" , 
								"peopletested":"3,181,823" , 
								"positivity":"3.8%" , 
								"hospitalizations":"817"	
								
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



