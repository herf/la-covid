$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "256,148",
				            "death": "6,303" ,
				            "dailycount": "1,148",
				            "dailydeath": "31" ,
				            "date":"09/16" ,
				            "info":"through 8:00pm 09/15/2020" ,
				            
							"testingaverage":"9,772" ,
							"peopletested":"2,477,727" ,
							"positivity":"3.3%" ,
							"hospitalizations":"804" , 
							                
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



