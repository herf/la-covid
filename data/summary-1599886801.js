$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "252,066",
				            "death": "6,171" ,
				            "dailycount": "1,115",
				            "dailydeath": "43" ,
				            "date":"09/11" ,
				            "info":"through 8:00pm 09/10/2020" ,
				            
							"testingaverage":"11,814" ,
							"peopletested":"2,418,971" ,
							"positivity":"3.5%" ,
							"hospitalizations":"889" , 
							                
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



