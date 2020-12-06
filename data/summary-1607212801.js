$( document ).ready(function() {
    var data = {
				    "content": {          
				               	
				               	"count": "439,408",
								"death": "7,886" ,
								"dailycount": "8,949", 
								"dailydeath": "44" ,
								"date":"12/05" ,
								"info":"through 8:00pm 12/04/2020" ,
								
								"testingaverage":"60,162" , 
								"peopletested":"3,868,655" , 
								"positivity":"8.90%" , 
								"hospitalizations":"2,769"	
								
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



