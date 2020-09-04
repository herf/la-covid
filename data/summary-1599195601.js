$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "244,999",
				            "death": "5,932" ,
				            "dailycount": "1,193",
				            "dailydeath": "61" ,
				            "date":"09/03" ,
				            "info":"through 8:00pm 09/02/2020" ,
				            
							"testingaverage":"12,732" ,
							"peopletested":"2,332,066" ,
							"positivity":"4.8%" ,
							"hospitalizations":"1,062" , 
							                
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



