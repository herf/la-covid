$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "457,880",
								"death": "7,936" ,
								"dailycount": "8,086", 
								"dailydeath": "27" ,
								"date":"12/07" ,
								"info":"through 8:00pm 12/06/2020" ,
								
								"testingaverage":"61,466" , 
								"peopletested":"3,928,459" , 
								"positivity":"10.20%" , 
								"hospitalizations":"2,988"	
								
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



