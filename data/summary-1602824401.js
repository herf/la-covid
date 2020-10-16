$( document ).ready(function() {
    var data = {
				    "content": {            
				               "count": "286,183", 
								"death": "6,834" ,
								"dailycount": "1,233",
								"dailydeath": "24" ,
								"date":"10/15" ,
								"info":"through 8:00pm 10/14/2020" ,
								
								"testingaverage":"13,775" , 
								"peopletested":"2,866,375" , 
								"positivity":"3.1%" , 
								"hospitalizations":"723"	
								
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



