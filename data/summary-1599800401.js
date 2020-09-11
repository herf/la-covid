$( document ).ready(function() {
    var data = {
				    "content": {            
				            "count": "251,024",
				            "death": "6,128" ,
				            "dailycount": "1,239",
				            "dailydeath": "42" ,
				            "date":"09/10" ,
				            "info":"through 8:00pm 09/09/2020" ,
				            
							"testingaverage":"11,882" ,
							"peopletested":"2,405,706" ,
							"positivity":"3.5%" ,
							"hospitalizations":"940" , 
							                
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



